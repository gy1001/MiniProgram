<template>
	<view class="mine-container">
		<template v-if="loginStatus">
			<!-- 登录 -->
			<view class="user-info u-flex u-acenter" @click="toMySpace">
				<image src="../../static/demo/userpic/5.jpg" mode="widthFix" lazy-load></image>
				<view class="user-name-box u-flex flex-column">
					<view class="">昵称</view>
					<view class="user-active-number">
						总访客 0  今日 0
					</view>
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</template>
		<template v-else>
			<!-- 未登录 -->
			<view class="text-center">登录仿糗百，体验更多功能</view>
			<!-- 第三方登录 -->
			<view class="other-login-way u-flex u-acenter u-jbetween">
				<view class="icon iconfont icon-weixin"></view>
				<view class="icon iconfont icon-QQ"></view>
				<view class="icon iconfont icon-xinlangweibo"></view>
			</view>
			<view @click="toLogin" class="u-flex u-acenter u-jcenter">账号密码登录 <view class="icon iconfont icon-jinru"></view></view>
		</template>
		<!-- 数据 -->
		<top-bottom :list="userData"></top-bottom>
		<!-- 广告位 -->
		<image class="home-adver" src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		<!-- 功能列表 -->
		<view class="seting-list">
			<block v-for="(item, itemIndex) in list" :key="itemIndex">
				<left-right :itemInfo="item"></left-right>
			</block> 
		</view>
	</view>
</template>

<script>
	import LeftRight from '../../components/left-right/left-right.vue'
	import TopBottom from '../../components/top-bottom/top-bottom.vue'
	export default {
		components: {
			'left-right': LeftRight,
			"top-bottom": TopBottom
		},
		data() {
			return {
				list: [
					{
						text: '浏览历史',
						icon: 'liulan'
					},
					{
						text: '糗百认证',
						icon: 'huiyuanvip'
					},
					{
						text: '审核糗百',
						icon: 'yiwen'
					}
				],
				loginStatus: true,
				userData: [
					{
						number: 10,
						text: '糗事'
					},
					{
						number: 10,
						text: '动态'
					},
					{
						number: 10,
						text: '评论'
					},
					{
						number: 10,
						text: '收藏'
					}
				]
			};
		},
		onNavigationBarButtonTap(event) {
			if(Number(event.index) === 0){
				console.log("点击了右上角")
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			}
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			toMySpace(){
				uni.navigateTo({
					url: "/pages/person-space/person-space"
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.mine-container{
	padding 20upx
	.text-center{
		text-align center
	}
	.other-login-way{
		padding 20upx 150upx
		width 100%
		box-sizing border-box
		.icon{
			width 100upx
			height 100upx
			font-size 55upx
			border-radius 100%
			text-align center
			box-sizing border-box
			color #FFFFFF
			&.icon-weixin{
				background-color #2BD19B
			}
			&.icon-xinlangweibo{
				background-color #FC7729
			}
			&.icon-QQ{
				background-color #2CAEFC
			}
		}
	}
	.user-info{
		image{
			width 100upx
			height 100upx
			border-radius 100%
			margin-right 20upx
		}
		.user-name-box{
			flex 2
			.user-active-number{
				color #AAAAAA
			}
		}
	}
	.home-adver{
		width 100%
		border-radius 20upx
	}
}
</style>
