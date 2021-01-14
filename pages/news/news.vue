<template>
	<view>
		<news-nav-bar @clickLeft="clickLeft" @clickRight="clickRight" :tabList="tabList" :currentTab="currentTab" @toggleTab="toggleTab"></news-nav-bar>
		<!-- 列表 -->
		<block v-for="(item, itemIndex) in contentList" :key="itemIndex">
			<news-list @follow="follow(itemIndex)" @praise="praise($event, itemIndex)" :itemInfo="item"></news-list>
		</block>
	</view>
</template>

<script>
	import NewsNavBar from "../../components/news-nav-bar/news-nav-bar.vue" 
	import NewsList from '../../components/news-list/news-list.vue'
	export default {
		components: {
			'news-nav-bar': NewsNavBar,
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
				]
			};
		},
		methods:{
			toggleTab(item){
				this.currentTab = item.id
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
			}
		}
	}
</script>

<style lang="stylus">
</style>
