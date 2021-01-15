<template>
	<view class="tag-gender icon iconfont" :class="[ gender == 0 ? 'icon-nan' : 'icon-nv']">
		{{age}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: {
			age: {
				type: [Number,String],
				default: 0
			},
			gender:{
				type: [Number,String],
				default: 0
			}
		}
	}
</script>

<style lang="stylus" scoped>
.tag-gender{
	background-color #007AFF
	color #FFFFFF
	font-size 23upx
	padding 5upx 10upx
	border-radius 20upx
	line-height 24upx
	display inline-block
	&.icon-nv{
		background-color pink
	}
}
</style>
