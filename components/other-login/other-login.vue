<template>
	<view class="other-login-way u-flex u-acenter u-jbetween">
		<block v-for="(item, itemIndex) in providerList" :key="itemIndex">
			<view @click="tologin(item)" class="icon iconfont" :class="['icon-' + item.icon]"></view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: []
			};
		},
		created() {
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					this.providerList = result.provider.map((value) => {
						let providerName = '';
						let icon = ""
						switch (value) {
							case 'weixin':
								providerName = '微信登录'
								icon= "weixin"
								break;
							case 'qq':
								providerName = 'QQ登录'
								icon= "QQ"
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录'
								icon= "xinlangweibo"
								break;
							case 'xiaomi':
								providerName = '小米登录'
								icon= "QQ"
								break;
							case 'alipay':
								providerName = '支付宝登录'
								icon= "QQ"
								break;
							case 'baidu':
								providerName = '百度登录'
								icon= "QQ"
								break;
							case 'toutiao':
								providerName = '头条登录'
								icon= "QQ"
								break;
							case 'apple':
								providerName = '苹果登录'
								icon= "QQ"
								break;
							case 'univerify':
								providerName = '一键登录'
								icon= "QQ"
								break;
						}
						return {
							name: providerName,
							icon: icon,
							id: value
						}
					});
				},
				fail: (error) => {
					console.log('获取登录通道失败', error);
				}
			});
		},
		methods: {
			tologin(provider) {
			
				// 一键登录已在APP onLaunch的时候进行了预登陆，可以显著提高登录速度。登录成功后，预登陆状态会重置
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //支付宝小程序需设置授权类型
					// #endif
					success: (res) => {
						uni.showToast({
							title: '登录成功'
						})
						console.log(res)
						// 更新保存在 store 中的登录状态
						// this.login(provider.id);
						console.log("登录成功,保存到本地存储，修改当前登录用户状态")
					},
					fail: (err) => {
						console.log('login fail:', err);
					},
					complete: () => { }
				});
			}
		}
	}
</script>

<style lang="stylus" scoped>
.other-login-way{
	padding 20upx 150upx
	width 100%
	box-sizing border-box
	display flex
	align-items center
	flex-wrap nowrap
	.icon{
		width 100upx
		height 100upx
		font-size 55upx
		border-radius 100%
		text-align center
		box-sizing border-box
		color #FFFFFF
		$:not(first){
			margin-right 10upx
		}
		&.icon-weixin{
			background-color #2BD19B
		}
		&.icon-xinlangweibo{
			background-color #FC7729
		}
		&.icon-QQ{
			background-color #2CAEFC
		}
	}
}
</style>
