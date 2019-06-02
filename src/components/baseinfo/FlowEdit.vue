<!-- html部分 -->
<template>
	<div id="app">
		<h1>修改人员信息</h1>
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='flowname' placeholder='请输入流程名称'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-select v-model="dljid" placeholder="斗轮机">
							<el-option
							  v-for="item in options1"
							  :label="item.devname"
							  :value="item.devid">
							</el-option>
				</el-select>
				<el-select v-model="zcjid" placeholder="装船机">
							<el-option
							  v-for="item in options2"
							  :label="item.devname"
							  :value="item.devid">
							</el-option>
				</el-select>
				<el-select v-model="pdjid" placeholder="皮带机">
							<el-option
							  v-for="item in options3"
							  :label="item.devname"
							  :value="item.devid">
							</el-option>
				</el-select>
			</el-row>
			<el-row>
				<el-col :span="24" style='margin-top: 30px;'> <el-button @click='save'>确定</el-button> <el-button @click='cancel'>返回</el-button> </el-col>
			</el-row>
		</div>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name:'',
		data() {
			return {
				flowid:'',
				flowname:'',
				compid:'',
				options1:[],
				dljid:'',
				
				options2:[],
				zcjid:'',
				
				options3:[],
				pdjid:'',
			};
		},
		methods:{
			save(){
			// 后端网址
			var url = this.baseUrl+"/baseFlow/update"
			// 传递给后端的数据
			var ray = {flowid:this.flowid,flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,compid:this.compid};
			var data =ray;
			console.log(ray);
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.$message("修改成功");
				this.$router.push({path:'/FlowList'});
			})
			},
			cancel(){
				this.$router.push({
					path:'/FlowList'
				})
			}
		},
		mounted:function(){
			var flowid = this.$route.params.row;
			
			// 后端网址
			var url = this.baseUrl+"/baseFlow/load" //
			// 传递给后端的数据
			var data = {flowid:flowid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var ray = res.data
				//回显
				this.flowid=ray.flowid;
				this.flowname=ray.flowname;
				this.dljid=ray.dljid;
				this.zcjid=ray.zcjid;
				this.pdjid=ray.pdjid;
				this.compid=ray.compid;
			})
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findDljByCompid"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.options1=res.data;
				console.log(this.options1);
			})
			
			
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findCzjByCompid"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.options2=res.data;
				console.log(this.options2);
			})
			
			
			
			// 后端网址
			var url = this.baseUrl+"/baseDevice/findPdjByCompid"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.options3=res.data;
			})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
