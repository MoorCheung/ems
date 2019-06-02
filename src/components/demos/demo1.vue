<!-- html部分 -->
<template>
	<div id="app">
		<input type="text" v-model="msg" />
		<h1>{{msg}}</h1>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				msg:"hellow"
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
