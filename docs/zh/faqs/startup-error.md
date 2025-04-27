# 窗口启动报错解答

## 下载内核失败

![图片alt](/public/下载内核失败.jpg)  

**解决方案**： 
* 查看本地是否有开启360等杀毒软件，如有开启请关闭杀毒软件后重新下载内核
* 检查本地网络，如果有使用vpn建议开启全局模式
* 检查系统证书版本，若版本较低，需要配置新版本证书  

## 创建指纹配置文件失败

![图片alt](/public/创建指纹配置文件失败.jpg)

**解决方案**：  
* Windows权限问题，以管理员身份启动软件

## 窗口显示启动中/等待中

![图片alt](/public/启动中.jpg)

**解决方案**：
* Ctrl+r刷新软件或者重启软件
* 检查本地网络是否为大陆网络，如果有使用vpn建议开启全局模式并重启软件

## EBUSY:resource busy ...

![图片alt](/public/resource%20busy.jpg)

**解决方案** ：  
内核文件被某些进程占用  

* 打开**资源监视器**，搜索句柄：chrome-bin，然后再结束相关进程即可  

![图片alt](/public/任务管理器.jpg)
![图片alt](/public/删除句柄.jpg)

## Failed to launch ....

![图片alt](/public/Falied%20to%20launch.jpg) 

**解决方案**：  
* **C:\Users\XXX\AppData\Roaming\RoxyBrowser\chrome-bin** 可以在这个目录下删除内核然后打开窗口重新下载，XXX为您本机的用户名，如果有打开杀毒软件建议关闭，因为杀毒软件可能会影响内核下载导致文件缺失  

![图片alt](/public/内核文件.jpg) 



