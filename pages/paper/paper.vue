<template>
	<view>
		<!-- 操作菜单 -->
		<popup-right-box @toggle="togglePopupVisible" :visible="popupVisible" :list="popupList"></popup-right-box>
		<!-- 小纸条列表  -->
		<block v-for="(paperInfo, paperIndex) in paperList" :key="paperIndex">
			<paper-list :paperInfo="paperInfo"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<load-more :loadText="loadText"></load-more>
	</view>
</template>

<script>
	import PaperList from '../../components/paper-list/paper-list.vue'
	import PopupRightBox from '../../components/popup-right-box/popup-right-box.vue'
	import LoadMore from '../../components/load-more.vue'
	export default {
		components: {
			'paper-list': PaperList,
			"load-more": LoadMore,
			'popup-right-box': PopupRightBox
		},
		data() {
			return {
				popupList: [
					{
						text: '加糗友',
						handler: this.followFriend,
						icon: 'icon-sousuo'
					},
					{
						text: '清楚缓存',
						icon: 'icon-qingchu',
						handler: this.clearCache
					}
				],
				popupVisible: false,
				loadText: '上拉加载更多',
				paperList:[
					{
						userPic: require('../../static/demo/userpic/3.jpg'),
						userName: '我是名称',
						time: '10:58',
						content: '这是内容',
						noReadNum: 4
					},
					{
						userPic: require('../../static/demo/userpic/2.jpg'),
						userName: '我是名称1',
						time: '10:58',
						content: '这是内容',
						noReadNum: 1
					},
					{
						userPic: require('../../static/demo/userpic/1.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/4.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/5.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/6.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/7.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/8.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/9.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					},
					{
						userPic: require('../../static/demo/userpic/10.jpg'),
						userName: '我是名称122',
						time: '10:58',
						content: '这是内容',
						noReadNum: 0
					}
				]
			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		onReachBottom() {
			if(this.loadText !== "上拉加载更多"){
				return
			}
			this.loadText = "加载中..."
			setTimeout(()=>{
				const newObj = {
					userPic: require('../../static/demo/userpic/11.jpg'),
					userName: '我是名称122',
					time: '10:58',
					content: '这是内容',
					noReadNum: Math.ceil(Math.random() *10)
				}
				this.paperList.push(newObj)
				this.loadText = "上拉加载更多"
			}, 1000)
		},
		onNavigationBarButtonTap(event) {
			console.log(event.index)
			if(event.index === 1){
				this.togglePopupVisible()
			}else{
				this.popupVisible = false
			}
		},
		methods: {
			followFriend(){
				this.togglePopupVisible()
			},
			clearCache(){
				console.log("清除缓存")
				this.togglePopupVisible()
			},
			togglePopupVisible(){
				this.popupVisible = !this.popupVisible
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
