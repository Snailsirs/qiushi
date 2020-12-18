<template>
	<!-- 上拉加载组件 -->
	<view class="load-more">
		{{loadtext}}
	</view>
</template>

<script>
	export default{
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
	.load-more {
		text-align: center;
		color: #AAAAAA;
		padding: 20upx;
	
	}
</style>
