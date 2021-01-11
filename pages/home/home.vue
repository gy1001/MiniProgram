<template>
	<view class="content"> 
		<block v-for="(item, index) in list" :key="index">
			<home-list :item="item" :index="index"></home-list>
		</block>
	</view>
</template>

<script>
	import HomeList from '../../components/home-list.vue'
	export default {
		components: {
			'home-list': HomeList
		},
		data() {
			return {
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
		},
		onLoad() {

		}, 
		methods: {

		}
	}
</script>
  
<style lang="stylus">
</style>
