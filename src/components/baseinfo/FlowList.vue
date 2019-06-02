<!-- html部分 -->
<template>
	<div id="">
		<h1>流程信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='流程名称' v-model='search_cname'></el-input>
			<!-- <el-input style='width: 180px;' placeholder='行业' v-model='search_industry'></el-input> -->
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>

		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="flowid" label="ID" width="180">
				</el-table-column>
				<el-table-column fixed prop="flowname" label="流程名称" width="180">
				</el-table-column>
				<el-table-column fixed prop="dljname" label="斗轮机" width="180">
				</el-table-column>
				<el-table-column fixed prop="zcjname" label="装船机" width="180">
				</el-table-column>
				<el-table-column fixed prop="pdjname" label="皮带机" width="180">
				</el-table-column>
				<el-table-column fixed prop="compname" label="所属企业" width="180">
				</el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.flowid)">删除</el-button>   
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
				var url = this.baseUrl+"/baseFlow/search"   //调用后端查询方法
				// 传递给后端的数据
				var data = {flowname:this.search_cname};
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
					path: '/FlowAdd'
				});
			},
			update(row){
					this.$router.push({name:'FlowEdit',params:{row:row.flowid}});  //传递row参数给后方修改页面，方便后方页面接收数据并进行回显
			},
			del(flowid){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/delete"   // 调用后端查询方法
				// 传递给后端的数据
				var data = {flowid:flowid};
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
			var url = this.baseUrl + "/baseFlow/list"
			this.$axios.post(url, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				this.list = res.data;
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
