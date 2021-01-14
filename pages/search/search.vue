<template>
	<view>
		搜索内容
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(event){
			if(Number(event.index) === 0){
				uni.navigateBack()
			}
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(event){
			console.log(event.text)
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发
		onNavigationBarSearchInputConfirmed(event){
			console.log(event.text)
		}
	}
</script>

<style lang="stylus" scoped>

</style>
