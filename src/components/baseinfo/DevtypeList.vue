<!-- html部分 -->
<template>
	<div id="">
		<h1>设备类别信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<el-input style='width: 180px;' placeholder='类别名称' v-model='search_typename'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>新增</el-button>
		</div>

		<div style='margin-top: 20px;'>
			<el-table border style="width: 100%" :data="list">
				<el-table-column fixed prop="typeid" label="ID" width="400">
				</el-table-column>
				<el-table-column fixed prop="typename" label="类别名称" width="400">
				</el-table-column>
				<el-table-column label="操作" width="500">
					<template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.typeid)">删除</el-button>   
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
				search_typename: '',
				list: []
			};
		},
		methods: {
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/search"   //调用后端查询方法
				// 传递给后端的数据
				var data = {typename:this.search_typename};
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
					path: '/DevtypeAdd'
				});
			},
			update(row){
				this.$router.push({name:'DevtypeEdit',params:{row:row}});  //传递row参数给后方修改页面，方便后方页面接收数据并进行回显
			},
			del(typeid){    //删除方法传参数为ID
				// 后端网址
				var url = this.baseUrl+"/baseDevtype/delete" //调用后端删除方法
				// 传递给后端的数据
				var data = {typeid:typeid};
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
		mounted: function() {
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
