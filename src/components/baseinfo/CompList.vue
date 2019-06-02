<!-- html部分 -->
<template>
	<div id="">
		<h1>企业信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='公司名称' v-model='search_compname'></el-input>
			<el-input style='width: 180px;' placeholder='行业' v-model='search_industry'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>

		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="compid" label="ID" width="150">
				</el-table-column>
				<el-table-column fixed prop="compname" label="公司名称" width="150">
				</el-table-column>
				<el-table-column fixed prop="contacts" label="联系人" width="150">
				</el-table-column>
				<el-table-column fixed prop="comptel" label="联系电话" width="150">
				</el-table-column>
				<el-table-column fixed prop="industry" label="行业" width="150">
				</el-table-column>
				<el-table-column fixed prop="address" label="地址" width="150">
				</el-table-column>
				<el-table-column label="操作" width="230">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.compid)">删除</el-button>   
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
				search_compname: '',
				search_industry: '',
				list: []
			};
		},
		methods: {
			add() {
				this.$router.push({
					path: '/CompAdd'
				});
			},
			search(){					
					// 后端网址
					var url = this.baseUrl+"/baseCompany/search"   //调用后端查询方法
					// 传递给后端的数据
					var data = {compname:this.search_compname,industry:this.search_industry};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						this.list = res.data;
					})
			},
			del(compid) {   //删除方法传参数为ID
				// 后端网址
				var url = this.baseUrl+"/baseCompany/delete" //调用后端删除方法
				// 传递给后端的数据
				var data = {compid:compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();    //删除成功之后在调用查询方法实现实时刷新
				})
			},
			update(row){
				this.$router.push({name:'CompEdit',params:{row:row}});  //传递row参数给后方修改页面，方便后方页面接收数据并进行回显
			}
		},
		mounted: function() {
			// 接收路由中的数据
			// 			var comp = this.$route.params.comp;
			// 			this.tableData.push(comp);

			// 后端网址
			var url = this.baseUrl + "/baseCompany/list"
			// 传递给后端的数据
			// 			var data = {
			// 				compname: this.compname
			// 			};
			this.$axios.post(url, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				// res是后端的响应
				// 				this.$message("添加成功");
				// 				this.$router.push({
				// 					path: '/CompList'
				// 				});
				this.list = res.data;
			})
			this.search();   //直接调用查询方法直接实现页面数据显现
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
