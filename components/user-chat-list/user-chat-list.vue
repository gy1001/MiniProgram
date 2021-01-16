<template>
	<view class="user-chat-item">
		<view v-if="chatItem.formatTime" class="user-chat-time u-flex u-jcenter">{{chatItem.formatTime}}</view>
		<view class="user-chat-list u-flex" :class="{'user-chat-me': chatItem.isMe}">
			<image class="user-chat-avatar" :src="chatItem.userPic" mode="widthFix" lazy-load></image>
			<view class="user-chat-body">
				<!-- 文字 -->
				<text v-if="chatItem.type==='text'">{{chatItem.content}}</text>
				<!-- 图片 -->
				<image v-if="chatItem.type === 'img'" class="user-chat-img" :src="chatItem.content" mode="widthFix" lazy-load></image>
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
			chatItem: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style lang="stylus" scoped>
.user-chat-time{
	padding 10upx 0
	color #A2A2A2
	font-size 24upx
	width 100%
}
.user-chat-list{
	padding 20upx 0
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
