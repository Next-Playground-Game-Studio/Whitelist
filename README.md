# Advanced Whitelist (short as Whitelist)

English | [简体中文](https://github.com/Next-Playground-Game-Studio/Whitelist/blob/main/README.zh.md)

Welcome to Advanced Whitelist! This plugin allows you to add and remove members of a whitelist with a simple OP command, and reload the whitelist configuration file from disk while the server is running!

Unlike the original version, where whitelist commands had to be executed on the console and whitelist files could not be hot-updated, Advanced Whitelist allows OPs to whitelist directly from the chat box by logging in to the game without logging in to the console, saving you time and effort. However, please avoid giving OP privileges to people you don't trust, as this may pose a security risk to your server.

It is recommended to deactivate the original whitelist before enabling the plugin to prevent conflicts. Do not use other plugins to set up pseudonyms for players, this may result in certain players bypassing the whitelist or accidentally not being able to join the server. This issue will be fixed in a future release.

This plugin was made for LeviLamina. Until then, please download LeviLamina and its dependency packages using Lip or manually. I'll explain more below.

## Install / Update

### Install / Update using Lip

```shell
lip install github.com/Next-Playground-Game-Studio/Whitelist
```

### Manually

#### How to install LeviLamina

The official LeviLamina documentation provides the download instructions. Please follow the tutorials in their official documentation to complete the installation. [Portal 👉](https://levilamina.liteldev.com/zh/install/)

#### How to install the plugin  

Download the latest version of the plugin zip from [Release](https://github.com/Next-Playground-Game-Studio/Whitelist/releases), then unzip it using compression software, and place the `Whitelist` folder into the `plugins` folder in the BDS root directory.

## Use

| Commands | Functions | Permission |
| --- | --- | --- |
| /whitelistadd \<Player Name> | Add player to whitelist | OP  |
| /whitelistremove \<Player Name> | Remove player from whitelist | OP  |
| /reloadwhitelist | Reload whitelist configuration file from disk | OP  |

Note: \<Player Name> must be the player's full name, no player selectors such as @a, @p, @r, etc.

## Configuration files

The configuration file is in the `BDS Root Directory\plugins\Whitelist\whitelist.txt`, which holds all whitelisted members of the server. If you need to change it, just edit it directly, one player name per line, and be careful not to have blank lines.

## Contribute

To contact us, search for the QQ channel number `XianyingStu233` and post plugin feedback in the post square (be sure to select the correct category). The answer to the channel join question is `白日飞升` (Feel free to search for the map on Minecraft China Edition). Chinese required.

To participate in the development, please contact us as well. Pull Requests are also welcome.

## License

GPL-3.0 © Xianying Studio & Next Playground
