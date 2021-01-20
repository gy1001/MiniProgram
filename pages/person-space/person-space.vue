<template>
	<view class="person-container">
		<!-- 背景图 + 用户基本信息 -->
		<user-space-head :userInfo="userInfo"></user-space-head>
		<!-- 统计 -->
		<view class="user-space-container">
			<top-bottom :list="topBottomList"></top-bottom>
			<view class="gray-space"></view>
			<swiper-tab-head @tabChange="tabChange" :scrollItemStyle="scrollItemStyle" :tabBars="tabBarList" :tabIndex="tabIndex" :showBorder="false"></swiper-tab-head>
			<!-- 主页 -->
			<user-space-info :userInfo="userInfo"></user-space-info>
		</view>
	</view>
</template>

<script>
	import UserSpaceHead from '../../components/user-space-head/user-space-head.vue'
	import TopBottom from '../../components/top-bottom/top-bottom.vue'
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	import UserSpaceInfo from '../../components/user-space-info/user-space-info.vue'
	export default {
		components: {
			"user-space-head": UserSpaceHead,
			"top-bottom": TopBottom,
			'swiper-tab-head': SwiperTabHead,
			"user-space-info": UserSpaceInfo
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
				}
			};
		},
		
		methods: {
			tabChange(index){
				this.tabIndex = index
			}
		}
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
