<template>
	<view class="common-list u-flex animated fadeInLeft">
		<view class="common--list-left">
			<image class="common-list-avatar" :src="itemInfo.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-right">
			<view class="u-flex u-jbetween">
				<view class="info-box u-flex u-acenter">
					{{itemInfo.username}}
					<view 
						class="gender-box icon iconfont" 
						:class="{'icon-nan': itemInfo.gender == 0, 'icon-nv': itemInfo.gender == 1}"
					>{{itemInfo.age}}</view>
				</view>
				<view v-if="itemInfo.isGuanzhu" class="guanzhu-btn u-flex u-acenter">已关注</view>
				<view @click="follow" v-else class="guanzhu-btn u-flex u-acenter icon iconfont icon-zengjia">关注</view>
			</view>
			<view class="common-list-title">{{itemInfo.title}}</view> 
			<!-- 分享的样式 -->
			<view class="common-list-share u-flex u-acenter" v-if="itemInfo.type === 'share'">
				<image class="list-share-img" :src="itemInfo.titlePic" mode="widthFix" lazy-load></image>
				<view class="">{{itemInfo.shareContent}}</view>
			</view>
			<view class="video-img-box u-flex u-acenter u-jcenter" v-else>
				<image :src="itemInfo.titlePic" mode="widthFix" lazy-load />
				<!-- 视频 -->
				<template v-if="itemInfo.type === 'video'">
					<view class="list-video-play icon iconfont icon-bofang"></view>
					<view class="list-video-info">
						{{itemInfo.videoInfo.playNum}}播放 {{itemInfo.videoInfo.duration}}
					</view>
				</template>
			</view>
			
			<view class="u-flex u-jbetween list-bottom">
				<view class="list-bottom-left">{{itemInfo.address}}</view>
				<view class="u-flex u-acenter list-bottom-right">
					<view class="icon iconfont icon-zhuanfa">{{itemInfo.shareNum}}</view>
					<view class="icon iconfont icon-pinglun">{{itemInfo.commentNum}}</view>
						<!-- 点赞 -->
					<view @click="praise" class="icon iconfont icon-dianzan" :class="{active: itemInfo.isPraise}">{{itemInfo.praiseNum}}</view>
				</view>
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
			itemInfo: {
				type: Object,
				default: {}
			}
		},
		methods: {
			follow(){
				this.$emit("follow")
			},
			praise(){
				this.$emit("praise",this.itemInfo.isPraise)
			}
		}
	}
</script>

<style lang="stylus" scoped>

.common-list{
	padding 20upx
	box-sizing border-box
	.common--list-left{
		.common-list-avatar{
			width 90upx
			height 90upx
			border-radius 100%
		}
	}
	.common-list-right{
		flex 2
		margin-left 20upx
		border-bottom solid 1px #EEEEEE
		padding-bottom 10upx
		image{
			width 100%
			border-radius 10upx
		}
		.info-box{
			color #999999
			font-size 30upx
			.gender-box{
				background-color #007AFF
				color #FFFFFF
				font-size 23upx
				padding 5upx 10upx
				margin-left 10upx
				border-radius 20upx
				line-height 24upx
				&.icon-nv{
					background-color pink
				}
			}
		}
		.guanzhu-btn{
			background-color #EEEEEE
			padding 0 10upx
			font-size 26upx
			border-radius 10upx
			vertical-align bottom
		}
		.common-list-title{
			font-size 32upx
			padding 12upx 0
		}
		.video-img-box{
			position relative
			.list-video-play{
				position absolute
				font-size 140upx
				color #FFFFFF 
			}
			.list-video-info{
				position absolute
				background-color rgba(51,51,51,0.72)
				color #FFFFFF
				bottom 8upx
				right 8upx
				border-radius 40upx
				padding 0 20upx
				font-size 25upx
			}
		}
		.common-list-share{
			width 100%
			padding 10upx
			background-color #EEEEEE
			border-radius 10upx
			box-sizing border-box
			.list-share-img{
				width 200upx
				height 150upx
				margin-right 10upx
			}
		}
		.list-bottom{
			color #AAAAAA
			margin-top 10upx
			.list-bottom-left{
				
			}
			.list-bottom-right{
				view.icon{
					margin-left 16upx
					&::before{
						padding-right 4upx
					}
				}
				.icon-dianzan{
					&.active{
						color #4CD964
					}
				}
			}
		}
	}
}
</style>
