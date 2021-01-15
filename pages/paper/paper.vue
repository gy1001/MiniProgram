<template>
	<view>
		<!-- 小纸条列表  -->
		<block v-for="(paperInfo, paperIndex) in paperList" :key="paperIndex">
			<paper-list :paperInfo="paperInfo"></paper-list>
		</block>
	</view>
</template>

<script>
	import PaperList from '../../components/paper-list/paper-list.vue'
	export default {
		components: {
			'paper-list': PaperList
		},
		data() {
			return {
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
					}
				]
			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		}
	}
</script>

<style lang="stylus" scoped>
</style>
