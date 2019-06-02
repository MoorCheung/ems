<!-- html部分 -->
<template>
	<div id="app">
		<h1>修改人员信息</h1>
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='cname' placeholder='请输入用户姓名'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='username' placeholder='请输入用户登陆名'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='password' placeholder='请输入密码'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='telno' placeholder='请输入手机号'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='email' placeholder='请输入邮箱'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='sex' placeholder='请输入性别'></el-input> </el-col>
			</el-row>
			<el-row>
				<!-- <el-col :span="12"> <el-input style='width:45%' v-model='address' placeholder='请输入邮箱'></el-input> </el-col> -->
				<!-- <el-col :span="12"> <el-input style='width:45%' v-model='compid' placeholder='请输入所属企业'></el-input> </el-col> -->
				<el-select v-model="compid" placeholder="请选择">
					<el-option
					  v-for="item in options"
					  :label="item.compname"
					  :value="item.compid">
					</el-option>
				 </el-select>
			</el-row>
			<el-row>
				<el-col :span="24" style='margin-top: 30px;'> <el-button @click='save'>确定</el-button> <el-button @click='cancel'>返回</el-button> </el-col>
			</el-row>
		</div>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				userid:'',
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:'',
				
				compid:'',
				options:[]
			};
		},
		methods:{
			save(){
				
			},
			cancel(){
				this.$router.push({
					path:'/DeviceLitst'
				})
			}
		},
		mounted:function(){
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
