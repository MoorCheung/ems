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
				<el-col :span="12"> <el-input style='width:45%;' v-model='cause' placeholder='请输入维修原因'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='cost' placeholder='请输入费用'></el-input> </el-col>
			</el-row>
			<el-row>
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker
					value-format="yyyy-MM-dd"
					  v-model="repairdate"
					  type="date"
					  placeholder="选择日期">
					</el-date-picker>
				</div>
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
				repairid:'',
				cost:'',
				cause:'',
				repairdate:'',
				options1:[],
				devid:''
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/update"
				// 传递给后端的数据
				var ray = {repairid:this.repairid,cost:this.cost,cause:this.cause,repairdate:this.repairdate,devid:this.devid};
				var data =ray;
				console.log(ray);
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/RepairList'});
				})	
			},
			cancel(){
				this.$router.push({
					path:'/RepairList'
				})
			}
		},
		mounted:function(){
			var repairid = this.$route.params.row;
			
			// 后端网址
			var url = this.baseUrl+"/produceRepair/load" //
			// 传递给后端的数据
			var data = {repairid:repairid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var ray = res.data
				//回显
				this.repairid=ray.repairid;
				this.cost=ray.cost;
				this.cause=ray.cause;
				this.repairdate=ray.repairdate;
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
