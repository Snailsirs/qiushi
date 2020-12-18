<template>
	<!-- 修改邮箱页面 -->
	<view class="body">
		<input type="text" v-model="email"
		class="uni-input common-input" 
		placeholder="输入需要绑定的邮箱"/>
		
		<input type="text" v-model="password"
		class="uni-input common-input" password
		placeholder="输入密码"/>
		
		<button 
		class="user-set-btn" 
		type="primary"
		:loading="loading"
		 :class="{'user-set-btn-disable':disabled}"
		 @tap="submit"
		 :disabled="disabled"
		 >完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:"",
				password:"",
				disabled:true,
				loading:false
			}
		},
		watch:{
			email(val){
				this.change();
			},
			password(val){
				this.change();
			}
		},
		methods: {
			//监听输入框
			change(){
				if (this.email && this.password) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			//验证层
			check(){
				if(this.email && this.password && this.password != "" && this.email!=""){
					//验证邮箱格式
					let ePattern = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
					if(!ePattern.test(this.email)){
						uni.showToast({
							title: '请输入正确邮箱格式',
							icon:"none"
						});
						return false;
					}
					return true;
				}else{
					uni.showToast({
						title: '请将数据填写完整',
						icon:"none"
					});
					return false;
				}
				
				
				
			},
			//提交
			submit(){
				this.loading = true;
				this.disabled = true;
				if(!this.check()){
					this.loading = false;
					this.disabled = false;
					return
				}
				uni.showToast({
					title:"提交服务器",
					mask:false,
					duration: 1500
				})
				this.loading = false;
			}
		}
	}
</script>

<style scoped>
@import "../../common/form.css";
</style>
