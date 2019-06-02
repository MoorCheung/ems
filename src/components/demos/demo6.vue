<!-- html部分 -->
<template>
	<div id="app">
		<el-progress :percentage="num"></el-progress>
		<el-progress :percentage="num" color="#8e71c7"></el-progress>
		<el-progress :percentage="100" status="success"></el-progress>
		<el-progress :percentage="50" status="exception"></el-progress>
		
		
		<el-progress :text-inside="true" :stroke-width="18" :percentage="num"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="num" color="rgba(142, 113, 199, 0.7)"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
		<el-progress type="circle" :percentage="num"></el-progress>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				num:5,
				timer:'',
			};
		},
		methods:{
			fn:function(){
				if(this.num==100){
					clearInterval(this.timer)   //clearInterval  停止定时器
				}else{
					this.num+=5;
				}
			}
		},
		mounted:function(){
				this.timer=setInterval(this.fn,1000)
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
