<template>
	<!-- 顶部导航组件 -->
	<view class="uni-tab-bar animated fadeInLeft fast">
		<scroll-view class="uni-swiper-tab" :scroll-x="true" 
		:style="scrollStyle">
			<block class="swiper-tab-list" v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" 
				:class="{'active':tabIndex == index}" 
				@tap="tabtap(index)"
				:style="scrollItemStyle">
					{{tab.name}} {{tab.num?tab.num:''}}
					<view class="swiper-tab-line">
	
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBars:Array,
			tabIndex:Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			// tabbar点击事件
			tabtap(index) {
				this.$emit('tabtap',index)
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
	}
	
	.swiper-tab-list {
		color: #969696;
		font-weight: 600;
	}
	
	.uni-tab-bar .active {
		color: #343434;
	
	}
	
	.active .swiper-tab-line {
		border-bottom: 5upx solid #F0AD4E;
		width: 70upx;
		margin: auto;
		border-top: 5upx solid #F0AD4E;
		border-radius: 20upx;
	}
</style>
