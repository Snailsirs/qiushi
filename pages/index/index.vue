<template>
	<!-- 首页 -->
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap">
		</swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<index-list :item="item" :index="index"></index-list>
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
	import indexList from "../../components/index/index-list.vue"
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components: {
			indexList,
			swiperTabHead,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}],
				newslist: [{
						loadtext: "上拉加载更多",
						list: [{
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
						}, {
							userpic: '../../static/demo/userpic/12.jpg', //头像
							username: '昵称', //名称
							isguanzhu: true, //关注
							title: '我是标题', //标题
							type: 'video', //img图文 video视频
							titlepic: '../../static/demo/datapic/15.jpg', //封面图
							playnum: '20w',
							long: "2:47",
							infonum: {
								index: 1, //0还没操作 1顶 2踩
								dingnum: 11, //点赞笑脸
								cainum: 11, //苦练踩
							},
							commentnum: 10, //评论
							sharenum: 10 //分享
						}],
					},
					{
						loadtext: "上拉加载更多",
						list: [{
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
						}, {
							userpic: '../../static/demo/userpic/12.jpg', //头像
							username: '昵称', //名称
							isguanzhu: true, //关注
							title: '我是标题', //标题
							type: 'video', //img图文 video视频
							titlepic: '../../static/demo/datapic/15.jpg', //封面图
							playnum: '20w',
							long: "2:47",
							infonum: {
								index: 1, //0还没操作 1顶 2踩
								dingnum: 11, //点赞笑脸
								cainum: 11, //苦练踩
							},
							commentnum: 10, //评论
							sharenum: 10 //分享
						}],
					},
					{
						loadtext: "上拉加载更多",
						list: [{
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
						}, {
							userpic: '../../static/demo/userpic/12.jpg', //头像
							username: '昵称', //名称
							isguanzhu: true, //关注
							title: '我是标题', //标题
							type: 'video', //img图文 video视频
							titlepic: '../../static/demo/datapic/15.jpg', //封面图
							playnum: '20w',
							long: "2:47",
							infonum: {
								index: 1, //0还没操作 1顶 2踩
								dingnum: 11, //点赞笑脸
								cainum: 11, //苦练踩
							},
							commentnum: 10, //评论
							sharenum: 10 //分享
						}],
					},
					{
						loadtext: "上拉加载更多",
						list: [{
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
						}, {
							userpic: '../../static/demo/userpic/12.jpg', //头像
							username: '昵称', //名称
							isguanzhu: true, //关注
							title: '我是标题', //标题
							type: 'video', //img图文 video视频
							titlepic: '../../static/demo/datapic/15.jpg', //封面图
							playnum: '20w',
							long: "2:47",
							infonum: {
								index: 1, //0还没操作 1顶 2踩
								dingnum: 11, //点赞笑脸
								cainum: 11, //苦练踩
							},
							commentnum: 10, //评论
							sharenum: 10 //分享
						}],
					},
					{
						loadtext: "上拉加载更多",
						list: []
					},
					{
						loadtext: "上拉加载更多",
						list: []
					}
				],


			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
				}
			});
		},
		//监听搜索框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		//监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e));
			switch (e.index) {
				case 1:
					//打开发布页
					uni.navigateTo({
						url: '../add-input/add-input',
					});
					break;
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
		},

	}
</script>

<style scoped>

</style>
