<!-- html部分 -->
<template>
	<div id="app">
		<span v-for="obj in arr">{{obj}}</span>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name: '',
		data() {
			return {
				arr: [2,3,4,5,6,8,10,12,141,16],
			}; 
		},
		methods: {

		}
	}
</script>
<!-- css部分 -->
<style>

</style>
