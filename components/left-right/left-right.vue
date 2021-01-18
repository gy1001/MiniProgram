<template>
	<view class="u-flex u-jbetween u-acenter seting-item" hover-class="list-item-hover" @click="itemTap"> 
		<view class="u-flex u-acenter">
			<view v-if="itemInfo.icon" class="icon iconfont left-icon" :class="['icon-' + itemInfo.icon]"></view>
			{{itemInfo.text}}
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: {
			itemInfo:{
				type: Object,
				default: () => {}
			}
		},
		methods: {
			itemTap(){
				this.itemInfo.handler && this.itemInfo.handler()
			}
		}
	}
</script>

<style lang="stylus" scoped>
.seting-item{
	border-bottom solid 1upx #CCCCCC
	padding 20upx 0
	.icon{
		color #BBBBBB
		&.left-icon{
			position relative
			top -3upx
		}
		&.icon-liulan{
			color lightblue
			padding-right 10upx
		}
		&.icon-huiyuanvip{
			color #FFB400
			padding-right 10upx
		}
		&.icon-yiwen{
			color lightblue
			padding-right 10upx
		}
	}
}
.list-item-hover{
	background-color #EEEEEE
}
</style>
