<!-- html部分 -->
<template>
	<div id="app">
		<h1>这是父组件 一只萌萌小鸡</h1>
		<h2>下面来切换两个子组件</h2>
		<el-button @click='fn1'>小鸡麦琪</el-button>
		<el-button @click='fn2'>钢盔绿头猪</el-button>
		<h1>下面是子组件</h1>
		<router-view/>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn1:function(){
				this.$router.push({path:'/chick/chick1'})
			},
			fn2:function(){
				this.$router.push({path:'/chick/chick2'})
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
