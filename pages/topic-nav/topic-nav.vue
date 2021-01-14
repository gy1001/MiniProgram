<template>
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabChange="tabTap"></swiper-tab-head>
		<view class="content-view">
			<swiper @change="swiperChange" :style="{height: contentHeight + 'px' }" :current="tabIndex">
				<swiper-item v-for="(swiperItem, swiperIndex) in dataList" :key="swiperIndex">
					<scroll-view class="list" :scroll-y="true" :style="{height: contentHeight + 'px' }" @scrolltolower="loadMore(swiperIndex)">
						<no-data v-if="swiperItem.list.length === 0"></no-data>
						<view v-else class="list-scroll-view">
							<!-- 话题列表 -->
							<block v-for="(item, index) in swiperItem.list" :key="index">
								<topic-list @toDetail="toDetail" :topicItem="item"></topic-list>
							</block>
							<!-- 上拉加载更多 -->
							<load-more :loadText="swiperItem.loadText"></load-more> 
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import TopicList from '../../components/topic-list/topic-list.vue'
	import LoadMore from '../../components/load-more.vue'
	import NoData from '../../components/no-data.vue'
	export default {
		components:{
			'topic-list': TopicList,
			'swiper-tab-head': SwiperTabHead,
			'load-more': LoadMore,
			'no-data': NoData
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{ name: '关注', id: 'guanzhu' },
					{ name: '推荐', id: 'tuijian' },
					{ name: '体育', id: 'tiyu' },
					{ name: '热点', id: 'redian' },
					{ name: '军事', id: 'junshi' },
					{ name: '财经', id: 'caijing' },
				],
				contentHeight: 500,
				dataList: [
					{
						loadText: '上拉加载更多',
						list: [
							{
								titlePic: require("../../static/demo/topicpic/13.jpeg"),
								title: '我是标题',
								desc: '我是描述',
								totalNum: 100,
								todayNum: 50
							},
							{
								titlePic: require("../../static/demo/topicpic/1.jpeg"),
								title: '我是标题11',
								desc: '我是描述22',
								totalNum: 100,
								todayNum: 50
							},
							{
								titlePic: require("../../static/demo/topicpic/2.jpeg"),
								title: '我是标题2',
								desc: '我是描述22',
								totalNum: 100,
								todayNum: 50
							},
							{
								titlePic: require("../../static/demo/topicpic/3.jpeg"),
								title: '我是标题33',
								desc: '我是描述22',
								totalNum: 100,
								todayNum: 50
							},
							{
								titlePic: require("../../static/demo/topicpic/4.jpeg"),
								title: '我是标题44',
								desc: '我是描述22',
								totalNum: 100,
								todayNum: 50
							},
							{
								titlePic: require("../../static/demo/topicpic/5.jpeg"),
								title: '我是标题55',
								desc: '我是描述55',
								totalNum: 100,
								todayNum: 50
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [ ]
					},
					{
						loadText: '上拉加载更多',
						list: []
					},
					{
						loadText: '上拉加载更多',
						list: []
					},
					{
						loadText: '上拉加载更多',
						list: []
					},
					{
						loadText: '上拉加载更多',
						list: []
					}
				],
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100) // 导航条是100upx
					this.contentHeight = height
				}
			})
		},
		methods: {
			tabTap(index){
				this.tabIndex = Number(index)
			},
			swiperChange(e){
				this.tabIndex = e.detail.current
			},
			// 去详情页面
			toDetail(){
				uni.navigateTo({
					url: "/pages/topic-detail/topic-detail"
				})
			},
			// 上拉加载更多
			loadMore(index){
				if(this.dataList[index].loadText !== "上拉加载更多"){ return }
				// 更改状态
				this.dataList[index].loadText = "加载中..."
				// 获取接口
				setTimeout(() => {
					// 获取完成
					let obj = {
						titlePic: require("../../static/demo/topicpic/1.jpeg"),
						title: '我是标题',
						desc: '我是描述22',
						totalNum: 100,
						todayNum: 50
					};
					this.dataList[index].list.push(obj)
					this.dataList[index].loadText = "上拉加载更多"
				}, 1000);
				// this.dataList[index].loadText = "没有更多数据了"
			}
		}
	}
</script>

<style lang="stylus" scoped>
.list-scroll-view{
	padding 20upx
	box-sizing border-box
}
</style>
