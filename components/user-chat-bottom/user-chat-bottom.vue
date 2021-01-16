<template>
	<view class="user-chat-bottom u-flex u-acenter">
		<input class="user-chat-input" type="text" @confirm="submitChat" v-model="chatText" placeholder="文明发言" />
		<!-- <view class="icon iconfont icon-fabu" @click="submitChat"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatText: ''
			};
		},
		methods: {
			submitChat() {
				this.$emit("submit", this.chatText)
				this.chatText = ""
			}
		}
	}
</script>

<style lang="stylus" scoped>
.user-chat-bottom{
	position fixed
	bottom 0
	left 0
	height 110upx
	padding 0 20upx
	border-top solid 1upx #EEEEEE
	background-color #FFFFFF
	width 100%
	box-sizing border-box
	.user-chat-input{
		flex 2
		margin-right 20upx
		padding 10upx 20upx
		border-radius 10upx
		background-color #F7F7F7
	}
	.icon {
		width 60upx
		text-align center
		font-size 45upx
		color #999999
	}
}
</style>
