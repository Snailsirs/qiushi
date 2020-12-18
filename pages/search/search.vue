<template>
	<!-- 搜索页面 -->
	<view>
		<template v-if="list.length>0">
			<block v-for="(item,index) in list" :key="index">
				<index-list :index="index" :item="item"></index-list>
			</block>
			<!-- 上拉加载 -->
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="issearch && list.length<1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	export default {
		components: {
			indexList,
			noThing,
			loadMore
		},
		data() {
			return {
				issearch: false,
				loadtext: "上拉加载更多",
				list: [],
				searchtext:""
			}
		},
		mounted() {
			document.querySelector('.uni-page-head-hd').style.display = 'none'
		},
		//监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e));
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		//监听搜索框文本变化
		onNavigationBarSearchInputChanged(e) {
			console.log("监听搜索框文本变化" + JSON.stringify(e));
			this.searchtext = e.text;
		},
		//监听点击搜索按钮事件
		onNavigationBarSearchInputConfirmed(e) {
			console.log("监听点击搜索按钮事件" + JSON.stringify(e));
			if (e.text) {
				this.getdata(e.text);
			}
		},
		//监听页面触底事件
		onReachBottom() {
			this.loadmore();
		},
		//监听下拉刷新
		onPullDownRefresh() {
			this.getdata();
			uni.stopPullDownRefresh();
		},
		methods: {
			//搜索事件
			getdata() {
				uni.showLoading();
				//请求服务器
				setTimeout(() => {
					let arr = [
					// 	{
					// 	userpic: '../../static/demo/userpic/12.jpg', //头像
					// 	username: '昵称', //名称
					// 	isguanzhu: false, //关注
					// 	title: '我是标题', //标题
					// 	type: 'img', //img图文 video视频
					// 	titlepic: '../../static/demo/datapic/15.jpg', //封面图
					// 	infonum: {
					// 		index: 0, //0还没操作 1顶 2踩
					// 		dingnum: 11, //点赞笑脸
					// 		cainum: 11, //苦练踩
					// 	},
					// 	commentnum: 10, //评论
					// 	sharenum: 10 //分享
					// }, {
					// 	userpic: '../../static/demo/userpic/12.jpg', //头像
					// 	username: '昵称', //名称
					// 	isguanzhu: true, //关注
					// 	title: '我是标题', //标题
					// 	type: 'video', //img图文 video视频
					// 	titlepic: '../../static/demo/datapic/15.jpg', //封面图
					// 	playnum: '20w',
					// 	long: "2:47",
					// 	infonum: {
					// 		index: 1, //0还没操作 1顶 2踩
					// 		dingnum: 11, //点赞笑脸
					// 		cainum: 11, //苦练踩
					// 	},
					// 	commentnum: 10, //评论
					// 	sharenum: 10 //分享
					// },
					];
					this.list = arr;
					uni.hideLoading();
					this.issearch = true;
				}, 1000);


			},
			// 上拉加载触底事件
			loadmore() {
				if (this.loadtext != "上拉加载更多") {
					return
				};
				// 修改状态
				this.loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					// 获取完成
					let obj = {
						userpic: '../../static/demo/userpic/12.jpg', //头像
						username: '昵称', //名称
						isguanzhu: false, //关注
						title: '我是标题', //标题
						type: 'img', //img图文 video视频
						titlepic: '../../static/demo/datapic/15.jpg', //封面图
						infonum: {
							index: 0, //0还没操作 1顶 2踩
							dingnum: 11, //点赞笑脸
							cainum: 11, //苦练踩
						},
						commentnum: 10, //评论
						sharenum: 10 //分享
					};
					this.list.push(obj);
					this.loadtext = "上拉加载更多";
				}, 1000)
			},
		}
	}
</script>

<style scoped>

</style>
