<template>
	<view>
		<!-- <view class="status_bar"></view>
		<view>状态栏下的文字 </view> -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @clickTitle="clickTitle" @clickLeft="back" @clickRight="release" >
			<view class="u-flex u-jcenter">
				{{selectorText}} <view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<!-- 多行输入框 -->
			<textarea class="text-container" :value="textAreaText" placeholder="说一句话吧" />
			<!-- 上传多图 -->
			<upload-imgs :maxCount="maxCount" @deleteImg="deleteImg" @chooseImage="chooseImage" :imageList="imageList"></upload-imgs>
		</view>
		<!-- 弹窗公告 -->
		<uni-popup ref="uniPopup" type="center">
			<view class="notice-container">
				<image class="notice-img" src="../../static/image/notice.png" mode="widthFix"></image>
				<view class="">
					<view class="">1.涉及黄色、政治、广告及骚扰信息</view>
					<view class="">2.涉及人身攻击</view>
					<view class="">3.留联系方式，透露他人信息</view>
					<view class="">一经核实将被封禁，情节严重者永久封禁</view>
				</view>
				<button @click="hidePopup" class="notice-btn" type="default">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	import UplodImgs from '../../components/upload-imgs/upload-imgs.vue';
	import UniPopup from '../../components/uni-popup/uni-popup.vue';
	export default {
		components: {
			'uni-nav-bar': UniNavBar,
			"upload-imgs": UplodImgs,
			'uni-popup': UniPopup
		},
		data() {
			return {
				selectorText: '所有人可见',
				textAreaText: '',
				imageList: [],
				maxCount: 9,
				hasShowPopup: false
			};
		},
		mounted() {
			this.$refs.uniPopup.open()
		},
		onBackPress() {
			// 如果用户有值
			console.log(this.textAreaText, this.imageList.length)
			if(!this.textAreaText && this.imageList.length < 1){
				console.log(12222)
				return false
			}
			if(!this.hasShowPopup){
				this.saveAsDraft()
				return true // return true时候阻止返回
			}
		},
		methods: {
			toJSON(){},
			back() {
				uni.navigateBack()
			},
			saveAsDraft() {
				uni.showModal({
					content: "是否要保存为草稿?",
					cancelText: "不保存",
					confirmText: "保存",
					success:(res) => {
						this.hasShowPopup = true
						if(res.confirm){
							// 保存
							setTimeout(() => {
								uni.navigateBack()
							}, 1000)
						}else{
							// 不保存
							uni.navigateBack()
						}
					}
				})
			},
			hidePopup(){
				this.$refs.uniPopup.close()
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
			},
			chooseImage(newList) {
				this.imageList = newList;
			},
			deleteImg(index){
				this.imageList.splice(index, 1)
			}
		}
	}
</script>

<style lang="stylus">
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
.notice-container{
	width 550upx
	background-color #FFFFFF
	border-radius 30upx
	text-align center
	padding 50upx 0
	.notice-img{
		width 50%
	}
	.notice-btn{
		background-color #FFE934
		width 400upx
		margin-top 40upx
		color #171606
	}
}

</style>
