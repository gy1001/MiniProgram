<template>
	<view class="index-list animated fadeIn">
		<view class="index-list1 u-flex u-acenter u-jbetween">
			<view class="u-flex u-acenter">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>{{item.username}}
			</view>
			<view class="u-flex u-acenter" v-if="item.isGuanzhu">
				已关注
			</view>
			<view class="u-flex u-acenter" v-else @click="follow">
				<view class="icon iconfont icon-zengjia"></view>关注
			</view>
		</view>
		<view class="index-list2" @click="toDetail">{{item.title}}</view>
		<view class="index-list3 u-flex u-acenter u-jcenter" @click="toDetail">
			<!-- 图片 -->
			<image :src="item.titlePic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type === 'video'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
				<view class="index-list-playinfo u-flex u-acenter">
					{{item.playNum}}播放 {{item.long}}
				</view>
			</template>
		</view>
		<view class="index-list4 u-flex u-acenter u-jbetween">
			<view class="">
				<view :class="{ active: item.info.index + '' === '1' }" @click="operate('ding')">
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>{{item.info.dingNum}}
				</view>
				<view :class="{ active: item.info.index + '' === '2' }" @click="operate('cai')">
					<view class="icon iconfont icon-kulian"></view>{{item.info.caiNum}}
				</view>
			</view>
			<view class="">
				<view class="">
					<view class="icon iconfont icon-pinglun"></view>{{item.commentNum}}
				</view>
				<view class="">
					<view class="icon iconfont icon-zhuanfa"></view>{{item.shareNum}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			item: {
				type: Object,
				default: {}
			},
			index: {
				type: [Number, String],
				default: 0
			}
		},
		methods: {
			follow(){
				this.$emit("follow", this.index)
			},
			operate(type){
				// 顶
				if(type === "ding"){
					if(this.item.info.index === 1){
						return
					}
					this.$emit("agree", this.index)
					return
				}
				// 踩
				if(this.item.info.index === 2){
					return
				}
				this.$emit("disAgree", this.index)
			},
			toDetail(){
				this.$emit("toDetail", this.index)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.index-list{
	padding 20upx;
	border-bottom solid 2upx #EEEEEE
	.index-list1{
		&>view:first-child{
			color #999999
			&>image{
				width 90upx
				height 90upx
				border-radius 100%
				margin-right 20upx
			}
		}
		&>view:last-child{
			color #333333
			background-color #F4F4F4
			border-radius 10upx
			padding 5upx 10upx
		}
	}
	.index-list2{
		padding-top 15upx
		font-size 32upx
	}
	.index-list3{
		padding-top 15upx
		position relative
		&>image{
			width 100%
			border-radius 20upx
		}
		& .index-list-play{
			position absolute
			font-size 140upx
			color #FFFFFF
		}
		& .index-list-playinfo{
			position absolute
			background-color rgba(51,51,51,0.72)
			color #FFFFFF
			bottom 8upx
			right 8upx
			border-radius 40upx
			padding 0 20upx
			font-size 25upx
		}
	}
	.index-list4{
		padding 15upx 0
		color #999999
		& view{
			display flex
			align-items center
		}
		&>view:first-child>view{
			&.active{
				color #C5F61C
			}
		}
		&>view>view:first-child{
			margin-right 10upx
		}
		& .icon{
			margin-right 15upx
			
		}
	}
}
</style>
