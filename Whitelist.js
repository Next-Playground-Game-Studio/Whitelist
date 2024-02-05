/*
     ___   _____   _     _    ___   __   _   _____   _____   _____        _          __  _   _   _   _____   _____   _       _   _____   _____  
    /   | |  _  \ | |   / /  /   | |  \ | | /  ___| | ____| |  _  \      | |        / / | | | | | | |_   _| | ____| | |     | | /  ___/ |_   _| 
   / /| | | | | | | |  / /  / /| | |   \| | | |     | |__   | | | |      | |  __   / /  | |_| | | |   | |   | |__   | |     | | | |___    | |   
  / /_| | | | | | | | / /  / /_| | | |\   | | |     |  __|  | | | |      | | /  | / /   |  _  | | |   | |   |  __|  | |     | | \___  \   | |   
 /  __  | | |_| | | |/ /  /  __  | | | \  | | |___  | |___  | |_| |      | |/   |/ /    | | | | | |   | |   | |___  | |___  | |  ___| |   | |   Made By xiaoheiCat who is in Xianying Studio
/_/   |_| |_____/ |___/  /_/   |_| |_|  \_| \_____| |_____| |_____/      |___/|___/     |_| |_| |_|   |_|   |_____| |_____| |_| /_____/   |_|   https://github.com/Next-Playground-Game-Studio/Whitelist

/*



/* CONFIG AREA */
config_joinFailed = "§c\n对不起，你还不是该服务器的成员。\n§c联系服务器管理员以了解更多。"        // 加入游戏时发现不是白名单的提示
config_Removed = "§c\n就在刚刚，你已经不是服务器成员了。\n§c若要了解更多，请联系服务器管理员。"   // 游戏中途被移除白名单被踢的提示
/* END CONFIG */


let whitelist = [];

function InitConfig() {
  var config = File.readFrom("plugins/Whitelist/whitelist.txt");
  if (config == null || config == "" || config == "\r" || config == "\n" || config == "\r\n") {
    File.writeTo("plugins/Whitelist/whitelist.txt", "");
  } else {
    whitelist = config.split(/[(\r\n)\r\n]+/);
    // 删除空项
    whitelist.forEach((item, index) => {
      if (!item) {
        whitelist.splice(index, 1);
      }
    });
  }
}

function isWhitelisted(name) {
  return whitelist.includes(name);
}

function kickNonWhitelisted(player) {
  if (!isWhitelisted(player.name)) {
    mc.runcmd(`kick "${player.name}" ${config_joinFailed}`);
    return CANCEL;
  }
}

function InitPlugin() {
  ll.registerPlugin("Whitelist", "Replace the Bugjang fxxking whitelist!!!", [1, 0, 0], { "Author": "Xianying Studio" })
  InitConfig();

  var wladd = mc.newCommand("whitelistadd", "添加玩家到白名单。", PermType.GameMasters)
  wladd.mandatory("Playername", ParamType.String)
  wladd.overload(["Playername"])
  wladd.setCallback((_cmd, _ori, out, res) => {
    if (isWhitelisted(res.Playername)) {
      return out.error(`§c[ERROR] §r${res.Playername} 已经是白名单成员了，无法添加。`);
    } else {
      whitelist.push(res.Playername);
      File.writeTo("plugins/Whitelist/whitelist.txt", whitelist.join("\n"));
      return out.success(`§a[INFO] §r${res.Playername} 已被添加到白名单中。`);
    }
  });
  wladd.setup();

  var wlremove = mc.newCommand("whitelistremove", "从白名单中移除玩家。(注意: 若该玩家在线, 这将同时将该玩家踢出服务器)", PermType.GameMasters)
  wlremove.mandatory("Playername", ParamType.String)
  wlremove.overload(["Playername"])
  wlremove.setCallback((_cmd, _ori, out, res) => {
    if (isWhitelisted(res.Playername)) {
      whitelist.splice(whitelist.indexOf(res.Playername), 1);
      File.writeTo("plugins/Whitelist/whitelist.txt", whitelist.join("\n"));
      mc.runcmd(`kick "${res.Playername}" ${config_Removed}`);
      return out.success(`§a[INFO] §r${res.Playername} 已被从白名单中移除。`);
    } else {
      return out.error(`§c[ERROR] §r${res.Playername} 不在白名单中，无法移除。`);
    }
  });
  wlremove.setup();

  var reloaddwl = mc.newCommand("reloadwhitelist", "从磁盘中重载白名单。", PermType.GameMasters)
  reloaddwl.overload([])
  reloaddwl.setCallback((_cmd, _ori, out, res) => {
    InitConfig();
    return out.success(`§a[INFO] §r已成功从磁盘中重载白名单文件。`);
  });
  reloaddwl.setup();

  InitConfig();

  mc.listen("onPreJoin", function (player) {
    kickNonWhitelisted(player)
  });

  log("Whitelist Plugin Loaded!");
}

mc.listen("onServerStarted", function (player) {
  InitPlugin()
});
