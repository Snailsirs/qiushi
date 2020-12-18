<template>
	<!-- 分享组件 -->
	<view class="animated fadeIn faster" v-if="show">
		<view class="more-share-model" @tap="togle"></view>
		<view class="more-share">
			<view class="more-share-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="more-share-body">
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc more-share-wx"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-xihuan u-f-ajc more-share-pyq"></view>
					<view>朋友圈</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-xinlangweibo u-f-ajc more-share-wb"></view>
					<view>新浪微博</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc more-share-qq"></view>
					<view>QQ好友</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc more-share-qq"></view>
					<view>其它</view>
				</view>
			</scroll-view>
			<view class="more-share-bottom u-f-ajc" hover-class="more-share-hover" @tap="togle">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: Boolean
		},
		methods: {
			togle() {
				this.$emit('togle')
			}
		}
	}
</script>

<style scoped>
	/* 分享 */
	.more-share-model {
		background: rgb(51 51 51 / 49%);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
	}

	.more-share {
		z-index: 110;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
	}

	.more-share-title,
	.more-share-bottom {
		font-size: 32upx;
		padding: 25upx;
	}

	.more-share-body {
		display: flex !important;
		white-space: nowrap;
		width: 100%;
		height: 200upx;
		border-bottom: 1upx solid #EEEEEE;
		line-height: 200upx !important;
	}

	.more-share-item {
		width: 25%;
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.more-share-item>view:first-child {
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		font-size: 55upx;
		color: #FFFFFF;
	}

	.more-share-item>view:last-child {
		color: #7A7A7A;
	}

	.more-share-hover {
		background: #EEEEEE;
	}

	.more-share-wx {
		background: #2AD19B;
	}

	.more-share-pyq {
		background: #514D4C;
	}

	.more-share-wb {
		background: #EE5E5E;
	}

	.more-share-qq {
		background: #4A73BA;
	}
</style>
