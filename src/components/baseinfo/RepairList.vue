<!-- html部分 -->
<template>
	<div id="">
		<h1>故障信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='故障原因' v-model='search_cname'></el-input>
			<!-- <el-input style='width: 180px;' placeholder='行业' v-model='search_industry'></el-input> -->
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>

		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="repairid" label="ID" width="220">
				</el-table-column>
				<el-table-column fixed prop="devname" label="设备名称" width="220">
				</el-table-column>
				<el-table-column fixed prop="cause" label="维修原因" width="220">
				</el-table-column>
				<el-table-column fixed prop="cost" label="费用" width="220">
				</el-table-column>
				<el-table-column fixed prop="repairdate" label="维修日期" width="220">
				</el-table-column>
				<el-table-column label="操作" width="220">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.repairid)">删除</el-button>   
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name: '',
		data() {
			return {
				list:[],
				search_cname:''
			};
		},
		methods: {
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/search"   //调用后端查询方法
				// 传递给后端的数据
				var data = {cause:this.search_cname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			},
			add(){
				this.$router.push({
					path: '/RepairAdd'
				});
			},
			update(row){
					this.$router.push({name:'RepairEdit',params:{row:row.repairid}});  //传递row参数给后方修改页面，方便后方页面接收数据并进行回显
			},
			del(repairid){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/delete"   // 调用后端查询方法
				// 传递给后端的数据
				var data = {repairid:repairid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.$message("删除成功");
					this.search();
				})
			}
		},
		mounted:function(){
			var url = this.baseUrl + "/produceRepair/list"
			this.$axios.post(url, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				this.list = res.data;
				console.log(this.faultid);
			})
		}
	}
</script>
<!-- css部分 -->
<style>
	#hh {
		color: #52bab5;
		margin: 10px 0;
	}

	.el-input {
		width: 200px;
	}

	.block {
		text-align: left;
	}
</style>
