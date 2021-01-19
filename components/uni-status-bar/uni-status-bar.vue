<template>
	<view :style="{ height: statusBarHeight, ...barStyle }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
		props: {
			barStyle: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style scoped>
	.uni-status-bar {
		width: 750rpx;
		height: 20px;
	}
</style>