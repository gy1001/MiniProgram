<template>
	<view>
		<view class="paper-right-popup-mask" v-show="visible" @click="togglePopupVisible"></view>
		<view class="paper-right-popup" v-show="visible">
			<view class="u-flex u-acenter" hover-class="popup-left-hover" v-for="(item,itemIndex) in list" :key="itemIndex" @click="item.handler">
				<view v-if="item.icon" class="icon iconfont" :class="item.icon"></view>{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			list: {
				type: Array,
				default: () => []
			},
			visible: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			togglePopupVisible(){
				this.$emit("toggle")
			}
		}
	}
</script>

<style lang="stylus" scoped>
.paper-right-popup{
	position fixed
	right 0
	top 120upx
	z-index 2000
	background #FFFFFF
	width 55%
	box-shadow 1upx 1upx 20upx 2upx #CCCCCC
	border-radius 6upx
	font-size 35upx
	&>view{
		padding 20upx
		&:first-child{
			padding-bottom 0
		}
	}
	.iconfont{
		&::before{
			font-weight bold
			margin-right 10upx
		}
	}
	.popup-left-hover{
		background-color #EEEEEE
	}
}
.paper-right-popup-mask{
	position fixed
	top 0
	left 0
	width 100%
	height 100%
	z-index 1999
}
</style>
