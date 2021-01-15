<template>
	<view class="buddt-outer">
		<!-- tab切换 -->
		<swiper-tab-head :scrollItemStyle="scrollItemStyle" :show-border="false" @tabChange="tabChange" :tabIndex="tabIndex" :tabBars="tabBars"></swiper-tab-head>
		<view class="content-view">
			<swiper @change="swiperChange" class="swiper-outer-container" :style="{height: contentHeight + 'px' }" :current="tabIndex">
				<swiper-item v-for="(swiperItem, swiperIndex) in buddyList" :key="swiperIndex" @scrolltolower="loadMore(swiperIndex)">
					<scroll-view class="list" :scroll-y="true" :style="{height: contentHeight + 'px' }" @scrolltolower="loadMore(swiperIndex)">
						<no-data v-if="swiperItem.list.length === 0"></no-data>
						<template v-else>
							<!-- 好友列表 -->
							<block v-for="(userItem, userIndex) in swiperItem.list" :key="userIndex">
								<buddy-list :userItem="userItem"></buddy-list>
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
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import BuddyList from '../../components/buddy-list/buddy-list.vue'
	import LoadMore from '../../components/load-more.vue'
	import NoData from '../../components/no-data.vue'
	export default {
		components: {
			'swiper-tab-head': SwiperTabHead,
			'buddy-list': BuddyList,
			"load-more": LoadMore,
			"no-data": NoData
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
				tabBars: [
					{ name: '互关',id: '1', number: 10 },
					{ name: '关注',id: '2', number: 20 },
					{ name: '粉丝',id: '3', number: 30 },
				],
				tabIndex: 0,
				scrollItemStyle: {
					width: '33%'
				},
				buddyList: [
					{
						list: [
							{
								userPic: require('../../static/demo/userpic/12.jpg'),
								username:'用户名1',
								age: 20,
								gender: 0,
								isGuanzhu: false
							},
							{
								userPic: require('../../static/demo/userpic/13.jpg'),
								username:'用户名2',
								age: 21,
								gender: 1,
								isGuanzhu: true
							},
							{
								userPic: require('../../static/demo/userpic/14.jpg'),
								username:'用户名5',
								age: 21,
								gender: 1,
								isGuanzhu: false
							},
							{
								userPic: require('../../static/demo/userpic/15.jpg'),
								username:'用户名4',
								age: 22,
								gender: 0,
								isGuanzhu: false
							},
							{
								userPic: require('../../static/demo/userpic/16.jpg'),
								username:'用户名3',
								age: 23,
								gender: 0,
								isGuanzhu: true
							},
							{
								userPic: require('../../static/demo/userpic/17.jpg'),
								username:'用户名3',
								age: 25,
								gender: 0,
								isGuanzhu: true
							},
							{
								userPic: require('../../static/demo/userpic/18.jpg'),
								username:'用户名4',
								age: 26,
								gender: 0,
								isGuanzhu: true
							},
							{
								userPic: require('../../static/demo/userpic/19.jpg'),
								username:'用户名5',
								age: 27,
								gender: 1,
								isGuanzhu: false
							}
						],
						loadText: '上拉加载更多'
					},
					{
						list: [],
						loadText: '上拉加载更多'
					},
					{
						list: [],
						loadText: '上拉加载更多'
					},
				]
			};
		},
		methods: {
			tabChange(index){
				this.tabIndex = index
			},
			swiperChange(e){
				this.tabIndex = e.detail.current
			},
			loadMore(index){
				if(this.buddyList[index].loadText !== "上拉加载更多"){ return }
				// 更改状态
				this.buddyList[index].loadText = "加载中..."
				// 获取接口
				setTimeout(() => {
					// 获取完成
					let obj = {
						userPic: require('../../static/demo/userpic/20.jpg'),
						username:'用户名5',
						age: 28,
						gender: 0,
						isGuanzhu: true
					}
					this.buddyList[index].list.push(obj)
					this.buddyList[index].loadText = "上拉加载更多"
				}, 1000);
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
	box-sizing border-box
}
// 这里不加deep 就会出现滚动条，为何？？？
/deep/ ::-webkit-scrollbar {
	display:none;
	width:0;
	height:0;
	color:transparent;
}
</style>
