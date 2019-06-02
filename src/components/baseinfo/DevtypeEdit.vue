<!-- html部分 -->
<template>
	<div style="text-align: center;">
			<h1>修改设备类别信息</h1>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='typename' placeholder='请输入设备类别名称'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="24"> <el-button @click='save'>确定</el-button> <el-button @click='cancel'>返回</el-button> </el-col>
			</el-row>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				typename:'',
				// contacts:'',
				// comptel:'',
				// industry:'',
				// address:'',
				typeid:''
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/update"
				// 传递给后端的数据
				var ray = {typeid:this.typeid,typename:this.typename};
				var data =ray;
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/DevtypeList'});
				})
			},
			cancel(){
				this.$router.push({path:'/DevtypeList'});
			}
		},mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.typename = row.typename;
			this.typeid = row.typeid;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
