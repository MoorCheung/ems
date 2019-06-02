<!-- html部分 -->
<template>
	<div id="app">
		<h1>修改人员信息</h1>
		<div>
			<el-row>
				<el-select v-model="devid" placeholder="请选择设备名称">
							<el-option
							  v-for="item in options1"
							  :label="item.devname"
							  :value="item.devid">
							</el-option>
				</el-select>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='cause' placeholder='请输入故障原因'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='faultuser' placeholder='请输入报告人'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='faulttime' placeholder='请输入故障时间'></el-input> </el-col>
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
				faultId:'',
				devname:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				options1:[],
				devid:''
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var ray = {faultId:this.faultId,devname:this.devname,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime,devid:this.devid};
				var data =ray;
				console.log(ray);
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/FaultList'});
				})	
			},
			cancel(){
				this.$router.push({
					path:'/FaultList'
				})
			}
		},
		mounted:function(){
			var faultId = this.$route.params.row;
			
			// 后端网址
			var url = this.baseUrl+"/produceFault/load" //
			// 传递给后端的数据
			var data = {faultId:faultId};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var ray = res.data
				//回显
				this.faultId=ray.faultId;
				this.devname=ray.devname;
				this.cause=ray.cause;
				this.faultuser=ray.faultuser;
				this.faulttime=ray.faulttime;
				this.devid=ray.devid;
			})
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.options1=res.data;
				console.log(this.options1);
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
