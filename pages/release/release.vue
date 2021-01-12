<template>
	<view>
		<!-- <view class="status_bar"></view>
		<view>状态栏下的文字 </view> -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @clickTitle="clickTitle" @clickLeft="back" @clickRight="release" >
			<view class="u-flex u-jcenter">
				{{selectorText}} <view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea class="text-container" :value="textAreaText" placeholder="说一句话吧" />
		</view>
	</view>
</template>

<script>
	import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			'uni-nav-bar': UniNavBar
		},
		data() {
			return {
				selectorText: '所有人可见',
				textAreaText: ''
			};
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			release(){
				console.log("release")
			},
			clickTitle(){
				const listArr = ["所有人可见","仅自己可见"]
				uni.showActionSheet({
					itemList: listArr,
					success: (res) => {
						this.selectorText = listArr[res.tapIndex]
					}
				})
			}
		}
	}
</script>

<style lang="stylus">
.self-title{
	display flex
	justify-content center
	width 100%
}
.u-flex{
	width 100%
}
.uni-textarea{
	padding 20upx
	box-sizing border-box
	.text-container{
		border-radius 8upx
		border solid 2upx #F2F2F2
	}
}
</style>
