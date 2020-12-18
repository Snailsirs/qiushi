<template>
	<!-- 设置页 -->
	<view class="body">
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item" :index="index"></home-list-item>
		</block>
		<button type="primary" class="user-set-btn">退出登录</button>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue'

	export default {
		components: {
			homeListItem
		},
		data() {
			return {
				list: [{
						icon: "",
						name: "账号安全",
						clicktype: "navigateTo",
						url: '../../pages/user-set-repassword/user-set-repassword'
					},
					{
						icon: "",
						name: "绑定邮箱",
						clicktype: "navigateTo",
						url: '../../pages/user-set-email/user-set-email'
					},
					{
						icon: "",
						name: "资料编辑",
						clicktype: "navigateTo",
						url: '../../pages/user-set-userinfo/user-set-userinfo'
					},
					{
						icon: "",
						name: "小纸条",
						clicktype: "switchTab",
						url: ""
					},
					{
						icon: "",
						name: "清除缓存",
						clicktype: "",
						url: ""
					},
					{
						icon: "",
						name: "意见反馈",
						clicktype: "navigateTo",
						url: '../../pages/user-set-help/user-set-help'
					},
					{
						icon: "",
						name: "关于我们",
						clicktype: "",
						url: ""
					}
				],

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import "../../common/form.css";

	.body {
		padding: 0 20upx;
	}

	.home-list-item {
		border-top: 0 !important;
	}
</style>
