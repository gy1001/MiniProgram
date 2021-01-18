<template>
	<view class="bind-email-container">
		<input type="password" v-model="email" class="uni-input" placeholder="输入你要绑定的邮箱" />
		<input type="password" v-model="password" class="uni-input" placeholder="请输入密码" />
		<button :loading="requestLoading" class="bind-email-btn" :class="{'disabled': btnDisabled }" @click="submit" type="primary">完成</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				requestLoading: false
			};
		},
		computed: {
			btnDisabled(){
				return !(this.email && this.password)
			}
		},
		methods: {
			submit(){
				if(this.btnDisabled || this.requestLoading){
					return
				}
				this.requestLoading = true
				setTimeout(() => {
					this.requestLoading = false
				},1000)
				console.log("点击提交了")
			}
		}
	}
</script>

<style lang="stylus" scoped>
.bind-email-container{
	padding 0 20upx
	.uni-input{
		border-bottom solid 1upx #EEEEEE 
		font-size 30upx
	}
	.bind-email-btn{
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
</style>
