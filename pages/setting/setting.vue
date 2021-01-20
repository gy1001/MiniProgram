<template>
	<view class="setting-container">
		<block v-for="(item, itemIndex) in list" :key="itemIndex">
			<left-right :itemInfo="item"></left-right>
		</block>
		<button type="primary" class="set-btn">退出登录</button>
	</view>
</template>

<script>
	import LeftRight from '../../components/left-right/left-right.vue'
	export default {
		components: {
			'left-right': LeftRight
		},
		data() {
			return {
				list: [
					{ text: '账号与安全', handler: this.updatePassword },
					{ text: '绑定邮箱', handler: this.bindEmail },
					{ text: '资料编辑', handler: this.editInfo },
					{ text: '小纸条' },
					{ text: '清除缓存', handler: this.clearCache },
					{ text: '意见反馈', handler: this.toFeedabckOpinion},
					{ text: '关于糗百', handler: this.toAboutUs }
				]
			};
		},
		methods: {
			updatePassword(){
				uni.navigateTo({
					url: '/pages/update-password/update-password'
				})
			},
			bindEmail(){
				uni.navigateTo({
					url: '/pages/bind-email/bind-email'
				})
			},
			editInfo(){
				uni.navigateTo({
					url: '/pages/update-info/update-info'
				})
			},
			toFeedabckOpinion(){
				uni.navigateTo({
					url: '/pages/opinion-feedback/opinion-feedback'
				})
			},
			toAboutUs(){
				uni.navigateTo({
					url: '/pages/about/about'
				})
			},
			clearCache(){
				uni.showModal({
					title: '提示',
					content: '是否要清除缓存',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorage()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="stylus" scoped>
.setting-container{
	padding 20upx
}
.set-btn{
	width 100%
	margin 40upx 0 20upx 0
	background-color #FFE933
	color #333333
	border 0
	outline none
}
</style>
