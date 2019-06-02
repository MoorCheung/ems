<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<el-row>
				<el-select v-model="devid" placeholder="请选择设备名称">
							<el-option
							  v-for="item in optiontwo"
							  :label="item.devname"
							  :value="item.devid">
							</el-option>
				</el-select>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='cause' placeholder='请输入维修原因'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='cost' placeholder='请输入费用'></el-input> </el-col>
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
				cause:'',
				cost:'',
				repairdate:'',
				
				
				optiontwo:[],
				devid:'',
			};
		},
		methods:{
			save(){
					// 后端网址
					var url = this.baseUrl+"/produceRepair/insert"
					// 传递给后端的数据
					var ray = {cause:this.cause,cost:this.cost,repairdate:this.repairdate,devid:this.devid};
					var data =ray;
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
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
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.optiontwo=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
