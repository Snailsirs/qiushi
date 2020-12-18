<template>
	<view>
		<!-- 动态导航标题组件 -->
		<uni-nav-bar :fixed="true" :statusBar="true" @clickRight="openAdd" :border="false">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="u-f-ajc" 
					:class="{'active':tabIndex==index}" 
					@tap="changeTab(index)">
						{{tab.name}}
						<view v-if="(tabIndex==index)" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
		
			<block slot="right">
				<view class="nav-right u-f-ajc">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods:{
			changeTab(index){
				this.$emit('change-tab',index)
			},
			openAdd() {
				// 打开发布页
				uni.navigateTo({
					url: '../add-input/add-input',
				});
			}
		}
	}
</script>

<style scoped>
	.nav-right,
	.nav-left {
		width: 100%;
	}
	
	.nav-right>view,
	.nav-left>view {
		font-size: 40upx;
	}
	
	.nav-left>view {
		color: #FF9619;
	}
	
	.nav-left {
		margin-left: 10upx;
	}
	
	.nav-right {
		width: 100%;
		margin-right: -70upx;
	}
	
	.nav-tab-bar {
		width: 100%;
		position: relative;
	}
	
	.active {
		color: #333333 !important;
	}
	
	.nav-tab-bar>view {
		font-size: 35upx;
		padding: 0 15upx;
		font-weight: bold;
		color: #969696;
	
	}
	
	.nav-tab-bar-line {
		border-bottom: 5upx solid yellow;
		border-top: 5upx solid yellow;
		border-radius: 20upx;
		width: 75upx;
		position: absolute;
		bottom: -5upx;
	}
</style>
