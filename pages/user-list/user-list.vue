<template>
	<!-- 好友列表组件 -->
	<view class="body">
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollStyle="border-bottom:0;"
		 scrollItemStyle="width:33%;">
		</swiper-tab-head>
		<!-- 好友列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<user-list :item="item" :index="index1"></user-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<no-thing></no-thing>
						</template>

					</scroll-view>
				</swiper-item>
			</swiper>

		</view>

	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import userList from '../../components/user-list/user-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	export default {
		components: {
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
					name: '互关',
					id: 'huguan',
					num: 10
				}, {
					name: '关注',
					id: 'guanzhu',
					num: 20
				}, {
					name: '粉丝',
					id: 'fensi',
					num: 30
				}],
				newslist: [{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/datapic/25.jpg",
								username: "昵称",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/28.jpg",
								username: "昵称",
								age: 25,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/27.jpg",
								username: "昵称",
								age: 30,
								sex: 1,
								isguanzhu: false
							},

							{
								userpic: "../../static/demo/datapic/28.jpg",
								username: "昵称",
								age: 25,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/27.jpg",
								username: "昵称",
								age: 30,
								sex: 1,
								isguanzhu: false
							},

							{
								userpic: "../../static/demo/datapic/28.jpg",
								username: "昵称",
								age: 25,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/27.jpg",
								username: "昵称",
								age: 30,
								sex: 1,
								isguanzhu: false
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/datapic/25.jpg",
								username: "昵称",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/28.jpg",
								username: "昵称",
								age: 25,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/27.jpg",
								username: "昵称",
								age: 30,
								sex: 1,
								isguanzhu: false
							},
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/datapic/25.jpg",
								username: "昵称",
								age: 20,
								sex: 0,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/28.jpg",
								username: "昵称",
								age: 25,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: "../../static/demo/datapic/27.jpg",
								username: "昵称",
								age: 30,
								sex: 1,
								isguanzhu: false
							},
						]
					}
				],

			}
		},
		mounted() {
			document.querySelector('.uni-page-head-hd').style.display = 'none'
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100);
					this.swiperheight = height;
				}
			});
		},
		//监听导航按钮事件
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		methods: {
			// 上拉加载触底事件
			loadmore(index) {
				if (this.newslist[index].loadtext != "上拉加载更多") {
					// this.newslist[index].loadtext = "没有更多数据了";
					return
				};
				// 修改状态
				this.newslist[index].loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					// 获取完成
					let obj = {
						userpic: "../../static/demo/datapic/25.jpg",
						username: "昵称1111",
						age: 27,
						sex: 0,
						isguanzhu: true
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				}, 1000)


				// this.newslist[index].loadtext = "没有更多数据了";
			},
			// tabBar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current;
				// console.log(JSON.stringify(e.detail.current));
			}
		}
	}
</script>

<style scoped>
</style>
