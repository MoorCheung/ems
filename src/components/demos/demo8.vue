<!-- html部分 -->
<template>
	<div id="app">
		<el-select v-model="v1" placeholder='请选择' @change='v2=""'>
			<el-option v-for='(obj,index) in arr' :label='obj.label' :value='index'></el-option>
		</el-select>
		<el-select v-model="v2" placeholder="请选择">
			<el-option v-for='(obj,index) in arr[v1].children' :label='obj.label' :value='obj.value'></el-option>
		</el-select>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				v1:0,
				v2:'',
				arr:[
					 {label:'河南',value:'p01',children:[{label:'周口',value:'c01'},{label:'信阳',value:'c02'}]},
					 {label:'河北',value:'p02',children:[{label:'淮北',value:'c03'},{label:'秦皇岛',value:'c04'}]},
					 {label:'安徽',value:'p03',children:[{label:'合肥',value:'c05'},{label:'淮北',value:'c06'}]},
				]
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
