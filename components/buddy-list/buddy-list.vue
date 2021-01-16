<template>
	<view class="buddy-list u-flex u-acenter animated fadeInLeft" @click="toDetail">
		<image :src="userItem.userPic" mode="widthFix" lazy-load></image>
		<view class="user-info-box">
			<view class="user-name">{{userItem.username}}</view>
			<gender-age-tag :age="userItem.age" :gender="userItem.gender"></gender-age-tag>
		</view>
		<view class="icon iconfont right-icon" :class="[userItem.isGuanzhu ? 'icon-xuanze-yixuan' : 'icon-zengjia1']" ></view>
	</view>
</template>

<script>
	import GenderAgeTag from '../../components/gender-age-tag/gender-age-tag.vue'
	export default {
		components:{
			'gender-age-tag': GenderAgeTag,
		},
		data() {
			return {
				
			};
		},
		props: {
			userItem: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			toDetail(){
				this.$emit("click", this.userItem)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.buddy-list{
	border-bottom solid 1upx #EEEEEE
	padding 20upx 0
	image{
		width 100upx
		height 100upx
		border-radius 100%
		margin-right 20upx
		flex-shrink 0
	}
	.user-info-box{
		flex 2
	}
	.right-icon{
		width 80upx
		font-size 35upx
		color #CCCCCC
		text-align right
		&.icon-zengjia1{
			color #F8791B
		}
	}
}
</style>
