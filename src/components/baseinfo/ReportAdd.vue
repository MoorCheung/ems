<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<el-row>
				<el-col :span="12"><el-input style='width:45%;' v-model='shipname' placeholder='请输入船队名称'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"><el-input style='width:45%;' v-model='capacity' placeholder='请输入装载量(吨)'></el-input> </el-col>
			</el-row>
			<el-row>
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker
					  v-model="planjobtime"
					  type="datetime"
					  placeholder="选择日期时间" 
					  value-format="yyyy-MM-dd-HH-mm-ss">   <!--日期格式出错-->
					</el-date-picker>
				  </div>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='reportuser' placeholder='请输入报岗人'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-select v-model="compid" placeholder="请选择所属企业">
							<el-option
							  v-for="item in optiontwo"
							  :label="item.compname"
							  :value="item.compid">
							</el-option>
				</el-select>
			</el-row>
			<el-row>
				<el-col :span="24" style='margin-top: 30px;'> <el-button @click='save'>添加</el-button> <el-button @click='cancel'>返回</el-button> </el-col>
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
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				
				optiontwo:[],
				compid:'',
			};
		},
		methods:{
			save(){
					// 后端网址
					var url = this.baseUrl+"/produceReport/insert"
					// 传递给后端的数据
					var ray = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser,compid:this.compid};
					var data =ray;
					console.log(ray);
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'/ReportList'});
					})
			},
			cancel(){
				this.$router.push({
					path:'/ReportList'
				})
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.optiontwo=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
