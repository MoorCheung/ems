<!-- html部分 -->
<template>
	<div id="app">
		<h1>设备完好率</h1>
		<div class="block">
			<span class="demonstration">选择年份</span>
			<el-date-picker v-model="value" type="year" value-format='yyyy' placeholder="选择年份"></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>港口间设备完好率</h1>
		<ve-histogram :data="chartData"></ve-histogram>
		<h1>港口间设备利用率对比</h1>
		<ve-histogram :data="chartData1"></ve-histogram>
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
				value:'2018'
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl + "/devInfo/intactRatio"
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
				// 
			// 
			// 
			// 	
				var url = this.baseUrl + "/devInfo/usage"
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
