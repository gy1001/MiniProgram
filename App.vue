<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.$lib.network.on()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 引入官方css库 */
	@import './common/uni.css';
	/* 引入自定义图标库 */
	@import "./common/iconfont.css";
	/* 引入css动画库 */
	@import './common/animate.min.css';
	/* 引入 ”样式库 */
	@import './common/common.css';
</style>
