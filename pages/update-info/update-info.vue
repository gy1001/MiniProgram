<template>
	<view class="update-info-container">
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">头像</view>
			<view class="u-flex u-acenter">
				<image class="userinfo-avatar" :src="userAvatar" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1" @click="changeAvatar"></view>
			</view>
		</view>
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">昵称</view>
			<view class="u-flex u-acenter">
				<view class="">{{userName}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">性别</view>
			<view class="u-flex u-acenter">
				<view class="">男</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">生日</view>
			<view class="u-flex u-acenter">
				<view class="">2019-03-18</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">情感</view>
			<view class="u-flex u-acenter">
				<view class="">未婚</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">职业</view>
			<view class="u-flex u-acenter">
				<view class="">IT</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="userinfo-list u-flex u-acenter u-jbetween">
			<view class="userinfo-title">家乡</view>
			<view class="u-flex u-acenter">
				<view class="">河南南阳</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<button :loading="requestLoading" class="update-psw-btn" :class="{'disabled': btnDisabled }" @click="submit" type="primary">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userAvatar: require('../../static/demo/userpic/10.jpg'),
				userName: '用户名',
				birthDay: '1991-08-22',
				requestLoading: false,
				btnDisabled: false
			};
		},
		methods: {
			submit(){
				
			},
			changeAvatar(){
				uni.chooseImage({
					count: 1,
				 sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success:(res) => {
						this.userAvatar = res.tempFilePaths[0]
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.update-info-container{
	padding 20upx
	.userinfo-list{
		padding 20upx 0
		border-bottom solid 1upx #F4F4F4
		.userinfo-title{
			font-size 32upx
			font-weight bold
			color #9B9B9B
		}
		.icon-bianji1{
			margin-left 20upx
			color #9B9B9B
		}
		.userinfo-avatar{
			width 80upx
			height 80upx
			border-radius 100%
		}
	}
	.update-psw-btn{
		width 100%
		margin 40upx 0 20upx 0
		background-color #FFE933
		color #333333
		border 0
		outline none
		&.disabled{
			background-color #EEEEEE
			color #999999
		}
	}	
}
</style>
