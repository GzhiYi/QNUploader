### 七牛图片上传Chrome扩展(Vue实现)
#### 写在前
Repo有两个版本，一个是Jquery实现的，一个是Vue，后续不更新Jquery版本，只开发Vue版本。  
有任何建议欢迎提出来，能实现的我尽量实现出来。  
本扩展特点：
- 简单方便，使用个人图床，安全便捷好管理。
- 本地存储Token和Domain，不需要重复输入。
- 一键上传图片，返回预览，可以方便看到上传的图片。
- 一键复制url和markdown格式的图片，方便贴图。
- 错误友好返回，方便定位问题。
- 不建议不喜欢折腾的用户使用。  

#### 使用前提
1. 由于使用的是七牛云图床，所以需要每个使用者注册一个七牛云开发者账号，并按要求建立一个对象存储。[注册链接。](https://portal.qiniu.com/signup?code=3lfwclvxx0c42)
2. 注册过程貌似还要审核，放心审核吧，自己的图床自己做主😄。

#### 安装到Chrome
下载源码到本地：
```bash
git clone git@github.com:GzhiYi/QNUploader.git
```
添加到chrome: 菜单-更多工具-扩展程序-加载已解压的扩展程序  
说明：由于上传不到Chrome商店，支付不到5美元注册开发者的费用，所以只能本地使用。注意每次打开chrome不要关闭这个扩展就行了。

#### 获取字段
整个扩展只需要一个`UploadToken`以及一个外链默认域名`Domain`即可。  

#### 开发注意(可忽视)
使用vue开发chrome扩展会遇到没有内容渲染出来的问题：

可以在mainifest.json添加这一行
```bash
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
```

#### 后续
功能不定期更新...
（被七牛这么一搞，没动力了）
