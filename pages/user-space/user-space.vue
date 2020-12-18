<template>
	<!-- 个人空间页 -->
	<view>
		<!-- 背景图+用户头像 -->
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-data">
			<home-data :homedata="spacedata"></home-data>
		</view>
		<view class="" style="height: 20upx; background: #F4F4F4;"></view>
		<!-- tab导航 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollStyle="border-bottom:0;"
		 scrollItemStyle="width:33.33%;">
		</swiper-tab-head>
		<!-- 主页 -->
		<user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
	</view>
</template>

<script>
	import userSpaceHead from '../../components/user-space/user-space-head.vue';
	import homeData from "../../components/home/home-data.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import userSpaceUserinfo from "../../components/user-space/user-space-userinfo.vue";
	export default {
		components: {
			userSpaceHead,
			homeData,
			swiperTabHead,
			userSpaceUserinfo
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '主页',
						id: 'zhuye'
					}, {
						name: '糗事',
						id: 'qiushi'
					},
					{
						name: '动态',
						id: 'dongtai'
					}
				],
				userinfo: {
					bgimg: 1,
					userpic: "../../static/demo/userpic/11.jpg",
					username: "昵称",
					sex: 0,
					age: 20,
					isguanzhu: false,
					regtime: "2020-12-11",
					id: 1,
					birthday: "1999-12-11",
					job: "IT",
					path: "广东广州",
					qg: "未婚"
				},
				spacedata: [{
						name: "获赞",
						num: "10k"
					},
					{
						name: "关注",
						num: 11
					},
					{
						name: "粉丝",
						num: 12
					},
				],
			}
		},
		methods: {
			// tabBar点击事件
			tabtap(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style scoped>
	.user-space-margin {
		margin: 15upx 0;
	}

	.user-space-data {
		background: #FFFFFF;
		position: relative;
		z-index: 10;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		margin-top: -15upx;
	}
</style>
