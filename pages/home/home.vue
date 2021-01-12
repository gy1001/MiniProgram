<template>
	<view class="content"> 
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabChange="tabTap"></swiper-tab-head>
		<view class="content-view">
			<swiper @change="swiperChange" class="swiper-outer-container" :style="{height: contentHeight + 'px' }" :current="tabIndex">
				<swiper-item v-for="(swiperItem, swiperIndex) in dataList" :key="swiperIndex">
					<scroll-view class="list-scroll-view list" :scroll-y="true" :style="{height: contentHeight + 'px' }" @scrolltolower="loadMore(swiperIndex)">
						<template v-if="swiperItem.list.length === 0">
							<no-data></no-data>
						</template>
						<template v-else>
							<!-- 图文列表 -->
							<block v-for="(item, index) in swiperItem.list" :key="index">
								<home-list @toDetail="toDetail($event, swiperIndex)" @agree="agree($event, swiperIndex)" @disAgree="disAgree($event, swiperIndex)" @follow="follow(swiperIndex, $event)" :item="item" :index="index"></home-list>
							</block>
							<!-- 上拉加载更多 -->
							<load-more :loadText="swiperItem.loadText"></load-more> 
						</template>
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
	import NoData from '../../components/no-data.vue'
	export default {
		components: {
			'home-list': HomeList,
			'swiper-tab-head': SwiperTabHead,
			'load-more': LoadMore,
			'no-data': NoData
		},
		data() {
			return {
				contentHeight: 500,
				tabIndex: 0,
				tabBars: [
					{ name: '关注', id: 'guanzhu' },
					{ name: '推荐', id: 'tuijian' },
					{ name: '体育', id: 'tiyu' },
					{ name: '热点', id: 'redian' },
					{ name: '军事', id: 'junshi' },
					{ name: '财经', id: 'caijing' },
				],
				dataList: [
					{
						loadText: '上拉加载更多',
						list: [
							{
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: require('@/static/demo/datapic/11.jpg'),
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: require('@/static/demo/datapic/11.jpg'),
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
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: require('@/static/demo/datapic/11.jpg'),
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: require('@/static/demo/datapic/11.jpg'),
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
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: require('@/static/demo/datapic/11.jpg'),
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: require('@/static/demo/datapic/11.jpg'),
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
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: require('@/static/demo/datapic/11.jpg'),
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: require('@/static/demo/datapic/11.jpg'),
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
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: true,
								title: '我是标题',
								type: 'img', // img video
								titlePic: require('@/static/demo/datapic/11.jpg'),
								info: {
									dingNum: 10,
									caiNum: 10,
									index: 0,// 0 没有操作过 1 顶过 2 踩过
								},
								commentNum: 10, // 评论
								shareNum:10 // 转发
							},
							{
								userpic: require('@/static/demo/userpic/12.jpg'),
								username: '昵称',
								isGuanzhu: false,
								title: '我是标题',
								type: 'video', // img video
								playNum: '20w',// 播放次数
								long: "02:00",
								titlePic: require('@/static/demo/datapic/11.jpg'),
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
						list: []
					}
				],
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100) // 导航条是100upx
					this.contentHeight = height
				}
			})
		}, 
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: "/pages/search/search"
			})
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(event){
			if(Number(event.index) === 1){
				// 打开发布页面
				uni.navigateTo({
					url: '/pages/release/release'
				})
			}
		},
		methods: {
			tabTap(index){
				this.tabIndex = Number(index)
			},
			swiperChange(e){
				this.tabIndex = e.detail.current
			},
			follow(swiperIndex, index){
				this.dataList[swiperIndex].list[index].isGuanzhu = true
				uni.showToast({
					title: "关注成功"
				})
			},
			// 点赞
			agree(index, swiperIndex){
				this.dataList[swiperIndex].list[index].info.dingNum ++;
				if(this.dataList[swiperIndex].list[index].info.index === 2){
					this.dataList[swiperIndex].list[index].info.caiNum --;
				}
				this.dataList[swiperIndex].list[index].info.index = 1
			},
			// 踩
			disAgree(index, swiperIndex){ 
				this.dataList[swiperIndex].list[index].info.caiNum ++;
				if(this.dataList[swiperIndex].list[index].info.index === 1){
					this.dataList[swiperIndex].list[index].info.dingNum --
				}
				this.dataList[swiperIndex].list[index].info.index = 2
			},
			// 进入详情页
			toDetail(index, swiperIndex){
				console.log("进入详情页", index, swiperIndex)
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
						userpic: require('@/static/demo/userpic/12.jpg'),
						username: '我是昵称',
						isGuanzhu: true,
						title: '我是标题测试我是标题测试我是标题测试',
						type: 'img', // img video
						titlePic: require('@/static/demo/datapic/11.jpg'),
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
.list-scroll-view{
	position relative
}
</style>
