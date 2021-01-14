<template>
	<uni-nav-bar :fixed="true" :statusBar="true" @clickTitle="clickTitle" :border="false" @clickLeft="clickLeft" @clickRight="clickRight">
		<!-- 左边 -->
		<view class="nav-left" slot="left">
			<view class="icon iconfont icon-qiandao"></view>
		</view>
		<!-- 中间 -->
		<view class="nav-middle u-flex u-acenter u-jcenter">
			<block v-for="item in tabList" :key="item.id">
				<view @click="toggleTab(item)" class="nav-item" :class="{active: currentTab == item.id}">{{item.name}}</view>
			</block>
		</view>
		<!-- 右边 -->
		<view class="nav-right" slot="right">
			<view class="icon iconfont icon-bianji"></view>
		</view>
	</uni-nav-bar>
</template>

<script>
	import UniNavBar from '../uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			'uni-nav-bar': UniNavBar,
		},
		data() {
			return {
				
			};
		},
		props:{
			tabList: {
				type: Array,
				default: []
			},
			currentTab: {
				type: [ Number, String ],
				default: ''
			}
		},
		methods: {
			clickTitle(){
				this.$emit("clickTitle")
			},
			clickLeft(){
				this.$emit("clickLeft")
			},
			clickRight(){
				this.$emit("clickRight")
			},
			toggleTab(item){
				this.$emit("toggleTab", item)
			}
		}
	}
</script>

<style lang="stylus">
.nav-left{
	text-align center
	padding-left 30upx
	.icon-qiandao{
		font-size 50upx
		color #FF9619
	}
}
.nav-middle{
	width 100%
	text-align center
	margin-left -20upx
	.nav-item{
		font-size 33upx
		padding 0 15upx
		font-weight bold
		color #969696
		position relative
		&.active{
			color #333333
			&::after{
				content: ''
				position absolute
				width 60upx
				height 6upx
				background-color #FEDE33
				bottom 0
				left calc(50% - 30upx)
			}
		}
	}
}
.nav-right{ 
	text-align center
	.icon-bianji{
		font-size 50upx
	}
}
</style>
