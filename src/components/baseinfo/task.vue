<!-- html部分 -->
<template>
	<div id="app">
		<h1>作业量统计</h1>
		<div class="block">
			<span class="demonstration">选择年份</span>
			<el-date-picker v-model="value" type="year" value-format='yyyy' placeholder="选择年份"></el-date-picker>
			<el-button @click='search()'>查询</el-button>
		</div>
		<h1>流程作业量控制</h1>
		<ve-line :data="chartData"></ve-line>
		 <ve-histogram :data="chartData"></ve-histogram>
		<h1>设备类别作业量对比</h1>
		<ve-line :data="chartData1"></ve-line>
		 <ve-histogram :data="chartData1"></ve-histogram>
		<h1>设备作业量对比</h1>
		<ve-line :data="chartData2"></ve-line>
		 <ve-histogram :data="chartData2"></ve-histogram>
		</router-view>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name: '',
		data() {
			return {
				chartData:{},
				chartData1:{},
				chartData2:{},
				value: '2018'
			};
		},
		methods: {
			search() {
				// 后端网址
				var url = this.baseUrl + "/jobAmount/flowAmount"
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
				
				// 后端网址
				var url = this.baseUrl + "/jobAmount/devTypeAmount"
				// 传递给后端的数据
				var ray = {year:this.value};
				var data = ray;
				this.$axios.post(url,this.$qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res => {
					this.chartData1 = res.data;
				})
				
				// 后端网址
				var url = this.baseUrl + "/jobAmount/devAmount"
				// 传递给后端的数据
				var ray = {year:this.value};
				var data = ray;
				this.$axios.post(url,this.$qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res => {
					this.chartData2 = res.data;
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

</style>
