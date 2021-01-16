<template>
	<view>
		<detail-info :itemInfo="itemInfo"></detail-info>
	</view>
</template>

<script>
	import DetailInfo from '../../components/detail-info/detail-info.vue'
	export default {
		components: {
			"detail-info": DetailInfo
		},
		data() {
			return {
				itemInfo: {
					userpic: require('../../static/demo/userpic/12.jpg'),
					username: '昵称',
					gender: 0, // 0男1女
					age: 25,
					isGuanzhu: false,
					title: '分享标题',
					shareContent: '分享内容',
					type: 'img',// video img share
					titlePic: require("../../static/demo/datapic/13.jpg"),
					address: '深圳龙岗',
					shareNum: 20,
					commentNum: 20,
					isPraise: false,
					praiseNum: 20
				}
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
