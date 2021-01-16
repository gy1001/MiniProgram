<template>
	<view class="user-chat-container">
		<scroll-view scroll-y="true" id="chat-scroll" :scroll-top="scrollTop" :scroll-with-animation="true" :style="{ height: contentHeight +'px'}">
			<view class="chat-list-container">
				<!-- 聊天列表 -->
				<block v-for="(chatItem,chatIndex) in chatList" :key="chatIndex">
					<user-chat-list :chatItem="chatItem"></user-chat-list>
				</block>
			</view>
		</scroll-view>
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
				chatList: [],
				scrollTop: 0,
				contentHeight: 500
			};
		},
		methods: {
			submitChat(text){
				if(text){
					const newObj = {
						userPic: require('../../static/demo/userpic/11.jpg'),
						isMe: true,
						type: 'text', //text img video 等 
						content: text, 
						time: new Date().getTime(),
						formatTime: time.getChatTime(new Date().getTime(), this.chatList[this.chatList.length-1].time)
					}
					this.chatList.push(newObj)		
					this.scrollToChatBottom()
				}
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
			},
			scrollToChatBottom(){
				this.$nextTick(() => {
					const selector = uni.createSelectorQuery()
					selector.select('#chat-scroll').boundingClientRect()
					selector.select('.chat-list-container').boundingClientRect()
					selector.exec((res) => {
						const scrollViewHeight = res[0].height
						const innerListHeight = res[1].height
						console.log(innerListHeight, scrollViewHeight)
						if(innerListHeight > scrollViewHeight){
							 this.scrollTop = innerListHeight
						}
					})
				})
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(110) // 底部输入框是110
					this.contentHeight = height
				}
			})
			this.getData()
		},
		mounted() {
			this.scrollToChatBottom()
		}
	}
</script>

<style lang="stylus" scoped>
.user-chat-container{
	padding 0 20upx 
}
</style>
