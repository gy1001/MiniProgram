<template>
	<view class="mine-container">
		<template v-if="loginStatus">
			<!-- 登录 -->
			<view class="user-info u-flex u-acenter">
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
			<view class="u-flex u-acenter u-jcenter">账号密码登录 <view class="icon iconfont icon-jinru"></view></view>
		</template>
		<!-- 数据 -->
		<view class="user-data-box u-flex u-acenter">
			<view class="user-data-item">
				<view class="item-number">0</view>
				<view class="item-text">糗事</view>
			</view>
			<view class="user-data-item">
				<view class="item-number">0</view>
				<view class="item-text">动态</view>
			</view>
			<view class="user-data-item">
				<view class="item-number">0</view>
				<view class="item-text">评论</view>
			</view>
			<view class="user-data-item">
				<view class="item-number">0</view>
				<view class="item-text">收藏</view>
			</view>
		</view>
		<!-- 广告位 -->
		<image class="home-adver" src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		<!-- 功能列表 -->
		<view class="seting-list">
			<view class="u-flex u-jbetween u-acenter seting-item" hover-class="list-item-hover">
				<view class="u-flex u-acenter">
					<view class="icon iconfont icon-liulan"></view>
					浏览历史
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
			<view class="u-flex u-jbetween u-acenter seting-item" hover-class="list-item-hover">
				<view class="u-flex u-acenter">
					<view class="icon iconfont icon-huiyuanvip"></view>
					糗百认证
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
			<view class="u-flex u-jbetween u-acenter seting-item" hover-class="list-item-hover">
				<view class="u-flex u-acenter">
					<view class="icon iconfont icon-yiwen"></view>
					审核糗百
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				loginStatus: false
			};
		},
		onNavigationBarButtonTap(event) {
			if(Number(event.index) === 0){
				console.log("点击了右上角")
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
	.user-data-box{
		padding 20upx
		box-sizing border-box
		.user-data-item{
			text-align center
			width 25%
			.item-text{
				color #989898
			}
			.item-number{
				color #333333
				font-size 30upx
			}
		}
	}
	.home-adver{
		width 100%
		border-radius 20upx
	}
	.seting-list{
		.list-item-hover{
			background-color #EEEEEE
		}
		.seting-item{
			border-bottom solid 1upx #CCCCCC
			padding 20upx 0
			.icon{
				color #BBBBBB
				&.icon-liulan{
					color lightblue
					padding-right 10upx
				}
				&.icon-huiyuanvip{
					color #FFB400
					padding-right 10upx
				}
				&.icon-yiwen{
					color lightblue
					padding-right 10upx
				}
			}
		}
	}
}
</style>
