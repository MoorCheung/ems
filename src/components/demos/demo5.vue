<!-- html部分 -->
<template>
	<div id="app">
		<el-tree :data="arr"></el-tree>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[
					{label:"NO NAME",children:[{label:"逆回十六夜"},{label:"久远飞鸟"},{label:"春日部耀"}]},
					{label:"一级2",children:[{label:"二级2"},{label:"二级2-2"},{label:"二级2-2-2"}]},
					{label:"一级3",children:[{label:"二级3"},{label:"二级2-3"},{label:"二级2-3-3"}]}
				],
			};
		},
		methods:{
	
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
