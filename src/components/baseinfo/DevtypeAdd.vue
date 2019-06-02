<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;margin-left: 500px;' v-model='typename' placeholder='请输入设备类别名称'></el-input> </el-col>
				<!-- <el-col :span="12"> <el-input style='width:45%' v-model='contacts' placeholder='请输入联系人'></el-input> </el-col> -->
			<!-- </el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='comptel' placeholder='请输入联系电话'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='industry' placeholder='请输入行业'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='address' placeholder='请输入地址'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='address' placeholder='请输入邮编'></el-input> </el-col> -->
			</el-row>
			<el-row>
				<el-col :span="24" style='margin-top: 30px;'> <el-button @click='save'>添加</el-button> <el-button @click='cancel'>返回</el-button> </el-col>
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
				typename:'',
				typeid:''
// 				// compid:'',
// 				compname:'',
// 				contacts:'',
// 				comptel:'',
// 				industry:'',
// 				address:''
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/insert"
				// 传递给后端的数据
				var ray = {typename:this.typename};
				var data =ray;
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/DevtypeList'});
				})
			},
			cancel(){
				this.$router.push({
					path:'/DevtypeList'
				})
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
