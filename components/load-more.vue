<template>
	<view class="load-more">{{loadText}}</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			loadText: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="stylus">
.load-more{
	text-align center
	color #AAAAAA
	padding 15upx
}
</style>
