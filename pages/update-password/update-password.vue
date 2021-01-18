<template>
	<view class="update-psw-container">
		<input type="password" v-model="oldPsw" class="uni-input" placeholder="请输入旧密码" />
		<input type="password" v-model="newPsw" class="uni-input" placeholder="请输入新密码" />
		<input type="password" v-model="confirmPsw" class="uni-input" placeholder="请输入确认密码" />
		<button :loading="requestLoading" class="update-psw-btn" :class="{'disabled': btnDisabled }" @click="submit" type="primary">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPsw: '',
				newPsw: '',
				confirmPsw: '',
				requestLoading: false
			};
		},
		computed: {
			btnDisabled(){
				return !(this.oldPsw && this.newPsw && this.confirmPsw.length === this.newPsw.length)
			}
		},
		methods: {
			submit(){
				if(this.btnDisabled || this.requestLoading){
					return
				}
				if(this.confirmPsw === this.newPsw){
					uni.showToast({
						title: "确认密码和新密码不一致"
					})
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
.update-psw-container{
	padding 0 20upx
	.uni-input{
		border-bottom solid 1upx #EEEEEE 
		font-size 30upx
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
</style>
