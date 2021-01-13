<template>
	<view class="uni-list">
		<view class="uni-list-cell">
			<view class="uni-uploader">
				<view class="uni-uploader-head">
					<view class="uni-uploader-title">点击可预览选好的图片</view>
					<view class="uni-uploader-info">{{imageList.length}}/9</view>
				</view>
				<view class="uni-uploader-body1">
					<view class="uni-uploader__files">
						<block v-for="(image,index) in imageList" :key="index">
							<view class="uni-uploader__file">
								<view class="icon iconfont icon-shanchu" @click="deleteImg(index)"></view>
								<image class="uni-uploader__img" :src="image" :data-src="image" @click="previewImage(index)"></image>
							</view>
						</block>
						<view class="uni-uploader__input-box" v-show="imageList.length < maxCount">
							<view class="uni-uploader__input" @click="chooseImage"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	const sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data(){
			return {
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeType: ['压缩', '原图', '压缩或原图'],
			}
		},
		props: {
			imageList: {
				type: Array,
				default: []
			},
			maxCount:{
				type: Number,
				default: 9
			},
			sourceTypeIndex:{
				type: [Number, String],
				default: 2
			},
			sizeTypeIndex: {
				type: [Number, String],
				default: 2
			}
		},
		methods: {
			chooseImage(){
				if(this.imageList.length >= this.maxCount){
					return
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.maxCount,
					success:(res) => {
						const newArr = this.imageList.concat(res.tempFilePaths);
						this.$emit("chooseImage", newArr)
					}
				})
			},
			deleteImg(index){
				uni.showModal({
					title: "提示",
					content: "是否要删除该图片",
					success: (res) => {
						if(res.confirm){
							this.$emit("deleteImg", index)
						}
					},
				})
			},
			previewImage(index) {
				uni.previewImage({
					current: index,
					urls: this.imageList
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.uni-list{
	// padding: 22rpx 30rpx;
	box-sizing border-box
	margin-top 50upx
	&::after, &::before{
		display none
	}
}
.uni-uploader__file{
	position relative
	.icon-shanchu{
		position absolute
		right 0
		top 0
		background-color #999999
		color #FFFFFF
		padding 0px 10upx
		border-radius 10upx
		box-sizing border-box
		z-index 100
	}
}
</style>
