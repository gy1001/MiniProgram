<template>
	<view>
		聊天页面
		<!-- 输入框 -->
		<user-chat-bottom @submit="submitChat"></user-chat-bottom>
	</view>
</template>

<script>
	import UserChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	export default {
		components: {
			'user-chat-bottom': UserChatBottom
		},
		data() {
			return {
			};
		},
		methods: {
			submitChat(text){
				console.log(text)
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
