<template>
	<scroll-view :scroll-with-animation="true" :scroll-x="true" class="uni-swiper-tab" :scroll-into-view="'scroll_tab_' + tabIndex">
		<block v-for="(tab, index) in tabBars" :key="tab.id">
			<view @click="tabTap(index)" class="swiper-tab-list" :class="{active: index == tabIndex}" :id="'scroll_tab_' + index">
				{{tab.name}}
			</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props: {
			tabBars: {
				default: [],
				type: Array
			},
			tabIndex: {
				default: [Number],
				type: 0
			}
		},
		methods: {
			tabTap(index){
				this.$emit("tabChange", index)
			}
		}
	}
</script>

<style lang="stylus">
.swiper-tab-list{
	color #969696
	font-weight bold
	position relative
	&.active{
		color #343434
		&:after{
			content: ''
			position absolute
			width 70upx
			background-color #FEDE33
			height 8upx
			border-radius 20upx
			bottom -10upx
			left calc(50% - 35upx)
		}
	}
}
// 这里不加deep 就会出现滚动条，为何？？？
/deep/ ::-webkit-scrollbar {
	display:none;
	width:0;
	height:0;
	color:transparent;
}
</style>
