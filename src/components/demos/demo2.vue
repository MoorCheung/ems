<!-- html部分 -->
<template>
	<div id="app">
		<h1>{{msg}}</h1>
		<el-input v-model="msg" style='width: 120px;'></el-input>
		<el-button @click='fn' type='primary'>打印</el-button>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				msg:'hellow'
			};
		},
		methods:{
			fn:function(){
				console.log(this.msg)
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
