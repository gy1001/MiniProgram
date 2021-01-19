<template>
	<view class="about-container">
		<image class="about-logo" src="../../static/logo.png" mode="widthFix"></image>
		<view class="about-version">version 1.0.0</view>
		<block v-for="(item, itemIndex) in list" :key="itemIndex">
			<left-right :itemInfo="item"></left-right>
		</block>
	</view>
</template>

<script>
	import LeftRight from '../../components/left-right/left-right.vue'
	export default {
		components: {
			"left-right": LeftRight
		},
		data() {
			return {
				list: [
					{ text: '新版本检测' },
					{ text: '仿糗事百科用户协议' },
				]
			};
		}
	}
</script>

<style lang="stylus" scoped>
.about-container{
	padding 20upx
	text-align center
	.about-logo{
		width 400upx
		margin-top 30upx
		margin-bottom 30upx
	}
	.about-version{
		color #CCCCCC
	}
}
</style>
