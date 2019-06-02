<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<el-row>
				<el-row>
					<el-select v-model="devid" placeholder="请选择设备名称">
								<el-option
								  v-for="item in options"
								  :label="item.devname"
								  :value="item.devid">
								</el-option>
					</el-select>
				</el-row>
			</el-row>
			<el-row>
				 <el-col :span="6">
									  <el-date-picker  v-model="starttime" style='width:190px' type="datetime" placeholder="选择开始时间"
										value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker>
				</el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='duration' placeholder='请输入运行时长'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="6">			
									  <el-date-picker  v-model="completetime" style='width:190px' type="datetime" placeholder="选择结束时间"
										value-format='yyyy-MM-dd HH:mm:ss'> </el-date-picker>
				</el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='amount' placeholder='请输入作业量'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='reportid' placeholder='请输入报岗ID'></el-input> </el-col>
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
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:'',
				
				options:[],
				devid:''
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/insert"
				// 传递给后端的数据
				var ray = {devid:this.devid,starttime:this.starttime,completetime:this.completetime,duration:this.duration,reportid:this.reportid,amount:this.amount};
				var data =ray;
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/JobList'});
				})
			},
			cancel(){
				this.$router.push({
					path:'/JobList'
				})
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.options=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
