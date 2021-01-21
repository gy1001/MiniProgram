import config from './config.js'
// 测试方法

const ceshi = function(){
	consle.log(config.webUrl)
}
// 网络监听
const network = {
	// 网络状态
	isConnect: false,
	// 监听网络状态
	on(){
		// 获取网络状态
		uni.getNetworkType({
			success: res => {
				if(res.networkType !== "none"){
					this.isConnect = true
					return
				}
				uni.showToast({
					icon: "none",
					title: '请先连接网络'
				})
			}
		})
		// 监听网络状态
		uni.onNetworkStatusChange((res) => {
			this.isConnect = res.isConnected;
			if(!res.isConnected){
				uni.showToast({
					icon: "none",
					title: '您目前处于断网状态'
				})
			}
		})
	}
}
// 热更新
const update = ()=>{
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
	    uni.request({  
	        url: 'http://www.example.com/update/',  
	        data: {  
						version: widgetInfo.version,  
						name: widgetInfo.name  
	        },  
	        success: (result) => {  
	            var data = result.data;  
	            if (data.update && data.wgtUrl) {  
	                uni.downloadFile({  
	                    url: data.wgtUrl,  
	                    success: (downloadResult) => {  
	                        if (downloadResult.statusCode === 200) {  
	                            plus.runtime.install(downloadResult.tempFilePath, {  
																force: false  
	                            }, function() {  
																console.log('install success...');  
																plus.runtime.restart();  
	                            }, function(e) {  
																console.error('install fail...');  
	                            });  
	                        }  
	                    }  
	                });  
	            }  
	        }  
	    });  
	});  
	// #endif
}
export default {
	ceshi,
	network
}