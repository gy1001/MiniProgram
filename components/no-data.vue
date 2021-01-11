<template>
	<view class="no-data animated fadeIn">
		<image src="@/static/image/no-data.png" mode="widthFix" lazy-load></image>
		<div>这里什么都没有哦</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
.no-data{
	position absolute
	width 100%
	height 100%
	color #AAAAAA
	display flex
	flex-direction column
	align-items center
	justify-content center
}
</style>
