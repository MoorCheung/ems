<!-- html部分 -->
<template>
	<div id="app">
		<el-input  v-model="username" placeholder='请输入用户名' style='width: 120px;'></el-input>
		<el-input  v-model="password" placeholder='请输入密码' style='width: 120px;'></el-input>
		<el-button @click='login'>登陆</el-button>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				username:'',
				password:''
			};
		},
		methods:{
			login:function () {
				if(this.username=='admin'&&this.password=='123'){
					this.$message('登陆成功');		//消息提示  this.$message();
				}else{
					this.$message('登陆失败');		
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
