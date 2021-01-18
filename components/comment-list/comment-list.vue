<template>
	<view class="uni-comment-list" :class="{'u-comment-list-child': false}">
		<view class="uni-comment-face">
			<image :src="commentInfo.titlePic" mode="widthFix"></image>
		</view>
		<view class="uni-comment-body">
			<view class="uni-comment-top"><text>{{commentInfo.username}}</text>
			</view>
			<view class="uni-comment-content">{{commentInfo.content}}</view>
			<view class="uni-comment-date">
				<view>{{commentInfo.formatTime}}</view>
				<view class="uni-comment-replay-btn">
					<template v-if="commentInfo.replyList && commentInfo.replyList.length > 0">{{commentInfo.replyList.length}}</template> 回复
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			commentInfo: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="stylus">

</style>
