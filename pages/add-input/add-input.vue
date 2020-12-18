<template>
	<!-- 发布页 -->
	<view>
		<!-- 自定义导航栏组件 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc u-f1" @tap="changelook">
				{{yinsi}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea value="" placeholder="说一句话吧~~" v-model="text" />
			</view>
		<!-- 上传多图 -->
		<uploud-image @uploud="uploud"></uploud-image>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<view class="gonggao">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	let changelook = ['所有人可见', '仅自己可见'];
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uploudImage from "../../components/common/uploud-image.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniNavBar,
			uploudImage,
			uniPopup
		},
		data() {
			return {
				isget:false,
				showpopup:true,
				yinsi: "所有人可见",
				text:"",
				imageList:[],
				type: 'center',
			}
		},
		//监听页面返回
		onBackPress() {
			//如果有值
			if(!this.text && this.imageList.length<1){
				return
			}
			if(!this.isget){
			this.baocun();
			return true;
			}
		},
		methods: {
			//保存为草稿
			baocun(){
				uni.showModal({
					content: '是否要保存为草稿',
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){
							
						}else{
							
						}
						this.isget = true;
						uni.navigateBack({
							delta: 1
						});
					},
				});
			},
			hidePopup(){
				this.showpopup=false;
			},
			//返回
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			//发布
			submit() {
				console.log("发布");
			},
			//隐私
			changelook() {
				console.log("隐私");
				uni.showActionSheet({
					itemList: changelook,
					success: (res) => {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						this.yinsi = changelook[res.tapIndex]
					}
				});
			},
			
			chooseImage: async function() {
				// #ifdef APP-PLUS
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
				// #endif
			
				if (this.imageList.length === 9) {return;}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
					},
					fail: (err) => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			delect(index){
				uni.showModal({
				    title: '提示',
				    content: '是否要删除该图片',
				    success: (res) => {
				        if (res.confirm) {
				           this.imageList.splice(index,1)
				        }
				    }
				});
				
			},
			uploud(arr){
				this.imageList = arr;
			}
		}
	}
</script>

<style scoped>
	.uni-textarea{
		border: 1upx solid #EEEEEE;
	}
.gonggao{
	width: 500upx;
}
.gonggao image{
	width: 75%;
	margin-bottom: 20upx;
}
.gonggao button{
	margin-top: 20upx;
	background: #FFE934;
	color: #171606;
}
</style>
