<template>
	<view class="user-space-head u-flex u-acenter u-jcenter">
		<image @click="changePersonBg" class="person-bg" :src="`../../static/demo/topicpic/${userInfo.bgNum}.jpeg`" mode="widthFix" lazy-load></image>
		<view class="user-space-info u-flex u-acenter flex-column">
			<image class="user-avatar" :src="userInfo.userPic" mode="widthFix" lazy-load></image>
			<view class="user-name margin-space u-flex u-acenter">
				<view class="user-name-text">{{userInfo.userName}}</view>
				<gender-age-tag :age="userInfo.age" :gender="userInfo.gender"></gender-age-tag>
			</view>
			<view @click="followUser" class="icon iconfont user-space-btn" :class="[userInfo.isFollow ? 'active' : 'icon-zengjia']">
				{{userInfo.isFollow ? '已关注' : '关注'}}
			</view>
		</view>
	</view>
</template>

<script>
	import GenderAgeTag from "../../components/gender-age-tag/gender-age-tag.vue"
	export default {
		components: {
			"gender-age-tag": GenderAgeTag
		},
		data() {
			return {
				
			};
		},
		props: {
			userInfo: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			followUser(){
				this.userInfo.isFollow = !this.userInfo.isFollow
				uni.showToast({
					title: this.userInfo.isFollow ? '关注成功' : '取消成功'
				})
			},
			changePersonBg(){
				if(parseInt(this.userInfo.bgNum) < 4){
					this.userInfo.bgNum ++
				}else{
					this.userInfo.bgNum = 1
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
.margin-space {
	margin 15upx 0
}
.user-space-head{
	position relative
	height 500upx
	width 100%
	overflow hidden
	.person-bg{
		width 100%
		position absolute
		top 0
		left 0
	}
	.user-space-info{
		z-index 10
		.user-avatar{
			width 150upx
			height 150upx
			border-radius 100%
		}
		.user-name{
			color white
			font-size 30upx
			text-shadow 2upx 2upx 10upx #333333
			margin-bottom 40upx
			.user-name-text{
				margin-right 10upx
			}
		}
		.user-space-btn{
			background-color #FFE933
			color #333333
			border solid 1upx #FFE933
			padding 0 15upx
			border-radius 10upx
			font-size 28upx
			box-sizing border-box
			&.active{
				background-color transparent
				color #FFFFFF
				border-color #FFFFFF
			}
		}
	}
}	
</style>
