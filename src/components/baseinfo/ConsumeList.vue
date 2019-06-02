<!-- html部分 -->
<template>
	<div id="">
		<h1>能耗信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='请输入报岗ID' v-model='search_cname'></el-input>
			<!-- <el-input style='width: 180px;' placeholder='行业' v-model='search_industry'></el-input> -->
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>

		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="consumeid" label="ID" width="180">
				</el-table-column>
				<el-table-column fixed prop="devname" label="设备名称" width="180">
				</el-table-column>
				<el-table-column fixed prop="electric" label="电耗(kw.h)" width="180">
				</el-table-column>
				<el-table-column fixed prop="water" label="水耗(吨)" width="180">
				</el-table-column>
				<el-table-column fixed prop="oil" label="油耗(L)" width="180">
				</el-table-column>
				<el-table-column fixed prop="reportid" label="报岗ID" width="180">
				</el-table-column>
				<el-table-column label="操作" width="230">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.consumeid)">删除</el-button>   
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
				search_cname:'',
				list:[]
			};
		},
		methods: {
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/search"   //调用后端查询方法
				// 传递给后端的数据
				var data = {reportid:this.search_cname};
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
					path: '/ConsumeAdd'
				});
			},
			update(row){
				this.$router.push({name:'ConsumeEdit',params:{row:row.consumeid}});  //传递row参数给后方修改页面，方便后方页面接收数据并进行回显
			},
			del(consumeid){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/delete" //调用后端删除方法
				// 传递给后端的数据
				var data = {consumeid:consumeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();    //删除成功之后在调用查询方法实现实时刷新
				})
			}
		},
		mounted:function(){
				var url = this.baseUrl + "/energyConsume/list"
				this.$axios.post(url, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res => {
					this.list = res.data;
				})
				// this.search();   //直接调用查询方法直接实现页面数据显现
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
