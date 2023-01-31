/*
 Language: mcfunction
 Category: scripting
 Author: AdamRaichu
 Description: The language for Minecraft's function files.
*/
module.exports = function (hljs) {
  return {
    name: "mcfunction",
    keywords: {
      keywords:
        "? ability advancement alwaysday attribute ban ban-ip banlist bossbar camerashake changesetting clear clearspawnpoint clone connect damage data datapack daylock debug dedicatedwsserver defaultgamemode deop dialogue difficulty effect enchant event execute experience fill fillbiome fog forceload function gamemode gamerule gametest give help immutableworld item jfr kick kill list locate loot me mobevent msg music op ops pardon pardon-ip particle perf permission place playanimation playsound publish recipe reload remove replaceitem ride save save-all save-off save-on say schedule scoreboard seed setblock setidletimeout setmaxplayers setworldspawn spawnpoint spectate spreadplayers stop stopsound structure summon tag team teammsg teleport tell tellraw testfor testforblock testforblocks tickingarea time title titleraw tm toggledownfall tp trigger volumearea w warden_spawn_tracker wb weather whitelist worldborder worldbuilder wsserver xp agent codebuilder classroommode closechat closewebsocket code enableencryption getchunkdata getchunks geteduclientinfo geteduserverinfo getlocalplayername getspawnpoint gettopsolidblock globalpause lesson listd querytarget spawnitem takepicture achievement banip blockdata broadcast chunk clearfixedinv detect entitydata executeasself home mixer locatebiome placefeature position resupply setfixedinvslot setfixedinvslots setspawn solid stats transferserver unban videostream videostreamaction",
      literal: "true false",
    },
    case_insensitive: true,
    disableAutodetect: false,
    contains: [],
  };
};

/* https://minecraft.fandom.com/wiki/Commands#List_and_summary_of_commands
var t = document.querySelectorAll("tbody tr td[style]:first-child code");
var a = []
for (var i = 0; i < t.length; i++) {
  var c = t[i].textContent.substring(1);
  if (!a.includes(c)) {
    a.push(c);
  }
}
*/
