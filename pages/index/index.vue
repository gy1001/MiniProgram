<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in [1,2,3,4]" :key="index">
				<view class="uni-list-cell-navigate uni-navigate-right">
					11
				</view>
			</view>
		</view>
		<div class="iconfont icon-changjingguanli" style="font-size: 60upx;color: red"></div>
		<div class="animated fadeInUp">hello animate</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
