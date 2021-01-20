<template>
	<view class="person-container">
		<!-- 操作菜单 -->
		<popup-right-box @toggle="togglePopupVisible" :visible="popupVisible" :list="popupList"></popup-right-box>
		<!-- 背景图 + 用户基本信息 -->
		<user-space-head :userInfo="userInfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-container">
			<top-bottom :list="topBottomList"></top-bottom>
			<view class="gray-space"></view>
			<swiper-tab-head @tabChange="tabChange" :scrollItemStyle="scrollItemStyle" :tabBars="tabBarList" :tabIndex="tabIndex" :showBorder="false"></swiper-tab-head>
			<!-- 主页 -->
			<user-space-info v-if="Number(tabIndex) === 0" :userInfo="userInfo"></user-space-info>
			<template v-if="Number(tabIndex) === 1">
				<block v-for="(activeItem, activeIndex) in followListObj.list" :key="activeIndex">
					<news-list :itemInfo="activeItem"></news-list>
				</block>
				<!-- 上拉加载更多 -->
				<load-more :loadText="followListObj.loadText"></load-more> 
			</template>
		</view>
	</view>
</template>

<script>
	import UserSpaceHead from '../../components/user-space-head/user-space-head.vue'
	import TopBottom from '../../components/top-bottom/top-bottom.vue'
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import UserSpaceInfo from '../../components/user-space-info/user-space-info.vue'
	import NewsList from '../../components/news-list/news-list.vue'
	import LoadMore from '../../components/load-more.vue'
	import PopupRightBox from '../../components/popup-right-box/popup-right-box.vue'
	export default {
		components: {
			"user-space-head": UserSpaceHead,
			"top-bottom": TopBottom,
			'swiper-tab-head': SwiperTabHead,
			"user-space-info": UserSpaceInfo,
			"news-list": NewsList,
			"load-more": LoadMore,
			"popup-right-box": PopupRightBox
		},
		data() {
			return {
				// 是否已经关注
				userInfo: {
					userPic: require("../../static/demo/userpic/4.jpg"),
					age: 20,
					gender: 1,
					userName: "用户名称",
					isFollow: true,
					bgNum: 1,
					birthDay: '1991-09-22',
					registerTime: '2018-08-08',
					job: 'IT',
					id: '1000978',
					constellation: "处女座",
					homeTown: '河南南阳',
					maritalStatus: '未婚'
				},
				topBottomList: [
					{ text: '获赞', number: '10k'},
					{ text: '关注', number: '11' },
					{ text: '粉丝', number: '22' }
				],
				tabIndex: 0,
				tabBarList: [
					{ name: '主页', id: 1 },
					{ name: '糗事', id: 2 },
					{ name: '动态', id: 3 }
				],
				scrollItemStyle: {
					width : '33.33%'
				},
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
				popupVisible: false,
				popupList: [
					{
						text: '拉黑',
						handler: this.blockUser,
						icon: 'icon-sousuo'
					},
					{
						text: '备注',
						icon: 'icon-qingchu',
						handler: this.remarks
					}
				],
			};
		},
		
		methods: {
			blockUser(){
				this.togglePopupVisible()
				console.log("拉黑")
			},
			remarks(){
				this.togglePopupVisible()
				console.log("备注")
			},
			tabChange(index){
				this.tabIndex = index
			},
			loadMoreActiveList(){
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
			},
			togglePopupVisible(){
				this.popupVisible = !this.popupVisible
			},
		},
		onReachBottom() {
			if(Number(this.tabIndex) === 1){
				this.loadMoreActiveList()
			}
		},
		onNavigationBarButtonTap(event) {
			if(event.index === 0){
				this.togglePopupVisible()
			}
		},
	}
</script>

<style lang="stylus">
.person-container{
	.margin-space {
		margin 15upx 0
	}
	.user-space-container{
		background-color #FFFFFF
		position relative
		top -20upx
		border-top-left-radius 20upx
		border-top-right-radius 20upx
	}
	.gray-space{
		height 20upx
		background-color #EEEEEE
	}
}
</style>
