<template>
	<!-- 首页列表组件 -->
	<view class="index-list animated fadeInLeft fast">
		<view class="index-list1 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{item.username}}
			</view>
			<view class="u-f-ac" v-show="!item.isguanzhu" @tap=guanzhu>
				<view class="icon iconfont icon-zengjia">
				</view>关注
			</view>
		</view>
		<view class="index-list2" @tap="opendetail">
			{{item.title}}
		</view>
		<view class="index-list3 u-f-ajc"  @tap="opendetail">
			<!-- 这是一个图片 -->
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type=='video'">
				<view class="index-list-play xicon iconfont icon-bofang">

				</view>
				<view class="index-list-playinfo">
					{{item.playnum}}次播放{{item.long}}
				</view>
			</template>


		</view>
		<view class="index-list4 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<view class="u-f-ac" :class="{'active':(item.infonum.index == 1)}" @tap="caozuo('ding')">
					<view class="icon iconfont icon-icon_xiaolian-mian">
						{{item.infonum.dingnum}}
					</view>
				</view>
				<view class="u-f-ac" :class="{'active':(item.infonum.index == 2)}" @tap="caozuo('cai')">
					<view class="icon iconfont icon-kulian">
						{{item.infonum.cainum}}
					</view>
				</view>
			</view>
			<view class="u-f-ac">
				<view class="u-f-ac">
					<view class="icon iconfont icon-pinglun1">
						{{item.commentnum}}
					</view>
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">
						{{item.sharenum}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		onLoad(e){
			this.initdata(e.detailData);
		},
		//监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				
			}
		},
		methods: {
			guanzhu() {
				this.item.isguanzhu = true;
				uni.showToast({
					title: '关注成功',
				})
			},
			//顶踩
			caozuo(type) {
				// infonum: {
				// 	index: 0, //0还没操作 1顶 2踩
				// 	dingnum: 11, //点赞笑脸
				// 	cainum: 11, //苦练踩
				// }
				switch (type) {
					case "ding":
						if (this.item.infonum.index == 1) {
							return;
						}
						this.item.infonum.dingnum++;
						if (this.item.infonum.index == 2) {
							this.item.infonum.cainum--;
						}
						this.item.infonum.index = 1;
						break;
					case "cai":
						if (this.item.infonum.index == 2) {
							return;
						}
						this.item.infonum.cainum++;
						if (this.item.infonum.index == 1) {
							this.item.infonum.dingnum--;
						}
						this.item.infonum.index = 2;
						break;
				}
			},
			//初始化数据
			initdata(obj){
				//修改窗口标题
				uni.setNavigationBarTitle({title:obj.title});
			},
			//进入详情页
			opendetail(){
				uni.navigateTo({
					url: '../../pages/detail/detail?detailData='+JSON.stringify(this.item),
				});
			}

		}
	}
</script>

<style scoped>
	.index-list {
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}

	.index-list1>view:first-child {
		color: #999999;
	}

	.index-list1>view:last-child {
		background: #EEEEEE;
		border-radius: 5upx;
		padding: 0 10upx;
	}

	.index-list1>view:first-child image {
		width: 90upx;
		height: 90upx !important;
		border-radius: 100%;
		margin-right: 10upx;
	}

	.index-list2 {
		padding: 15upx;
		font-size: 32upx;
	}

	.index-list3 {
		padding-top: 15upx;
		position: relative;
	}

	.index-list3>image {
		width: 100%;
		border-radius: 20upx;
	}

	.index-list4 view {
		color: #999999;
	}

	.index-list4 {
		padding: 15upx 0;
	}

	.index-list4>view>view>view,
	.index-list4>view>view:first-child {
		margin-right: 10upx;
	}

	.index-list-play {
		position: absolute;
		color: #FFFFFF;
		font-size: 140upx;
	}

	.index-list-playinfo {
		position: absolute;
		background: rgba(51, 51, 51, 0.72);
		color: #FFFFFF;
		bottom: 8upx;
		right: 8upx;
		border-radius: 40upx;
		font-size: 22upx;
		padding: 0 12upx;
	}

	.index-list4 .active,
	index-list4,
	.active>view {
		color: #C5F61C;
	}
</style>
