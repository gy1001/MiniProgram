<template>
	<view class="topic-detail-container">
		<topic-detail-head :topicInfo="topicInfo"></topic-detail-head>
		<!-- tab切换 -->
		<swiper-tab-head :scrollItemStyle="scrollItemStyle" :show-border="false" @tabChange="tabChange" :tabIndex="tabIndex" :tabBars="tabBars"></swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item, index) in tabList[tabIndex].list" :key="index">
				<news-list :itemInfo="item"></news-list>
			</block>
			<!-- 上拉加载 -->
			<load-more :loadText="tabList[tabIndex].loadText"></load-more>
		</view>
	</view>
</template>

<script>
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import TopicDetailHead from '../../components/topic-detail-head/topic-detail-head.vue'
	import NewsList from '../../components/news-list/news-list.vue'
	import LoadMore from '../../components/load-more.vue'
	export default {
		components: {
			'topic-detail-head': TopicDetailHead,
			'swiper-tab-head': SwiperTabHead,
			'news-list': NewsList,
			"load-more": LoadMore
		},
		data() {
			return {
				topicInfo: {
					titlePic: require("../../static/demo/topicpic/13.jpeg"),
					title: '忆往事，敬余生',
					desc: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
					todayNum: 300,
					totalNum: 100
				},
				tabBars: [
					{ name: '默认',id: '1' },
					{ name: '最新',id: '2' }
				],
				tabIndex: 0,
				scrollItemStyle: {
					width: '50%'
				},
				tabList: [
					{
						loadText: '上拉加载更多',
						list:[
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
								title: '分享标题',
								shareContent: '分享内容',
								type: 'share',// video img share
								titlePic: require("../../static/demo/datapic/13.jpg"),
								address: '深圳龙岗',
								shareNum: 20,
								commentNum: 20,
								isPraise: false,
								praiseNum: 20
							}
						] 
					},
					{
						loadText: '上拉加载更多',
						list: [
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
								username: '111-昵称',
								gender: 1, // 0男1女
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
						]
					}
				],
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
				}
			};
		},
		methods: {
			tabChange(itemIndex){
				this.tabIndex = itemIndex
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		onReachBottom() {
			console.log("触底了")
			if(this.tabList[this.tabIndex].loadText !== "上拉加载更多"){
				return
			}
			this.tabList[this.tabIndex].loadText = "加载中..."
			setTimeout(() => {
				const newObj = {
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
				}
				this.tabList[this.tabIndex].list.push(newObj)
				this.tabList[this.tabIndex].loadText = "上拉加载更多"
			}, 1000)
		}
	}
</script>

<style lang="stylus" scoped>

</style>
