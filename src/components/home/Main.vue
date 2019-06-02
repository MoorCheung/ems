<!-- html部分 -->
<template>
	<div>
		<div style="text-align: left;">
			<el-tag v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" style="margin-left: 10px; "
			 @click="fn(tag,index)" @close='fn2(tag,index)'>
				{{tag.name}}</el-tag>
				<router-view />
		</div>
	</div>
</template>
<!-- js部分-->
<script>
	export default {
		name: '',
		data() {
			return {

			}
		},
		methods: {
				fn(tag,index){
					//给tag标签传一个url实现动态跳转
					this.$router.push({path:tag.url});
					//传下标,
					this.$store.commit('updatetags',index);
				},
				fn2(tag,index){
					//判断是否只有一个tag，只有一个就给个提示不能删除
					if(this.$store.state.tags.length==1){
						this.$message("最后一个标签不能进行删除")
					}else{
						//判断type状态,关闭的是否是当前的type
						var flag = this.$store.state.tags[index].type=='warning';
						//删除tag
						this.$store.commit('deltag',index);
						if(flag){
							if(index==0){  //判断是否是第一个，如果是进行更改并跳转到下一个
								this.$store.commit('updatetags',0);  //进行更改
								this.$router.push({path:this.$store.state.tags[0].url});  //进行跳转
							}else{    //不是第一个，更改完之后跳转到上一个标签
								this.$store.commit('updatetags',index-1);  //进行更改
								this.$router.push({path:this.$store.state.tags[index-1].url});  //进行跳转
							}    
						}
					}
				}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
