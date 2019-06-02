import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import chick from '@/components/demos/chick/chick'
import chick1 from '@/components/demos/chick/chick1'
import chick2 from '@/components/demos/chick/chick2'
import Main from '@/components/home/Main'
import Welcome from '@/components/home/Welcome'
import CompList from '@/components/baseinfo/CompList'//子组件
import CompAdd from '@/components/baseinfo/CompAdd'  //子组件
import CompEdit from '@/components/baseinfo/CompEdit'  //子组件
import DevtypeList from '@/components/baseinfo/DevtypeList'  //子组件
import DevtypeAdd from '@/components/baseinfo/DevtypeAdd'  //子组件
import DevtypeEdit from '@/components/baseinfo/DevtypeEdit'  //子组件
import UserList from '@/components/baseinfo/UserList'//子组件
import UserAdd from '@/components/baseinfo/UserAdd'  //子组件
import UserEdit from '@/components/baseinfo/UserEdit'  //子组件
import DeviceList from '@/components/baseinfo/DeviceList'  //子组件
import DeviceAdd from '@/components/baseinfo/DeviceAdd'  //子组件
import DeviceEdit from '@/components/baseinfo/DeviceEdit'  //子组件
import FlowList from '@/components/baseinfo/FlowList'  //子组件
import FlowAdd from '@/components/baseinfo/FlowAdd'  //子组件
import FlowEdit from '@/components/baseinfo/FlowEdit'  //子组件
import FaultList from '@/components/baseinfo/FaultList'  //子组件
import FaultAdd from '@/components/baseinfo/FaultAdd'  //子组件
import FaultEdit from '@/components/baseinfo/FaultEdit'  //子组件
import RepairList from '@/components/baseinfo/RepairList'  //子组件
import RepairAdd from '@/components/baseinfo/RepairAdd'  //子组件
import RepairEdit from '@/components/baseinfo/RepairEdit'  //子组件
import ReportList from '@/components/baseinfo/ReportList'  //子组件
import ReportAdd from '@/components/baseinfo/ReportAdd'  //子组件
import ReportEdit from '@/components/baseinfo/ReportEdit'  //子组件
import Control from '@/components/baseinfo/Control'  //子组件
import JobList from '@/components/baseinfo/JobList'  //子组件
import JobAdd from '@/components/baseinfo/JobAdd'  //子组件
import JobEdit from '@/components/baseinfo/JobEdit'  //子组件
import ConsumeList from '@/components/baseinfo/ConsumeList'  //子组件
import ConsumeAdd from '@/components/baseinfo/ConsumeAdd'  //子组件
import ConsumeEdit from '@/components/baseinfo/ConsumeEdit'  //子组件
import StandradcoalList from '@/components/baseinfo/StandradcoalList'  //子组件
import StandradcoalAdd from '@/components/baseinfo/StandradcoalAdd'  //子组件
import StandradcoalEdit from '@/components/baseinfo/StandradcoalEdit'  //子组件
import task from '@/components/baseinfo/task'  //子组件
import energyConsume from '@/components/baseinfo/energyConsume'  //子组件
import EnergyModel from '@/components/baseinfo/EnergyModel'  //子组件
import Consume from '@/components/baseinfo/Consume'  //子组件
import Cost from '@/components/baseinfo/Cost'  //子组件
import Function from '@/components/baseinfo/Function'  //子组件
import Test2 from '@/components/home/Test2'
import parent from '@/components/demos/Test/parent'
import ray from '@/components/demos/color/ray'
import login from '@/components/home/login'

Vue.use(Router)

export default new Router({
  routes: [
	  {path: '/login',name: 'login',component: login},
    {
      path: '/',name: 'Index', component: Index,children:[
		  {path:'/',component:Welcome},
		  {path:'CompList',component:CompList,name:'CompList'},
		  {path:'CompAdd',component:CompAdd},
		  {path:'CompEdit',component:CompEdit,name:'CompEdit'},
		  {path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
		  {path:'DevtypeAdd',component:DevtypeAdd,name:'DevtypeAdd'},
		  {path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
		  {path:'UserList',component:UserList,name:'UserList'},
		  {path:'UserAdd',component:UserAdd,name:'UserAdd'},
		  {path:'UserEdit',component:UserEdit,name:'UserEdit'},
		  {path:'DeviceList',component:DeviceList,name:'DeviceList'},
		  {path:'DeviceAdd',component:DeviceAdd,name:'DeviceAdd'},
		  {path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
		  {path:'FlowList',component:FlowList,name:'FlowList'},
		  {path:'FlowAdd',component:FlowAdd,name:'FlowAdd'},
		  {path:'FlowEdit',component:FlowEdit,name:'FlowEdit'},
		  {path:'FaultList',component:FaultList,name:'FaultList'},
		  {path:'FaultAdd',component:FaultAdd,name:'FaultAdd'},
		  {path:'FaultEdit',component:FaultEdit,name:'FaultEdit'},
		  {path:'RepairList',component:RepairList,name:'RepairList'},
		  {path:'RepairAdd',component:RepairAdd,name:'RepairAdd'},
		  {path:'RepairEdit',component:RepairEdit,name:'RepairEdit'},
		  {path:'ReportList',component:ReportList,name:'ReportList'},
		  {path:'ReportAdd',component:ReportAdd,name:'ReportAdd'},
		  {path:'ReportEdit',component:ReportEdit,name:'ReportEdit'},
		  {path:'Control',component:Control,name:'Control'},
		  {path:'JobList',component:JobList,name:'JobList'},   //点击时报错，原因：component没有改正  错误:component为中控的Control，改正：component为作业信息的job
		  {path:'JobAdd',component:JobAdd,name:'JobAdd'},  
		  {path:'JobEdit',component:JobEdit,name:'JobEdit'},  
		  {path:'ConsumeList',component:ConsumeList,name:'ConsumeList'},
		  {path:'ConsumeAdd',component:ConsumeAdd,name:'ConsumeAdd'},
		  {path:'ConsumeEdit',component:ConsumeEdit,name:'ConsumeEdit'},
		  {path:'StandradcoalList',component:StandradcoalList,name:'StandradcoalList'},
		  {path:'StandradcoalAdd',component:StandradcoalAdd,name:'StandradcoalAdd'},
		  {path:'StandradcoalEdit',component:StandradcoalEdit,name:'StandradcoalEdit'},
		  {path:'task',component:task,name:'task'},
		  {path:'energyConsume',component:energyConsume,name:'energyConsume'},
		  {path:'EnergyModel',component:EnergyModel,name:'EnergyModel'},
		  {path:'Consume',component:Consume,name:'Consume'},
		  {path:'Cost',component:Cost,name:'Cost'},
		  {path:'Function',component:Function,name:'Function'},
	  ]
    },
	 {
	  path: '/chick',name: 'chick', component: chick,children:[
		  {path:'chick1',component:chick1},
		  {path:'chick2',component:chick2},
	  ]
	},
	{
		path:'/parent',component:parent
	},
	{
		path:'/ray',component:ray
	}
  ]
})
