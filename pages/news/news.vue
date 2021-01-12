<template>
	<view>
		<uni-nav-bar :statusBar="true" @clickTitle="clickTitle" @clickLeft="back" @clickRight="release">
			<!-- 左边 -->
			<view class="nav-left" slot="left">
				<view class="icon iconfont icon-qiandao"></view>
			</view>
			<!-- 中间 -->
			<view class="nav-middle u-flex u-acenter u-jcenter">
				<block v-for="item in tabList" :key="item.id">
					<view @click="toggleTab(item)" class="nav-item" :class="{active: currentTab == item.id}">{{item.name}}</view>
				</block>
			</view>
			<!-- 右边 -->
			<view class="nav-right" slot="right">
				<view class="icon iconfont icon-bianji"></view>
			</view>
		</uni-nav-bar>
		<!-- 列表 -->
		<view class="common-list u-flex">
			<view class="common--list-left">
				<image class="common-list-avatar" src="../../static/demo/userpic/12.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="common-list-right">
				<view class="u-flex u-jbetween">
					<view class="info-box u-flex u-acenter">
						昵称<view class="gender-box icon iconfont icon-nan">25</view>
					</view>
					<view class="guanzhu-btn icon iconfont icon-zengjia">关注</view>
				</view>
				<view class="common-list-title">我是标题我是标题我是标题</view>
				<view class="video-img-box u-flex u-acenter u-jcenter">
					<image src="../../static/demo/datapic/13.jpg" mode="widthFix" lazy-load />
					<!-- 视频 -->
					<view class="list-video-play icon iconfont icon-bofang"></view>
					<view class="list-video-info">
						20w播放 02：00
					</view>
				</view>
				<view class="u-flex u-jbetween list-bottom">
					<view class="list-bottom-left">深圳龙岗</view>
					<view class="u-flex u-acenter list-bottom-right">
						<view class="icon iconfont icon-zhuanfa"></view>10
						<view class="icon iconfont icon-pinglun"></view>20
						<view class="icon iconfont icon-dianzan"></view>30
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			'uni-nav-bar': UniNavBar,
		},
		data() {
			return {
				currentTab: "1",
				tabList: [
					{ name: '关注', id: '1' },
					{ name: '话题', id: '2' },
				]
			};
		},
		methods:{
			toggleTab(item){
				this.currentTab = item.id
			},
			clickTitle(){
				
			},
			back(){
				
			},
			release(){
				uni.navigateTo({
					url: '/pages/release/release'
				})
			}
		}
	}
</script>

<style lang="stylus">
.nav-left{
	text-align center
	padding-left 30upx
	.icon-qiandao{
		font-size 50upx
		color #FF9619
	}
}
.nav-middle{
	width 100%
	text-align center
	margin-left -20upx
	.nav-item{
		font-size 33upx
		padding 0 15upx
		font-weight bold
		color #969696
		position relative
		&.active{
			color #333333
			&::after{
				content: ''
				position absolute
				width 60upx
				height 6upx
				background-color #FEDE33
				bottom 0
				left calc(50% - 30upx)
			}
		}
	}
}
.nav-right{
	text-align center
	.icon-bianji{
		font-size 50upx
	}
}
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
				line-height 22upx
			}
		}
		.guanzhu-btn{
			background-color #EEEEEE
			padding 0 10upx
			font-size 26upx
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
		.list-bottom{
			color #AAAAAA
			margin-top 10upx
			.list-bottom-left{
				
			}
			.list-bottom-right{
				view.icon{
					margin-left 15upx
					padding-right 5upx
				}
			}
		}
	}
}
</style>
