<template>
	<view class="buddt-outer">
		<!-- tab切换 -->
		<swiper-tab-head :scrollItemStyle="scrollItemStyle" :show-border="false" @tabChange="tabChange" :tabIndex="tabIndex" :tabBars="tabBars"></swiper-tab-head>
		<!-- 好友列表 -->
		<view class="buddy-list u-flex u-acenter">
			<image src="../../static/demo/userpic/12.jpg" mode="widthFix" lazy-load></image>
			<view class="user-info-box">
				<view class="user-name">昵称</view>
				<gender-age-tag age="12" gender="1"></gender-age-tag>
			</view>
			<view class="icon iconfont icon-xuanze-yixuan right-icon"></view>
		</view>
	</view>
</template>

<script>
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import GenderAgeTag from '../../components/gender-age-tag/gender-age-tag.vue'
	export default {
		components: {
			'swiper-tab-head': SwiperTabHead,
			'gender-age-tag': GenderAgeTag
		},
		data() {
			return {
				tabBars: [
					{ name: '互关',id: '1', number: 10 },
					{ name: '关注',id: '2', number: 20 },
					{ name: '粉丝',id: '3', number: 30 },
				],
				tabIndex: 0,
				scrollItemStyle: {
					width: '33%'
				}
			};
		},
		methods: {
			tabChange(index){
				this.tabIndex = index
			}
		},
		onNavigationBarButtonTap(event) {
			if(event.index === 0){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="stylus" scoped>
.buddt-outer{
	padding 0 20upx
	.buddy-list{
		border-bottom solid 1upx #EEEEEE
		padding 20upx 0
		image{
			width 100upx
			height 100upx
			border-radius 100%
			margin-right 20upx
			flex-shrink 0
		}
		.user-info-box{
			flex 2
		}
		.right-icon{
			width 80upx
			font-size 35upx
			color #CCCCCC
			text-align right
		}
	}
}
</style>
