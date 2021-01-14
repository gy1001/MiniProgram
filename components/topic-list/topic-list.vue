<template>
	<view class="top-lastest-list u-flex u-acenter animated fadeInLeft">
		<image class="top-lastest-img" :src="topicItem.titlePic" mode="widthFix" lazy-load></image>
		<view class="top-lastest-right">
			<view class="lastest-right-title">#{{topicItem.title}}</view>
			<view class="lastest-right-desc">{{topicItem.desc}}</view>
			<view class="lastest-right-bottom">动态 {{topicItem.totalNum}} 今日{{topicItem.todayNum}}</view>
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
			topicItem: {
				default: {},
				type: Object
			}
		}
	}
</script>

<style lang="stylus" scoped>
.top-lastest-list{
	padding 10upx 0
	border-bottom solid 1upx #EEEEEE
	.top-lastest-img{
		width 200upx
		height 200upx
		border-radius 10upx
		margin-right 20upx
	}
	.top-lastest-right{
		color #A4A4A4
		.lastest-right-title{
			font-size 32upx
			color #333333
		}
		.lastest-right-desc{
			
		}
		.lastest-right-bottom{
			
		}
	}
}
</style>
