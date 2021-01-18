<template>
	<view class="comment-detail-container">
		<detail-info :itemInfo="itemInfo"></detail-info>
		<view class="comment-title">最新评论 {{commentInfo.totalCount}}</view>
		<view class="comment-container">
			<block v-for="(commentItem, commentIndex) in commentInfo.list" :key="commentIndex">
				<comment-list :commentInfo="commentItem"></comment-list>
				<view class="comment-replay-container" v-if="commentItem.replyList.length > 0">
					<block v-for="(replyItem, replyIndex) in commentItem.replyList" :key="replyIndex">
						<comment-list :commentInfo="replyItem"></comment-list>
					</block>
				</view>
			</block>
		</view>
		<user-chat-bottom @submit="commentSubmit"></user-chat-bottom>
		<!-- 分享框 -->
		<share-popup @toggleVisible="toggleShareVisible" :visible="shareVisible"></share-popup>
	</view>
</template>

<script>
	import DetailInfo from '../../components/detail-info/detail-info.vue'
	import CommentList from '../../components/comment-list/comment-list.vue'
	import UserChatBottom from '../../components/user-chat-bottom/user-chat-bottom.vue'
	import {time} from '../../common/util.js'
	import SharePopup from '../../components/share-popup/share-popup.vue'
	export default {
		components: {
			"detail-info": DetailInfo,
			"comment-list": CommentList,
			"user-chat-bottom": UserChatBottom,
			'share-popup': SharePopup
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
				},
				commentInfo: {
					totalCount: 0,
					list: []
				},
				shareVisible: false,
				shareList: [
					{
						icon: 'icon-weixn',
						// handler: () =>  this.shareTo
					}
				]
			};
		},
		// 监听导航点击
		onNavigationBarButtonTap(event) {
			console.log(event.index)
			if(event.index === 0){
				console.log("顶部点击分享")
				this.toggleShareVisible()
			}
		},
		onLoad() {
			this.getCommentData()
		},
		methods: {
			toggleShareVisible(){
				this.shareVisible = !this.shareVisible
			},
			getCommentData(){
				const newArr = [
					{
						titlePic: require('../../static/demo/userpic/1.jpg'),
						username:'昵称',
						time: '1610788933',
						content: '评论内容',
						replyList: [
							{
								titlePic: require('../../static/demo/userpic/2.jpg'),
								username:'昵称',
								time: '301610789933',
								content: '回复内容'
							}
						]
					},
					{
						titlePic: require('../../static/demo/userpic/3.jpg'),
						username:'昵称',
						time: '1610788933',
						content: '评论内容',
						replyList: []
					},
					{
						titlePic: require('../../static/demo/userpic/4.jpg'),
						username:'我是昵称',
						time: '1610813269',
						content: '评论内容',
						replyList: [
							{
								titlePic: require('../../static/demo/userpic/5.jpg'),
								username:'昵称',
								time: '1610814269',
								content: '回复内容'
							}
						]
					}
				]
				newArr.forEach((commentItem, commentIndex) => {
					newArr[commentIndex].formatTime = time.getTime(commentItem.time)
				})
				this.commentInfo = {
					totalCount: newArr.length,
					list: newArr
				}
			},
			commentSubmit(text){
				const newTextCommentInfo = {
					titlePic: require('../../static/demo/userpic/1.jpg'),
					username: '我是昵称',
					time:  time.getTime(new Date().getTime()),
					content: text,
					replyList: []
				}
				this.commentInfo.list.push(newTextCommentInfo)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.comment-detail-container{
	padding-bottom 120upx
	.comment-title{
		padding 20upx
		padding-bottom 0
		font-weight bold
		font-size 30upx
	}
	.comment-container{
		padding 0 20upx
		padding-bottom 30upx
		box-sizing border-box
		.comment-replay-container{
			padding 20upx
			box-sizing border-box
			background-color #f4f4f4
			border-bottom 1upx solid #F4F4F4
			margin-left 70upx
			border-radius 15upx
		}
	}
}

</style>
