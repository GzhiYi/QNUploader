### 七牛图片上传扩展(Vue 2.0)
#### 写在前
扩展没办法上传，因为注册chrome开发者要5$的费用，但是我没法支付。所以有些可惜了。如果可以支付的可以联系我！
![TIM截图20180709092842](http://p7b9iw239.bkt.clouddn.com/TIM截图20180709092842.png)  
目的是创建一个上传图片到图床的工具，方便通过markdown引用。

#### 使用
![TIM截图20180710154500](http://p7b9iw239.bkt.clouddn.com/TIM截图20180710154500.png)
当然，使用还是可以的，可以在本地通过开发加载解压的扩展文件就可以用了。  
```bash
git clone git@github.com:GzhiYi/QNUploader.git
```
以上将源码下载到本地。在chrome上点菜单，更多工具，扩展程序，然后选择加载已解压的扩展程序，然后就可以在右上角的扩展进行图片上传了。  
[token获取](http://jsfiddle.net/b0zt725o/3/)  
bucketName获取：打开七牛云，tab上面的名字就是bucketName，  
Domain获取：打开七牛云，选择内容管理，外链默认域名就是这个Domain啦。  
填写完就可以直接上传了。  
![TIM截图20180710154548](http://p7b9iw239.bkt.clouddn.com/TIM截图20180710154548.png)

#### 注意
使用vue开发chrome扩展会遇到没有内容渲染出来的问题：  
![TIM截图20180709145721](http://p7b9iw239.bkt.clouddn.com/TIM截图20180709145721.png)

可以在mainifest.json添加这一行
```bash
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
```