<template>
	<!-- 修改资料页面 -->
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>

			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ac">
					<view>{{birthday}}</view>
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</picker>

		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ac" @tap="changeOne('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changeOne('job')">
				<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>

		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			
			<view class="u-f-ac" @tap="show = true">
				
				<u-picker 
				mode="region" 
				v-model="show" 
				:area-code='["13", "1303", "130304"]'
				 @confirm="confirm"></u-picker>
				
				<view> {{citys}} </view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>

		</view>
		<button class="user-set-btn" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	let sex = ['你猜', '男', '女'];
	let qg = ['你猜', '未婚', '已婚'];
	let job = ['你猜', 'IT', '模特', '无'];
	export default {
		data() {
			return {
				show: false,
				userpic: '../../static/demo/userpic/16.jpg',
				username: "请输入",
				sex: "选择",
				qg: "选择",
				job: "选择",
				birthday: "1997-06-11",
				citys:""
			}
		},
		
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			confirm(e) {
				console.log(e.province.label);
				console.log(e.city.label);
				console.log(e.area.label);
				if(e.city.label=="市辖区"){
					this.citys =e.province.label+e.area.label;
				}else{
					this.citys =e.province.label+e.city.label+e.area.label;
				}
				
			},
			cancel(e){
				console.log(e);
			},
			columnchange(e){
				console.log(e);
			},
			//修改生日
			bindDateChange(e) {
				this.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//修改头像
			changeimg() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						// console.log(JSON.stringify(res.tempFilePaths));
						this.userpic = res.tempFilePaths[0];
					}
				});
			},
			//单列选择
			changeOne(val) {
				let arr = [];
				switch (val) {
					case 'sex':
						arr = sex;
						break;
					case 'qg':
						arr = qg;
						break;
					case 'job':
						arr = job;
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val) {
							case 'sex':
								this.sex = arr[res.tapIndex];
								break;
							case 'qg':
								this.qg = arr[res.tapIndex];
								break;
							case 'job':
								this.job = arr[res.tapIndex];
								break;
						}
					},
				});
			},
			submit() {
			},
		}
	}
</script>

<style scoped>
	@import "../../common/form.css";

	.user-set-userinfo-list {
		padding: 20upx;
		border-bottom: 1upx solid #F4F4F4;
	}

	.user-set-userinfo-list>view:first-child {
		font-size: 32upx;
		font-weight: 500;
		color: #9B9B9B;
	}

	.user-set-userinfo-list>view:last-child>image {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}

	.user-set-userinfo-list>view:last-child>input {
		text-align: right;
	}

	.user-set-userinfo-list>view:last-child>view:last-of-type {
		margin-left: 20upx;
		color: #9B9B9B;
	}
</style>
