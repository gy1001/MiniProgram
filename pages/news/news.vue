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
		<block v-for="(item, itemIndex) in contentList" :key="itemIndex">
			<news-list :itemInfo="item"></news-list>
		</block>
	</view>
</template>

<script>
	import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import NewsList from '../../components/news-list/news-list.vue'
	export default {
		components: {
			'uni-nav-bar': UniNavBar,
			'news-list': NewsList
		},
		data() {
			return {
				currentTab: "1",
				tabList: [
					{ name: '关注', id: '1' },
					{ name: '话题', id: '2' },
				],
				contentList: [
					{
						userpic: require('../../static/demo/userpic/12.jpg'),
						username: '昵称',
						gender: 1, // 0男1女
						age: 25,
						isGuanzhu: false,
						title: '我是标题',
						titlePic: require("../../static/demo/datapic/13.jpg"),
						type: 'video',// video img share
						videoInfo: {
							playNum: '20w',
							duration: '02:00'
						},
						address: '深圳龙岗',
						shareNum: 20,
						commentNum: 20,
						praiseNum: 20
					},
					{
						userpic: require('../../static/demo/userpic/12.jpg'),
						username: '昵称',
						gender: 0, // 0男1女
						age: 25,
						isGuanzhu: false,
						title: '我是标题',
						type: 'img',// video img share
						titlePic: require("../../static/demo/datapic/13.jpg"),
						address: '深圳龙岗',
						shareNum: 20,
						commentNum: 20,
						praiseNum: 20
					},
					{
						userpic: require('../../static/demo/userpic/12.jpg'),
						username: '昵称',
						gender: 0, // 0男1女
						age: 25,
						isGuanzhu: false,
						title: '分享标题',
						shareContent: '分享内容',
						type: 'share',// video img share
						titlePic: require("../../static/demo/datapic/13.jpg"),
						address: '深圳龙岗',
						shareNum: 20,
						commentNum: 20,
						praiseNum: 20
					},
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
</style>
