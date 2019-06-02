<!-- html部分 -->
<template>
	<div>
		<h2>子组件2</h2>
		<div id="ray" :style="{background:$store.state.color}">
			
		</div>
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
			
		}
	}
</script>
<!-- css部分 -->
<style>
	#ray{
		display: inline-block;
		width: 300px;
		height: 300px;
		border: solid 1px red;
	}
</style>
