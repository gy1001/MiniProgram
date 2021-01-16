<template>
	<view class="common-list u-flex animated fadeInLeft">
		<view class="common--list-left">
			<image class="common-list-avatar" :src="itemInfo.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-right">
			<view class="u-flex u-jbetween">
				<view v-if="itemInfo.isGuanzhu" class="guanzhu-btn u-flex u-acenter">已关注</view>
				<view @click="follow" v-else class="guanzhu-btn u-flex u-acenter icon iconfont icon-zengjia">关注</view>
			</view>
			<view class="common--list-time">10分钟前</view>
			<view class="common-list-title">{{itemInfo.title}}</view> 
			<!-- 分享的样式 -->
			<view class="common-list-share u-flex u-acenter" v-if="itemInfo.type === 'share'">
				<image class="list-share-img" :src="itemInfo.titlePic" mode="widthFix" lazy-load></image>
				<view class="">{{itemInfo.shareContent}}</view>
			</view>
			<view class="video-img-box u-flex u-acenter u-jcenter" v-else>
				<image @click="toPreviewImg" :src="itemInfo.titlePic" mode="widthFix" lazy-load />
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
	import GenderAgeTag from '../../components/gender-age-tag/gender-age-tag.vue'
	export default {
		components: {
			'gender-age-tag': GenderAgeTag
		},
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
			},
			toPreviewImg(){
				uni.previewImage({
					urls: [this.itemInfo.titlePic],
					current: 0
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import "@/common/common-new.styl"
.common-list{
	border-bottom solid 1px #EEEEEE
	.common-list-right{
		border-bottom 0
		.common--list-time{
			padding-top 10upx
			color #CCCCCC
			font-size 25upx
		}
	}
}
</style>
