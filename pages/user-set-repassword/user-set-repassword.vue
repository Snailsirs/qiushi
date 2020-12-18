<template>
	<!-- 修改密码页 -->
	<view class="body">
		<input type="text" v-model="oldpassword"
		class="uni-input common-input" password
		placeholder="输入旧密码"/>
		
		<input type="text" v-model="newpassword"
		class="uni-input common-input" password
		placeholder="输入新密码"/>
		
		<input type="text" v-model="renewpassword"
		class="uni-input common-input" password
		placeholder="输入确认密码"/>
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
				oldpassword:"",
				newpassword:"",
				renewpassword:"",
				disabled:true,
				loading:false
			}
		},
		watch:{
			oldpassword(val){
				this.change();
			},
			newpassword(val){
				this.change();
			},
			renewpassword(val){
				this.change();
			}
		},
		methods: {
			//监听输入框
			change(){
				if (this.oldpassword && this.newpassword && this.renewpassword) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			},
			//验证层
			check(){
				if(this.oldpassword && this.newpassword && this.renewpassword
				 && this.oldpassword != "" && this.newpassword!="" && 
				 this.renewpassword !=""){
					 if(this.newpassword!=this.renewpassword){
					 	uni.showToast({
					 		title: '确认密码和新密码不一致',
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
