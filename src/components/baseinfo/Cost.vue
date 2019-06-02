<!-- html部分 -->
<template>
	<div id="">
		<h1>成本核算信息</h1>
		<div style="text-align: left;">
			<!-- <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker> -->
			<div class="block">
				<span class="demonstration">选择年份</span>
				<el-date-picker v-model="value" type="year" value-format='yyyy' placeholder="选择年份"></el-date-picker>
				<el-button @click='search'>查询</el-button>
			</div>
		</div>

		<div style='margin-top: 20px;'>
			<el-table border style="width: 540px" :data="chartData">
				<el-table-column fixed prop="devname" label="设备名称" width="135">
				</el-table-column>
				<el-table-column fixed prop="amount" label="作业量" width="135">
				</el-table-column>
				<el-table-column fixed prop="consume" label="能耗(折标煤)" width="135">
				</el-table-column>
				<el-table-column fixed prop="cost" label="维修成本" width="135">
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
				value:'2018',
				chartData:[],
			};
		},
		methods: {
			search(){
				// 后端网址
				var url = this.baseUrl + "/devInfo/cost"
				// 传递给后端的数据
				var ray = {year:this.value};
				var data = ray;
				this.$axios.post(url,this.$qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res => {
					this.chartData = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
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
	.el-table{
		margin-left: 300px;
	}
</style>
