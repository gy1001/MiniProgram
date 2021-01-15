<template>
	<view class="topic-detail-container">
		<topic-detail-head :topicInfo="topicInfo"></topic-detail-head>
	</view>
</template>

<script>
	import TopicDetailHead from '../../components/topic-detail-head/topic-detail-head.vue'
	export default {
		components: {
			'topic-detail-head': TopicDetailHead
		},
		data() {
			return {
				topicInfo: {
					titlePic: require("../../static/demo/topicpic/13.jpeg"),
					title: '忆往事，敬余生',
					desc: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
					todayNum: 300,
					totalNum: 100
				}
			};
		}
	}
</script>

<style lang="stylus" scoped>

</style>
