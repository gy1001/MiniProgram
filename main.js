import Vue from 'vue'
import App from './App'
// 挂载全局方法
import config from './common/config.js'
import lib from './common/lib.js'
Vue.config.productionTip = false

Vue.prototype.$config = config
Vue.prototype.$lib = lib
App.mpType = 'app'

const app = new Vue({
    ...App,
		config: config,
		lib
})
app.$mount()
