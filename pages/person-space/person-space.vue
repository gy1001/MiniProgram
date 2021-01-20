<template>
	<view class="person-container">
		<user-space-head :userInfo="userInfo"></user-space-head>
	</view>
</template>

<script>
	import UserSpaceHead from '../../components/user-space-head/user-space-head.vue'
	export default {
		components: {
			"user-space-head": UserSpaceHead
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
					bgNum: 1
				},
			};
		},
		methods: {
		}
	}
</script>

<style lang="stylus">
.person-container{
	.margin-space {
		margin 15upx 0
	}
}
</style>
