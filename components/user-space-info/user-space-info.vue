<template>
	<view class="user-space-home">
		<view class="user-space-item">
			<view class="item-title">账号信息</view>
			<view class="item-text">糗龄: {{usedTime}}</view>
			<view class="item-text">糗百ID: {{userInfo.id}}</view>
		</view>
		<view class="user-space-item">
			<view class="item-title">个人信息</view>
			<view class="item-text">星座：{{constellationText}}</view>
			<view class="item-text">职业：{{userInfo.job}}</view>
			<view class="item-text">故乡：{{userInfo.homeTown}}</view>
			<view class="item-text">情感状态：{{userInfo.maritalStatus}}</view>
		</view>
	</view>
</template>

<script>
	import {time} from '../../common/util.js'
	export default {
		data() {
			return {
				
			}
		},
		props: {
			userInfo: {
				type: Object,
				default: () => {}
			}
		},
		computed: {
			constellationText(){
				return time.getHoroscope(this.userInfo.birthDay)
			},
			usedTime(){
				return time.sumAge(this.userInfo.registerTime)
			}
		},
	}
</script>

<style lang="stylus" scoped>
.user-space-home{
	padding 0 20upx
	.user-space-item{
		border-bottom solid 1upx #DDDDDD
		padding 20upx 0
		.item-title{
			margin-bottom 10upx
			font-size 30upx
		}
		.item-text{
			color #BBBBBB
		}
	}
}
</style>
