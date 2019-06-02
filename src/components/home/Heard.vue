<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<span style="font-size: 20px; color: white;float: left;">能耗综合分析平台</span>
			<div style="display: inline-block;float: right;margin-right: 40px;">
				<el-dropdown :hide-on-click="false">
					<span class="el-dropdown-link">
						{{cname}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item @click.native='fn'>退出登陆</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div>
			<span style="font-size: 14px; color: white;">{{compname}}</span>
			</div>
		</div>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name: '',
		data() {
			return {
				obj:[],
				cname:'',
				compname:''
			};
		},
		methods: {
			fn(){
				this.$router.push({
					path: '/login'
				});
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
		
			this.$axios.post(url,{
				headers: {
					
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				var obj = res.data;
			})
			var obj1 = this.$route.params.obj;
			this.cname=obj1.cname
			this.compname=obj1.baseCompany.compname;
		}
	}
</script>
<!-- css部分 -->
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
