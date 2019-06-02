<!-- html部分 -->
<template>
	<div id="app">
		<div>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%;' v-model='devname' placeholder='请输入设备名称'></el-input> </el-col>
			</el-row>
			<el-row>
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker
					value-format="yyyy-MM-dd"
					  v-model="devdate"
					  type="date"
					  placeholder="选择日期">
					</el-date-picker>
				</div>
				<el-col :span="12"> <el-input style='width:45%' v-model='devuser' placeholder='请输入责任人'></el-input> </el-col>
			</el-row>
			<el-row>
				<!-- <el-col :span="12"> <el-input style='width:45%' v-model='address' placeholder='请输入邮箱'></el-input> </el-col> -->
				<!-- <el-col :span="12"> <el-input style='width:45%' v-model='compid' placeholder='请输入所属企业'></el-input> </el-col> -->
				<el-select v-model="typeid" placeholder="请选择设备类别">
							<el-option
							  v-for="item in optiontwo"
							  :label="item.typename"
							  :value="item.typeid">
							</el-option>
				</el-select>
				<el-select v-model="compid" placeholder="请选择所属企业">
							<el-option
							  v-for="item in options"
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
				devname:'',
				devdate:'',
				devuser:'',
				
				
				compid:'',
				options:[],
				
				
				optiontwo:[],
				typeid:'',
			};
		},
		methods:{
			save(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/insert"
				// 传递给后端的数据
				var ray = {devname:this.devname,devdate:this.devdate,devuser:this.devuser,compid:this.compid,typeid:this.typeid};
				var data =ray;
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/DeviceList'});
				})
			},
			cancel(){
				this.$router.push({
					path:'/DeviceList'
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
				this.options=res.data;
			})
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
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
