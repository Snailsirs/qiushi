<script>
	export default {
		// onLaunch: function () {
		// 	// 网路监听（用户目前断网，切换wifi）
		// 	this.lib.NetWork.On();
		// 	// 初始化用户状态
		// 	this.User.__init();
		// 	// #ifdef APP-PLUS
		// 	// 更新检测
		// 	this.lib.Update();
		// 	// #endif
		// },
		// onShow: function () {
		// 	console.log('App Show')
		// },
		// onHide: function () {
		// 	console.log('App Hide')
		// }
	}
</script>

<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "uview-ui/index.scss";
</style>

<style>
	/*每个页面公共css */
	/* 引入官方css库 */
	@import './common/uni.css';
	/* 引入自定义图标库 */
	@import './common/icon.css';
	/* 引入动画库 */
	@import './common/animate.css';
	/* 公共样式 */
	@import './common/common.css';
	
	page{ 
		background: #FFFFFF; 
	}
	::-webkit-scrollbar{
		display: none;
	}
</style>
