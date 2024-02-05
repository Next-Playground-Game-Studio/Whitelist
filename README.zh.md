# 高级白名单 (简称 白名单)

[English](https://github.com/Next-Playground-Game-Studio/Whitelist/blob/main/README.md) | 简体中文

欢迎使用《高级白名单》！这个插件可以使你通过简单的 OP 指令添加、删除白名单中的成员，且可以在服务器正在运行的情况下从磁盘重新载入白名单配置文件！

不同于原版，白名单命令必须在控制台执行，且白名单文件无法热更新，《高级白名单》可以让 OP 直接可以通过登录游戏在聊天框即可完成白名单管理，无需登录到控制台，省时省力。不过需要注意的是，请避免为不信任的人给予 OP 权限，这可能会给你的服务器带来安全风险。

在启用该插件前建议先停用原版白名单，防止冲突。不要使用其他插件给玩家设置假名，这可能导致某些玩家会绕过白名单或者意外地无法加入服务器。这个问题将在未来的版本中修复。

这个插件是为 LeviLamina 制作的。在此之前，请使用 Lip 或者手动方式下载 LeviLamina 及其依赖包。我将会在下方详细说明。

## 安装 / 更新

### 使用 Lip 安装 / 更新

```shell
lip install github.com/Next-Playground-Game-Studio/Whitelist
```

### 手动

#### 如何安装 LeviLamina

LeviLamina 的官方文档提供了下载方法。请按照其官方文档的教程完成安装。[传送门👉](https://levilamina.liteldev.com/zh/install/)

#### 如何安装插件  

从 [Release](https://github.com/Next-Playground-Game-Studio/Whitelist/releases) 下载最新版本的插件压缩包，接着使用压缩软件解压，然后将 `Whitelist`文件夹放入 BDS 根目录中的`plugins`文件夹中即可。

## 使用

| 指令  | 作用  | 权限  |
| --- | --- | --- |
| /whitelistadd <玩家名> | 添加玩家到白名单 | OP  |
| /whitelistremove <玩家名> | 从白名单中移除玩家 | OP  |
| /reloadwhitelist | 从磁盘重新载入白名单配置文件 | OP  |

注意：<玩家名> 必须为玩家全名，不可使用玩家选择器如 @a、@p、@r 等。

## 贡献

若要与我们联系，请搜索 QQ 频道号`XianyingStu233`，在帖子广场发插件反馈帖即可 (请一定要选择正确的分类)。频道加入问题答案为`白日飞升`(欢迎在网易我的世界上搜索该地图)。需要中文。

若要参与开发，也请联系我们。同时我们也欢迎 Pull Request。

## 许可证

GPL-3.0 © 仙影工作室 & Next Playground
