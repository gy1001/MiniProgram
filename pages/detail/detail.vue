<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// 监听导航点击
		onNavigationBarButtonTap(event) {
			console.log(event.index)
			if(event.index === 0){
				console.log("顶部点击分享")
			}
		}
	}
</script>

<style lang="stylus">

</style>
