<template>
	<!-- 小纸条列表组件 -->
	<view class="paper-list u-f-ac animated fadeInLeft fast"
	@tap="opendetail">
		<image :src="item.userpic" mode="aspectFill" lazy-load>
		</image>
		<view>
			<view class="u-f-ac u-f-jsb">
				{{item.username}}
				<view>{{item.time}}</view>
			</view>
			<view class="u-f-ac u-f-jsb">
				{{item.data}}
				<template v-if="item.noreadnum>0">
					<uni-badge class="uni-badge-left-margin" :text="item.noreadnum" type="error" />
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	export default {
		components: {
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		},
		methods:{
			opendetail(){
				uni.navigateTo({
					url: '../../pages/user-chat/user-chat',
				});
			}
		}
		
	}
</script>

<style scoped>
	.paper-list {
		border-bottom: 1upx solid #EEEEEE;
		padding: 20upx 0;
	}
	
	.paper-list>image {
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-left: 20upx;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	
	.paper-list>view {
		flex: 1;
	}
	
	.paper-list>view>view:first-child>view {
		color: #CBCBCB;
	}
	
	.paper-list>view>view:first-child {
		font-size: 35upx;
	}
	
	.paper-list>view>view:last-child {
		color: #999999;
	}
</style>
