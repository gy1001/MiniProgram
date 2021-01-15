<template>
	<view class="topic-detail-head">
		<!-- 模糊背景 -->
		<view class="top-box">
			<image class="top-img" src="../../static/demo/topicpic/13.jpeg" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-title-box u-flex u-acenter">
				<image :src="topicInfo.titlePic" mode="widthFix" lazy-load></image>
				<view class="topic-info-title">#{{topicInfo.title}}#</view>
			</view>
			<view class="topic-info-content u-flex u-acenter">
				<view class="">动态 {{topicInfo.totalNum}}</view>
				<view class="">今日 {{topicInfo.todayNum}}</view>
			</view>
			<view class="topic-info-desc">{{topicInfo.desc}}</view>
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
			topicInfo: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style lang="stylus" scoped>
.topic-detail-head{
	.top-box{
		height 300upx
		overflow hidden
		position relative
		.top-img{
			width 100%
			position absolute
			filter blur(10px)
		}
	}
	.topic-info{
		padding 0 25upx
		position relative
		.topic-info-title-box{
			image{
				width 150upx
				height 150upx
				border-radius 20upx
				position absolute
				top -75upx
			}
			.topic-info-title{
				margin-left 170upx
				font-size 35upx
				flex 1
			}
		}
		.topic-info-content{
			padding-top 30upx
			color #CDCDCD
		}
		.topic-info-desc{
			font-size 32upx
			color #A3A3A3
			padding-bottom 10upx
		}
	}		
}
</style>
