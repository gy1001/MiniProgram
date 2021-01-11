<template>
	<view class="content"> 
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabChange="tabTap"></swiper-tab-head>
		<view class="content-view">
			<swiper @change="swiperChange" class="swiper-outer-container" :style="{height: contentHeight + 'px' }" :current="tabIndex">
				<swiper-item class="" v-for="(swiperItem, swiperIndex) in dataList" :key="swiperIndex">
					<scroll-view :scroll-y="true" class="list" :style="{height: contentHeight + 'px' }" @scrolltolower="loadMore(swiperIndex)">
						<!-- 图文列表 -->
						<block v-for="(item, index) in swiperItem.list" :key="index">
							<home-list :item="item" :index="index"></home-list>
						</block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="swiperItem.loadText"></load-more>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import HomeList from '../../components/home-list.vue'
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import LoadMore from '../../components/load-more.vue'
	export default {
		components: {
			'home-list': HomeList,
			'swiper-tab-head': SwiperTabHead,
			'load-more': LoadMore
		},
		data() {
			return {
				contentHeight: 500,
				tabIndex: 0,
				tabBars: [
					{ name: '关注',id: 'guanzhu' },
					{ name: '推荐',id: 'tuijian' },
					{ name: '体育',id: 'tiyu' },
					{ name: '热点',id: 'redian' },
					{ name: '军事',id: 'junshi' },
					{ name: '财经',id: 'caijing' },
				],
				dataList: [
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 1,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 1,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 1,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 1,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 1,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							}
						]
					},
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: '../../static/demo/datapic/11.jpg',
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 1,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							}
						]
					}
				],
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res.windowHeight)
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
			// 上拉加载更多
			loadMore(index){
				if(this.dataList[index].loadText !== "上拉加载更多"){ return }
				// 更改状态
				this.dataList[index].loadText = "加载中..."
				// 获取接口
				setTimeout(() => {
					// 获取完成
					let obj = {
						userpic: '../../static/demo/userpic/12.jpg',
						username: '我是昵称',
						isGuanzhu: true,
						title: '我是标题测试我是标题测试我是标题测试',
						type: 'img', // img video
						titlePic: '../../static/demo/datapic/11.jpg',
						info: {
							dingNum: 10,
							caiNum: 10,
							index: 0,// 0 没有操作过 1 顶过 2 踩过
						},
						commentNum: 20, // 评论
						shareNum: 20 // 转发
					}
					this.dataList[index].list.push(obj)
					this.dataList[index].loadText = "上拉加载更多"
				}, 1000);
				// this.dataList[index].loadText = "没有更多数据了"
			}
		}
	}
</script>
  
<style lang="stylus">
</style>
