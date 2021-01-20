<template>
	<view class="login-container">
		<uni-status-bar :barStyle="barStyle"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @click="navigateBack"></view>
		<image class="uni-img-bar" src="../../static/image/loginhead.png" mode="widthFix" lazy-load></image>
		<view class="input-container">
			<template v-if="codeLoginStatus">
				<input type="number" maxlength="11" v-model="account" class="uni-input" placeholder="请输入手机号"/>
			</template>
			<input v-else type="text" v-model="account" class="uni-input" placeholder="昵称/手机号/邮箱" />
			<view class="password-box" v-if="codeLoginStatus">
				<input type="text" v-model="codeNum" class="uni-input" placeholder="请输入验证码" />
				<view @click="sendCodeNum" class="send-code-btn u-flex u-acenter"><view class="send-code-text">{{codeTime > 0 ? `重新发送(${codeTime})` : '获取验证码'}}</view></view>
			</view>
			<view class="password-box" v-else>
				<input type="password" v-model="password" class="uni-input" placeholder="请输入密码" />
				<view class="forget-psw u-flex u-acenter u-jcenter">忘记密码 <view class="icon iconfont icon-yiwen"></view></view>
			</view>
			<button :loading="requestLoading" class="update-psw-btn" :class="{'disabled': btnDisabled }" @click="submit" type="primary">登录</button>
		</view>
			<!-- 登录状态切换 -->
			<view class="login-toggle u-flex u-jcenter u-acenter login-padding" @click="toggleCodeLogin">
				{{codeLoginStatus ? '账号密码登录' : '验证码登录' }}
			<view class="icon-jinru icon iconfont"></view>
			</view>
			<!-- 第三方登录 -->
			<view class="other-login-container login-padding">
				第三方登录
			</view>
			<view class="other-login-way u-flex u-acenter u-jbetween">
				<view class="icon iconfont icon-weixin"></view>
				<view class="icon iconfont icon-QQ"></view>
				<view class="icon iconfont icon-xinlangweibo"></view>
			</view>
			<view class="privacy-container u-flex u-jcenter u-acenter login-padding">
				注册代表你同意 <view class="privacy-text">《糗事百科用户协议》</view>
			</view>
	</view>
</template>

<script>
	import UniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue"
	export default {
		components: {
			"uni-status-bar": UniStatusBar
		},
		data() {
			return {
				barStyle: {
					"background-color": '#FFE933'
				},
				password: '',
				account: '',
				requestLoading: false,
				// 验证码登录
				codeLoginStatus: false,
				// 验证码
				codeNum: '',
				codeTime: ''
			};
		},
		computed:{
			btnDisabled(){
				if(this.codeLoginStatus){
					// 验证码登录
					return !(this.account && this.codeNum)
				}
				return !(this.password && this.account)
			}
		},
		methods: {
			navigateBack(){
				uni.navigateBack()
			},
			submit(){
				// 验证码登录
				if(this.codeLoginStatus){
					if(!this.validatePhone(this.account)){
						return
					}
					console.log("验证码登录逻辑")
				}
				// 其他登录
			},
			toggleCodeLogin(){
				this.codeLoginStatus = !this.codeLoginStatus
				this.clearInputValue()
			},
			clearInputValue(){
				this.account = ""
				this.password = ""
				this.codeNum = ""
			},
			validatePhone(mobile){
				const phoneRegxp = /^1[34578]\d{9}$/
				if(!phoneRegxp.test(mobile)){
					uni.showToast({
						icon: "none",
						title: '请输入正确的手机号'
					})
					return false
				}
				return false
			},
			sendCodeNum(){
				if(this.codeNum > 0){
					return
				}
				// 验证手机号是否正确
				const phoneRegxp = /^1[34578]\d{9}$/
				if(!this.validatePhone(this.account)){
					return
				}
				this.codeTime  = 120;
				// 请求服务器发送验证码
				this.timer = 	setInterval(()=>{
					this.codeTime --
					if(this.codeTime <= 0){
						clearInterval(this.timer)
						this.codeTime = 0 
					}
				},1000)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.login-container{
	.login-padding{
		padding 20upx 0
	}
	.icon-guanbi{
		position fixed
		top 60upx
		left 30upx
		font-size 40upx
		font-weight bold
		z-index 100
	}
	.uni-img-bar{
		width 100%
	}
	.input-container{
		padding 0 20upx
		.uni-input{
			border-bottom solid 1upx #EEEEEE 
			font-size 30upx
		}
		.password-box{
			position relative
			input{
				padding-right 180upx
			}
			.send-code-btn{
				position absolute
				right 0
				top 0
				height 100%
				.send-code-text{
					width 180upx
					background-color #EEEEEE
					padding 10upx 0
					border-radius 10upx
					text-align center
					color #999999
					white-space nowrap
				}
			}
			.forget-psw{
				position absolute
				top 0
				right 0
				height 100%
				width 160upx
				background-color #FFE933
				.icon-yiwen::before{
					padding-left 5upx
				}
			}
		}
		.update-psw-btn{
			width 100%
			margin 40upx 0 20upx 0
			background-color #FFE933
			color #333333
			border 0
			outline none
			&.disabled{
				background-color #EEEEEE
				color #999999
			}
		}
	}
	.other-login-container{
		text-align center
		color #BBBBBB
		position relative
		&::after{
			position absolute
			background-color #BBBBBB
			height 1upx
			width 100upx
			content ''
			top 50%
			left 25%
		}
		&::before{
			position absolute
			background-color #BBBBBB
			height 1upx
			width 100upx
			content ''
			top 50%
			right 25%
		}
	}
	.other-login-way{
		padding 20upx 150upx
		width 100%
		box-sizing border-box
		.icon{
			width 100upx
			height 100upx
			font-size 55upx
			border-radius 100%
			text-align center
			box-sizing border-box
			color #FFFFFF
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
	.privacy-container{
		.privacy-text{
			color #007AFF
		}
	}
}
</style>
