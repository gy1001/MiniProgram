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
		onNavigationBarButtonTap(event) {
			if(event.index === 0){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
