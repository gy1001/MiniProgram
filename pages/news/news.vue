<template>
	<view>
		<news-nav-bar @clickLeft="clickLeft" @clickRight="clickRight" :tabList="tabList" :currentTab="currentTab" @toggleTab="toggleTab"></news-nav-bar>
		<!-- 列表 -->
		<swiper @change="swiperChange" :style="{height: contentHeight + 'px' }" :current="swiperIndex">
			<swiper-item>
				<scroll-view @scrolltolower="followLoadMore" class="list-scroll-view list" :scroll-y="true" :style="{height: contentHeight + 'px' }">
					<template v-if="followListObj.list.length > 0">
						<block v-for="(item, itemIndex) in followListObj.list" :key="itemIndex">
							<news-list @follow="follow(itemIndex)" @praise="praise($event, itemIndex)" :itemInfo="item"></news-list>
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="followListObj.loadText"></load-more> 
					</template>
					<no-data v-else></no-data>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list-scroll-view list" :scroll-y="true" :style="{height: contentHeight + 'px' }">
					<!-- 搜索框 -->
					<view class="search-box">
						<input class="uni-input search-input" type="text" placeholder-class="placeholder-class icon iconfont icon-sousuo" placeholder="搜索内容" />
					</view>
					<!-- 轮播图 -->
					<swiper class="topic-swiper-outer" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
						<swiper-item v-for="swiperImg in topicSwiperList" :key="swiperImg">
							<image :src="swiperImg" mode="widthFix" lazy-load></image>
						</swiper-item>
					</swiper>
					<!-- 热们分类 -->
					<view class="popular-kind-box">
						<view class="u-flex u-acenter u-jbetween">
							<view class="popular-title">热门分类</view>
							<view class="u-flex u-acenter more-text">更多<view class="icon iconfont icon-jinru"></view></view>
						</view>
						<scroll-view class="u-flex u-acenter topic-item-box" :scroll-x="true" :show-scrollbar="false">
							<view class="topic-item" v-for="item in topicListArr" :key="item">{{item}}</view>
						</scroll-view>
					</view>
					<!-- 最近更新 -->
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import NewsNavBar from "../../components/news-nav-bar/news-nav-bar.vue" 
	import NewsList from '../../components/news-list/news-list.vue'
	import LoadMore from '../../components/load-more.vue'
	import NoData from '../../components/no-data.vue'
	export default {
		components: {
			'news-nav-bar': NewsNavBar,
			'news-list': NewsList,
			'load-more': LoadMore,
			'no-data': NoData
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100) // 导航条是100upx
					this.contentHeight = height
				}
			})
		},
		data() {
			return {
				contentHeight: 500,
				currentTab: "2",
				swiperIndex: 1,
				tabList: [
					{ name: '关注', id: '1' },
					{ name: '话题', id: '2' },
				],
				loadText: '',
				followListObj: {
					list: [
						{
							userpic: require('../../static/demo/userpic/12.jpg'),
							username: '昵称',
							gender: 1, // 0男1女
							age: 25,
							isGuanzhu: true,
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
							isPraise: false,
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
							isPraise: true,
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
							isPraise: false,
							praiseNum: 20
						},
					],
					loadText: '上拉加载更多'
				},
				topicSwiperList: [
					require('../../static/demo/banner1.jpg'),
					require('../../static/demo/banner2.jpg'),
					require('../../static/demo/banner4.jpg'),
				],
				topicListObj: {
					list: [],
					loadText: '上拉加载更多'
				},
				topicListArr: ["最新","游戏","打卡","情感","故事","喜爱"]
			};
		},
		methods:{
			toggleTab(itemIndex){
				this.swiperIndex = Number(itemIndex)
				this.currentTab = this.tabList[itemIndex].id
			},
			clickLeft(){
				
			},
			clickRight(){
				uni.navigateTo({
					url: '/pages/release/release'
				})
			},
			// 关注某人
			follow(itemIndex) {
				uni.showToast({
					title: "关注成功"
				})
				this.contentList[itemIndex].isGuanzhu = true
			},
			// 点赞
			praise(typeBol, index) {
				if(typeBol){
					this.contentList[index].isPraise = false
					this.contentList[index].praiseNum--
					return
				}
				this.contentList[index].isPraise = true
				this.contentList[index].praiseNum++
			},
			swiperChange(e){
				this.swiperIndex = e.detail.current
				this.currentTab = this.tabList[this.swiperIndex].id
			},
			followLoadMore(){
				const newItemInfo = 	{
					userpic: require('../../static/demo/userpic/12.jpg'),
					username: '添加昵称',
					gender: 0, // 0男1女
					age: 25,
					isGuanzhu: false,
					title: '我是标题',
					type: 'img',// video img share
					titlePic: require("../../static/demo/datapic/13.jpg"),
					address: '深圳龙岗',
					shareNum: 20,
					commentNum: 20,
					isPraise: true,
					praiseNum: 20
				}
				if(this.followListObj.loadText !== "上拉加载更多"){
					return
				}
				this.followListObj.loadText = "加载中..."
				setTimeout(() => {
					this.followListObj.list.push(newItemInfo)
					this.followListObj.loadText = "上拉加载更多"
				}, 1000);
			}
		},
	}
</script>

<style lang="stylus" scoped>
.list-scroll-view{
	position relative
}
.search-box{
	padding 20upx
	box-sizing border-box
	.search-input{
		background-color #F4F4F4
		border-radius 30upx
	}
	.placeholder-class{
		text-align center
		font-size 28upx
		&::before{
			padding-right 5upx
		}
	}
}
.topic-swiper-outer{
	padding 20upx
	height 334upx
	overflow hidden
	image{
		border-radius 10upx
		width 100%
		height 334upx
		overflow hidden
	}
}
.popular-kind-box{
	border-bottom solid 1upx red
	border-top solid 1upx #EEEEEE
	padding 10upx 20upx 10upx 20upx
	view:first-child{
		font-size 30upx
		.more-text{
			color #9E9E9E
		}
	}
	.topic-item-box{
		overflow-x auto
		padding 10upx 0
		/deep/ .uni-scroll-view-content{
			display flex
		}
		.topic-item{
			background-color #EEEEEE
			flex-shrink: 0
			flex-basis: 15%
			white-space: nowrap 
			text-align center
			color #9E9E9E
			margin-right 20upx
			border-radius 8upx
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
