<template>
	<view>
		<template v-if="isSearched">
			<no-data v-if="searchList.length === 0"></no-data>
			<template v-else>
				<block v-for="(serachItem, searchIndex) in searchList" :key="searchIndex">
					<home-list @toDetail="toDetail(searchIndex)" @agree="agree(searchIndex)" @disAgree="disAgree(searchIndex)" @follow="follow(searchIndex)" :item="serachItem"></home-list>
				</block>
				<load-more :loadText="loadText"></load-more>
			</template>			
		</template>
	</view>
</template>

<script>
	import HomeList from '../../components/home-list.vue'
	import NoData from '../../components/no-data.vue'
	import LoadMore from '../../components/load-more.vue'
	export default {
		components: {
			"home-list": HomeList,
			'no-data': NoData,
			'load-more': LoadMore
		},
		data() {
			return {
				loadText: '上拉加载更多',
				searchList: [],
				isSearched: false,
				searchText: ''
			};
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(event){
			if(Number(event.index) === 0){
				uni.navigateBack()
			}
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(event){
			// console.log(event.text)
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发
		onNavigationBarSearchInputConfirmed(event){
			this.searchText = event.text
			this.getSearchData()
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
				this.getSearchData()
			}, 1000)
		},
		// 监听页面触底事件
		onReachBottom() {
			if(this.loadText !== "上拉加载更多"){ return }
			// 更改状态
			this.loadText = "加载中..."
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
				this.searchList.push(obj)
				this.loadText = "上拉加载更多"
			}, 1000);
		},
		methods: {
			toDetail(){
				
			},
			getSearchData(){
				uni.showLoading({
					title: '请稍候'
				})
				setTimeout(()=>{
					uni.hideLoading()
					this.searchList = [
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
					this.isSearched = true
				},2000)
			},
			agree(index){
				this.searchList[index].info.dingNum ++;
				if(this.searchList[index].info.index === 2){
					this.searchList[index].info.caiNum --;
				}
				this.searchList[index].info.index = 1
			},
			disAgree(index){
				this.searchList[index].info.caiNum ++;
				if(this.searchList[index].info.index === 1){
					this.searchList[index].info.dingNum --;
				}
				this.searchList[index].info.index = 2
			},
			follow(index){
				this.searchList[index].isGuanzhu = true
				uni.showToast({
					title: "关注成功"
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
