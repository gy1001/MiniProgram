<template>
	<view class="user-data-box u-flex u-acenter u-jcenter">
		<block v-for="(item, itemIndex) in list" :key="itemIndex">
			<view class="user-data-item">
				<view class="item-number">{{item.number}}</view>
				<view class="item-text">{{item.text}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			list: Array,
			type: () => []
		}
	}
</script>

<style lang="stylus" scoped>
.user-data-box{
	padding 20upx
	box-sizing border-box
	.user-data-item{
		text-align center
		width 25%
		.item-text{
			color #989898
		}
		.item-number{
			color #333333
			font-size 30upx
		}
	}
}
</style>
