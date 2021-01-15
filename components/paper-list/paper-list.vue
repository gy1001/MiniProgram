<template>
	<view class="paper-list u-flex u-acenter animated fadeInLeft">
		<image class="paper-user-avatar" :src="paperInfo.userPic" mode="widthFix" lazy-load></image>
		<view class="paper-list-right">
			<view class="u-flex u-acenter u-jbetween">
				<view class="paper-list-name">{{paperInfo.userName}}</view>
				<view class="paper-list-time">{{paperInfo.time}}</view>
			</view>
			<view class="u-flex u-acenter u-jbetween">
				<view class="parer-list-content">{{paperInfo.content}}</view>
				<template v-if="paperInfo.noReadNum > 0">
					<uni-badge class="paper-list-badge" type="error" :text="paperInfo.noReadNum"></uni-badge>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import UniBadge from '../../components/uni-badge/uni-badge.vue'
	export default {
		components: {
			'uni-badge': UniBadge
		},
		data() {
			return {
				
			};
		},
		props: {
			paperInfo: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="stylus" scoped>
.paper-list{
	padding 20upx
	border-bottom solid 1px #EEEEEE
	width 100%
	box-sizing border-box
	.paper-user-avatar{
		width 100upx
		height 100upx
		border-radius 100%
		margin-right 20upx
		flex-shrink 0
	}
	.paper-list-right{
		flex 2
		.paper-list-name{
			font-size 32upx
		}
		.paper-list-time{
			color #CBCBCB
		}
		.parer-list-content{
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
			width 450upx
			color #CBCBCB
		}
		.paper-list-badge{
			flex-shrink 0
		}
	}
}
</style>
