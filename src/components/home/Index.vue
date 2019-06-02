<!-- html部分 -->
<template>
	<div id="app" style="height: 100%;">
		<el-container>
			<el-header>
				<Heard></Heard>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<Menu></Menu>
				</el-aside>
				<el-main>
					<Main></Main>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<!-- js部分-->
<script>
	import Main from'./Main'
	import Menu from'./Menu'
	import Heard from'./Heard'
	// import Test3 from'./Test3'
	export default {
		name: '',
		components:{Main,Menu,Heard},
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>
<!-- css部分 -->
<style>
	.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
	line-height: 60px;
  }.el-aside {
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
  }.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
	/* line-height: 557px; */
  }
  .el-container.is-vertical{
	  height: 100%;
  }
</style>
