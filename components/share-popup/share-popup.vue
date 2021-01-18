<template>
	<view class="share-modal-container u-flex flex-column animated fadeIn" v-show="visible">
		<view class="share-modal-mask" @click="toggleShareVisible"></view>
		<view class="share-modal-body">
			<view class="share-modal-title">分享到</view>
			<scroll-view scroll-x="true">
				<view class="share-box-scroll u-flex u-acenter">
					<view class="share-item-box u-flex u-acenter flex-column" @click="share">
						<view class="icon iconfont icon-weixin"></view>
						<view>微信好友</view>
					</view>
					<view class="share-item-box u-flex u-acenter flex-column">
						<view class="icon iconfont icon-weixin"></view>
						<view>微信朋友圈</view>
					</view>
					<view class="share-item-box u-flex u-acenter flex-column">
						<view class="icon iconfont icon-xinlangweibo"></view>						
						<view>新浪微博</view>
					</view>
					<view class="share-item-box u-flex u-acenter flex-column">
						<view class="icon iconfont icon-QQ"></view>
						<view>QQ好友</view>
					</view>
					<view class="share-item-box u-flex u-acenter flex-column">
						<view class="icon iconfont icon-QQ"></view>
						<view>其他</view>
					</view>
					<view class="share-item-box u-flex u-acenter flex-column">
						<view class="icon iconfont icon-QQ"></view>
						<view>其他22</view>
					</view>
				</view>
			</scroll-view>
			<view class="share-modal-cancel" @click="toggleShareVisible">取消</view>
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
			visible: {
				type: Boolean,
				default: false
			}
		},
		methods:{
			toggleShareVisible(){
				this.$emit("toggleVisible")
			},
			share(){
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					title: 'share',
					href: 'https://uniapp.dcloud.io',
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png',
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		}
	}
</script>

<style lang="stylus" scoped>
.share-modal-container{
	position fixed
	width 100%
	height 100%
	top 0
	left 0
	z-index 999
	.share-modal-mask{
		flex 2
		background-color rgba(0,0,0, 0.4)
	}
	.share-modal-body{
		white-space nowrap
		background-color #FFFFFF
		padding 20upx 0
		.share-modal-title{
			padding 0 20upx 10upx 20upx
			font-size 30upx
		}
		.share-modal-cancel{
			font-size 35upx
			text-align center
			border-top solid 1upx #EEEEEE
			padding-top 10upx
		}
		.share-box-scroll{
			.share-item-box{
				width 25%
				flex-shrink 0
				color #999999
				.icon{
					font-size 55upx
					width 100upx
					height 100upx
					border-radius 100%
					display inline-block
					text-align center
					&.icon-weixin{
						background-color #2AD19B
						color #FFFFFF
					}
					&.icon-bofang{
						background-color #514D4C
						color #FFFFFF
					}
					&.icon-xinlangweibo{
						background-color #EE5E5E
						color #FFFFFF
					}
					&.icon-QQ{
						background-color #4A73BA
						color #FFFFFF
					}
				}
			}
		}
	}
}
// 这里不加deep 就会出现滚动条，为何？？？
/deep/ ::-webkit-scrollbar {
	display:none;
	width:0;
	height:0;
	color:transparent;
}
</style>
