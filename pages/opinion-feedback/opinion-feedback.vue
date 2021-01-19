<template>
	<view class="opinion-container">
		<uni-collapse>
			<uni-collapse-item v-for="(item,itemIndex) in list" :key="itemIndex" :title="item.title" :showAnimation="true">
				<view class="collapse-content">{{item.content}}</view>
			</uni-collapse-item>
		</uni-collapse>
		
		<button :loading="requestLoading" class="update-psw-btn" :class="{'disabled': btnDisabled }" @click="submit" type="primary">完成</button>
	</view>
</template>

<script>
	import UniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import UniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			'uni-collapse': UniCollapse,
			"uni-collapse-item": UniCollapseItem
		},
		data() {
			return {
				list: [
					{ title:'客服什么时候上线', content: '客服什么时候上线客服什么时候上线客服什么时候上线客服什么时候上线客服什么时候上线客服什么时候上线客服什么时候上线' },
					{ title:'忘记账号/昵称/密码怎么办？', content: '333' },
					{ title:'怎么搜索/查找/关注/取关用户?', content: '4444' }
				],
				requestLoading: false,
				btnDisabled: false
			}
		},
		methods: {
			submit(){
				
			},
			change(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="stylus" scoped>	
.opinion-container{
	padding 20upx
	.collapse-content{
		padding 0 20upx
	}
	.update-psw-btn{
		width 100%
		margin 40upx 0 20upx 0
		background-color #FFE933
		color #333333
		border 0
		outline none
		&.disabled{
			background-color #EEEEEE
			color #999999
		}
	}
}
</style>
