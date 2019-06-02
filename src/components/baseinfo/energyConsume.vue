<!-- html部分 -->
<template>
	<div id="app">
		<h1>企业用能模型展示</h1>
		<div class="block">
			<span class="demonstration">选择年份</span>
			<el-date-picker v-model="value" type="year" value-format='yyyy' placeholder="选择年份"></el-date-picker>
			<el-button @click='search()'>查询</el-button>
		</div>
		<h1>流程能耗对比图-折标煤</h1>
		<ve-scatter :data="chartData"></ve-scatter>
		
		
		<h1>设备类别能耗对比图-折标煤</h1>
		<ve-histogram :data="chartData1"></ve-histogram>
		
		
		<h1>设备能耗对比图-折标煤</h1>
		<ve-histogram :data="chartData2"></ve-histogram>
		
		
		<h1>设备单位作业耗电量对比图</h1>
		<ve-histogram :data="chartData3"></ve-histogram>
		
		
		<h1>设备单位作业量耗水量对比图</h1>
		<ve-histogram :data="chartData4"></ve-histogram>
		
		
		<h1>设备单位作业量耗油量对比图</h1>
		<ve-histogram :data="chartData5"></ve-histogram>
		</router-view>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				chartData:{},
				chartData1:{},
				chartData2:{},
				chartData3:{},
				chartData4:{},
				chartData5:{},
				value:'2018'
			};
		},
		methods:{
			search(){
			// 后端网址
			var url = this.baseUrl + "/energyConsume/flowConsume"
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
			var url = this.baseUrl + "/energyConsume/devTypeConsume"
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
			var url = this.baseUrl + "/energyConsume/devConsume"
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
			
			
			
			
			// 后端网址
			var url = this.baseUrl + "/energyConsume/electricConsume"
			// 传递给后端的数据
			var ray = {year:this.value};
			var data = ray;
			this.$axios.post(url,this.$qs.stringify(data), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				this.chartData3 = res.data;
			})
			
			
			
			
			// 后端网址
			var url = this.baseUrl + "/energyConsume/waterConsume"
			// 传递给后端的数据
			var ray = {year:this.value};
			var data = ray;
			this.$axios.post(url,this.$qs.stringify(data), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				this.chartData4 = res.data;
			})
			
			
			
			
			
			// 后端网址
			var url = this.baseUrl + "/energyConsume/oilConsume"
			// 传递给后端的数据
			var ray = {year:this.value};
			var data = ray;
			this.$axios.post(url,this.$qs.stringify(data), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res => {
				this.chartData5 = res.data;
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
