<template>
	<view>
		<!-- 聊天列表 -->
		<block v-for="(chatItem,chatIndex) in chatList" :key="chatIndex">
			<user-chat-list :chatItem="chatItem"></user-chat-list>
		</block>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submitChat"></user-chat-bottom>
	</view>
</template>

<script>
	import UserChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	import {time} from'../../common/util.js'
	import UserChatList from '../../components/user-chat-list/user-chat-list.vue'
	export default {
		components: {
			'user-chat-bottom': UserChatBottom,
			'user-chat-list': UserChatList
		},
		data() {
			return {
				chatList: []
			};
		},
		methods: {
			submitChat(text){
				console.log(text)
			},
			// 获取聊天数据
			getData(){
				// 从服务器获取数据
				let arr = [
					{
						userPic: require('../../static/demo/userpic/11.jpg'),
						isMe: false,
						type: 'text', //text img video 等 
						content: '内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容', 
						time: '1554970014',
						formatTime: ''
					},
					{
						userPic: require('../../static/demo/userpic/11.jpg'),
						isMe: false,
						type: 'text', //text img video 等 
						content: '随后发的', 
						time: '1554970314',
						formatTime: ''
					},
					{
						userPic: require('../../static/demo/userpic/12.jpg'),
						isMe: true,
						type: 'img', //text img video 等 
						content: require('../../static/demo/4.jpg'), 
						time: '1555146414',
						formatTime: ''
					},
					{
						userPic: require('../../static/demo/userpic/11.jpg'),
						isMe: false,
						type: 'text', //text img video 等 
						content: '测试', 
						time: '1555233755',
						formatTime: ''
					},
					{
						userPic: require('../../static/demo/userpic/12.jpg'),
						isMe: true,
						type: 'img', //text img video 等 
						content: require('../../static/demo/4.jpg'), 
						time: '1610688966',
						formatTime: ''
					},
					{
						userPic: require('../../static/demo/userpic/12.jpg'),
						isMe: true,
						type: 'img', //text img video 等 
						content: require('../../static/demo/4.jpg'), 
						time: '1610788933',
						formatTime: ''
					}
				]
				arr.forEach((chatItem, chatIndex) => {
					arr[chatIndex].formatTime = time.getChatTime(arr[chatIndex].time, chatIndex === 0 ? 0 : arr[chatIndex-1].time)
				})
				this.chatList = arr
			}
		},
		onLoad(){
			this.getData()
		}
	}
</script>

<style lang="stylus" scoped>
</style>
