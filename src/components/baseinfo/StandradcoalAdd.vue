<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;margin-left: 500px;' v-model='energetype' placeholder='请输入类别名称'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;margin-left: 500px;' v-model='ratio' placeholder='请输入系数'></el-input> </el-col>

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
				energetype:'',
				ratio:'',
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/energyStandradcoal/insert"
				// 传递给后端的数据
				var ray = {energetype:this.energetype,ratio:this.ratio};
				var data =ray;
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/StandradcoalList'});
				})
			},
			cancel(){
				this.$router.push({
					path:'/StandradcoalList'
				})
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
