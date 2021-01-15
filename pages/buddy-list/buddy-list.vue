<template>
	<view>
		<!-- tab切换 -->
		<swiper-tab-head :scrollItemStyle="scrollItemStyle" :show-border="false" @tabChange="tabChange" :tabIndex="tabIndex" :tabBars="tabBars"></swiper-tab-head>
	</view>
</template>

<script>
	import SwiperTabHead from '../../components/swiper-tab-head.vue'
	export default {
		components: {
			'swiper-tab-head': SwiperTabHead
		},
		data() {
			return {
				tabBars: [
					{ name: '互关',id: '1', number: 10 },
					{ name: '关注',id: '2', number: 20 },
					{ name: '粉丝',id: '3', number: 30 },
				],
				tabIndex: 0,
				scrollItemStyle: {
					width: '33%'
				}
			};
		},
		methods: {
			tabChange(index){
				this.tabIndex = index
			}
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
