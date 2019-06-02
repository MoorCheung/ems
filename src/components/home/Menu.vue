<!-- html部分 -->
<template>
	<div id="app">
		
		<el-menu>
			<span v-for="obj in arr">
				<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
				<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
						<span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu> 
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/CompList'},
						 {text:'人员信息',index:'1022',url:'/UserList'},
						 {text:'设备类别',index:'1023',url:'/DevtypeList'},
						 {text:'设备信息',index:'1024',url:'/DeviceList'},
						 {text:'流程信息',index:'1025',url:'/FlowList'}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'/ReportList'},
					 	 {text:'中控',index:'1032',url:'/Control'},
					 	 {text:'作业信息',index:'1033',url:'/JobList'},
					 	 {text:'故障信息',index:'1034',url:'/FaultList'},
					 	 {text:'维修记录',index:'1035',url:'/RepairList'},
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'能耗信息',index:'1041',url:'/ConsumeList'},
					 	 {text:'折标煤系数',index:'1042',url:'/StandradcoalList'},
					 ]},
					 {text:'大作业信息',index:'105',children:[
					 	 {text:'作业量信息',index:'1051'},
					 	 {text:'作业时间信息',index:'1052'},
					 	 {text:'故障信息',index:'1053'}
					 ]},
					 {text:'能源监控',index:'106',children:[
					 	 {text:'正常值范围',index:'1061'},
					 	 {text:'实时监控',index:'1062'},
					 	 {text:'异常处理',index:'1063'}
					 ]},
					 {text:'设备维修成本',index:'107',children:[
					 	 {text:'维修登记',index:'1071'}
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'港口能耗对比',index:'1081',url:'/Consume'},
					 	 {text:'作业量统计',index:'1082',url:'/task'},
					 	 {text:'设备运行信息',index:'1083',url:'/Function'},
					 	 {text:'成本核算信息',index:'1084',url:'/Cost'},
					 ]},
					 {text:'模型建立与展示',index:'109',children:[
					 	 {text:'企业用能模型',index:'1091',url:'/energyConsume'},
					 	 {text:'企业产销模型',index:'1092',url:'/EnergyModel'},
					 ]},
					 {text:'能源产销模型',index:'1010',children:[
					 	 {text:'产销模型设置',index:'10101'},
					 	 {text:'产销模型展示',index:'10102'}
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				this.$router.push({path:obj.url});
				//添加tag标签
				var ray = {name:obj.text,type:'warning',url:obj.url};
				//
				this.$store.commit('addtags',ray);
			}
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-menu{
		background-color: #F4F4F4;
	}
</style>
