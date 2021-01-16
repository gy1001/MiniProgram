<template>
	<view>
		<!-- 聊天列表 -->
		<view class="user-chat-list u-flex user-chat-me">
			<image class="user-chat-avatar" src="../../static/demo/userpic/11.jpg" mode="widthFix" lazy-load></image>
			<view class="user-chat-body">
				<!-- 文字 -->
				<!-- <text>信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息信息</text> -->
				<!-- 图片 -->
				<image class="user-chat-img" src="../../static/demo/4.jpg" mode="widthFix" lazy-load></image>
			</view>
		</view>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submitChat"></user-chat-bottom>
	</view>
</template>

<script>
	import UserChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	export default {
		components: {
			'user-chat-bottom': UserChatBottom
		},
		data() {
			return {
			};
		},
		methods: {
			submitChat(text){
				console.log(text)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.user-chat-list{
	&.user-chat-me{
		flex-direction row-reverse
		.user-chat-body{
			margin-right 20upx
			margin-left 100upx
			&::after{
				left auto
				right -30upx
				border-color transparent transparent transparent #F4F4F4
			}
		}
	}
	.user-chat-avatar{
		width 100upx
		height 100upx
		border-radius 100%
		flex-shrink 0
	}
	.user-chat-body{
		position relative
		background-color #F4F4F4
		padding 25upx
		border-radius 20upx
		margin-left 20upx
		margin-right 100upx
		.user-chat-img{
			max-width 200upx
		}
		&::after{
			position absolute
			left -30upx
			top 40upx
			width 0
			height 0
			content ""
			border 16upx solid #F4F4F4
			border-color transparent #F4F4F4 transparent transparent
		}
	}
}
</style>
