<template>
	<!-- 小纸条页面 -->
	<view class="body">
		<paper-left-popup :show="show" @hide="hidepopup"
		@addfriend="addfriend"
		@clear="clear"
		></paper-left-popup>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import paperList from '../../components/paper/paper-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import paperLeftPopup from '../../components/paper/paper-left-popup.vue'
	export default {
		components: {
			paperList,
			loadMore,
			paperLeftPopup
		},
		data() {
			return {
				show: false,
				loadtext: "上拉加载更多",
				list: [{
						userpic: "../../static/demo/userpic/15.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 2
					},
					{
						userpic: "../../static/demo/userpic/16.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 60
					},
					{
						userpic: "../../static/demo/userpic/17.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 21
					},
					{
						userpic: "../../static/demo/userpic/18.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					},
					{
						userpic: "../../static/demo/userpic/15.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 2
					},
					{
						userpic: "../../static/demo/userpic/16.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 0
					},
					{
						userpic: "../../static/demo/userpic/15.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 2
					},
					{
						userpic: "../../static/demo/userpic/18.jpg",
						username: "昵称",
						time: "10:21",
						data: "我是信息",
						noreadnum: 11
					}
				]
			}
		},
		//监听下拉刷新
		onPullDownRefresh() {
			this.getdata();
		},
		onReachBottom() {
			this.loadmore();
		},
		//监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e));
			switch (e.index){
				case 0:
				uni.navigateTo({
					url: '../user-list/user-list',
				});
				this.hidepopup();
					break;
				case 1:
				this.showpopup();
					break;
			}
		},
		methods: {
			//操作菜单
			addfriend() {
				console.log("加糗友");
				this.hidepopup();
			},
			clear() {
				console.log("清除缓存");
				this.hidepopup();
			},
			hidepopup() {
				this.show = false;
			},
			showpopup() {
				this.show = true;
			},
			//上拉加载
			loadmore() {
				if (this.loadtext != "上拉加载更多") {
					// this.loadtext = "没有更多数据了";
					return
				};
				// 修改状态
				this.loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					// 获取完成
					let obj = {
						userpic: "../../static/demo/userpic/15.jpg",
						username: "昵称000",
						time: "10:21",
						data: "我是信息",
						noreadnum: 2
					};
					this.list.push(obj);
					this.loadtext = "上拉加载更多";
				}, 1000)


				// this.loadtext = "没有更多数据了";
			},
			//获取数据
			getdata() {
				setTimeout(() => {
					//服务器获取数据
					let arr = [{
							userpic: "../../static/demo/userpic/15.jpg",
							username: "昵称111",
							time: "10:21",
							data: "我是信息",
							noreadnum: 2
						},
						{
							userpic: "../../static/demo/userpic/16.jpg",
							username: "昵称222",
							time: "10:21",
							data: "我是信息",
							noreadnum: 10
						},
						{
							userpic: "../../static/demo/userpic/17.jpg",
							username: "昵称333",
							time: "10:21",
							data: "我是信息",
							noreadnum: 3
						},
						{
							userpic: "../../static/demo/userpic/18.jpg",
							username: "昵称444",
							time: "10:21",
							data: "我是信息",
							noreadnum: 11
						}
					];
					//赋值
					this.list = arr;
					//关闭下拉刷新
					uni.stopPullDownRefresh();
				}, 1000)
			}
		}
	}
</script>

<style scoped>
	.body {
		padding: 0 20upx;
	}

	
</style>
