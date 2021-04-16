require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
//var safeEval = require('safe-eval')
var safeEval = require('newbox-eval')
//const moment = require("moment")
var io = require("socket.io-client")
const querystring = require('querystring');
const fetch = require('node-fetch');
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyMjgwMzI0MzExNzQ0NTE3MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA4MDQ1ODg5fQ.E-pIrQLZxl-nM8EGJGKAe1IC3aSITuogFjdo9dippe4', {
    webhookPort: 5000,
    webhookAuth: 'r00tl!k3$t00r'
}, bot);
var serversVerified = ["776438560559071244", "722489023297224795", "751515125479112756", "787776747952275466", "794597787110211596", "759849655005085696", "785869282071805962"]
// Optional events
dbl.on('posted', () => {
    console.log('Server count posted!');
})

dbl.on('error', e => {
    console.log(`Oops! ${e}`);
})
var ch;
var edtitingsave;
var reactee = [];
var fs = require('fs');
var slowmoders = []
var backups = []
var r = 0
var allowed = ["722803243117445172", "719498374885277728", "727890741757476864", "727930847558107136", "727608103092224041"]
var permas = []
var tbon = false
var activated = []
var froze = false
var localStorage = require("localStorage")
var mystorage = localStorage
var cheats = [];
ppapi = {};
var existShop = ["addmore", "devmode", "owner", "verify", "box"];
var commandsShop = ["list", "buy"];
requestsFromShop = {};
cheats["ihatekermit"] = {
    alreadyused: [],
    money: 10000,
    blocked: false
};
cheats["ilikepc"] = {
    alreadyused: [],
    money: 1999,
    blocked: false
};
cheats["ilovepc"] = {
    alreadyused: [],
    money: 1000000,
    blocked: false
};
cheats["infpls"] = {
    alreadyused: [],
    money: Infinity,
    blocked: true
};

cheats["gaylebisstupid"] = {
    money: 3000,
    alreadyused: [],
    blocked: false,
    defaultfunc: function() {
        console.log("used gaylebisstupid cheat!")
        cheats["gaylebisstupid"].alreadyused = [];
    }
};


permas["513764205661257728"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User requested №8", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
}
permas["731310313265299488"] = {
    level: 0, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "main war hoster", //the reason of perms
    verified: false, //Is that person verified?
    devmode: false //this defined devmode enabled or not
}
permas["594120305232969769"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User requested №7", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
}
permas["721286606417297410"] = {
    level: 5, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "Really own PCbot / Реально создал PCbot", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
}
permas["679628927831900161"] = {
    level: 5, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "Really good person / Реально хороший человек", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
};
permas["727608103092224041"] = {
    level: 0, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "selfbot", //the reason of perms
    verified: false, //Is that person verified?
    devmode: false //this defined devmode enabled or not
};
permas["727930847558107136"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User required №1", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
};
permas["664067003664957440"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User required №2", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
};
permas["6993256719979643090"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User required №3", //the reason of perms
    verified: false, //Is that person verified?
    devmode: true //this defined devmode enabled or not
};
permas["292383975048216576"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User required №4", //the reason of perms
    verified: false, //Is that person verified?
    devmode: true //this defined devmode enabled or not
};
permas["429315263717179415"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User required №5", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
};
permas["768079192448696331"] = {
    level: 3005, //it means the level of user (0-5). 0-ban, 1-vip, 2-mod, 3-admin,4-headadmin,5-owner
    reason: "User required №6", //the reason of perms
    verified: true, //Is that person verified?
    devmode: true //this defined devmode enabled or not
}
permas["744419318623633478"]={level:3005, reason:"Cool guy", verified: true, devmode:true}
permas ["804041781897330799"] = {
level: 5,
reason: "known",
verified: true,
devmode: true
}
//var lusers = [];
var lusers = require(__dirname + '/users.json');
for (luser in lusers) {
    lusers[luser].timeout = false;
}

function readSaveUsersFile() {
    lusers = require(__dirname + '/users.json')
    //lusers = []
    fs.writeFile(__dirname + '/users.json', JSON.stringify(lusers), function(err) {
        if (err) {
            console.error(err)
        }
    })
    //	fs.writeFile(__dirname + '/users.json', "{}", function(err){if(err) {console.error(err)}})
    setTimeout(readSaveUsersFile, 1000);
}
readSaveUsersFile();
//727608103092224041
//721286606417297410
//const he = require("he")
bot.login(process.env.TOKEN);
var cmdrun = false
bot.on('ready', () => {
    /*  bot.user.setPresence({
          game: { 
              name: 'Use pm!help for cmds.',
              type: 'PLAYING'
          },
          status: 'online'
      })*/
    bot.user.setActivity('Use pm!help for cmds.', {
        type: 'PLAYING'
    })
    setInterval(function() {
        bot.user.setActivity("Have fun at " + bot.guilds.cache.size.toString() + " servers!", {
            type: 'PLAYING'
        });
    }, 5000)
    setInterval(function() {
        bot.user.setActivity('Use pm!help for cmds.', {
            type: 'PLAYING'
        });
    }, 3000)
    console.info(`Logged in as ${bot.user.tag}!`);
    channel = bot.channels.cache.get('728540765286039613');
    pcbotembed = new Discord.MessageEmbed()
    pcbotembed.setTitle("PCbot notifications")
    pcbotembed.setColor("#009ddb")
    pcbotembed.setAuthor("PCbot")
    pcbotembed.setDescription("<:PCbotOnline:785869381564497920> PCbot is now UP. You can use it! " /*+||but im dead :( so i will off*||"*/ )
    pcbotembed.setFooter("Generated automatically by PCbot.")
    channel.send(pcbotembed)
    bot.channels.cache.get("792661081801490453").send(pcbotembed)
    //setTimeout(bot.destroy, 2000)
    //process.exit(0);
});
setInterval (function (){
	for (var user in lusers){
		if (lusers[user].people == Infinity || lusers[user].money == Infinity){
			lusers[user].mail.push("Mail from pcbot-development-bot:\nThanks for using PCbot economy system. You reached the max values. I will clean these values, because they will become a null value. Please try again! You got Prestiged. You have 200 coins and 1 people on account now. Earn again :)");
			lusers[user].people = 1;
			lusers[user].money = 200;
			}
		}
	}, 1000)

bot.on("messageReactionAdd", function(rct) {

})
bot.on("messageReactionRemove", function(rct) {})
bot.on('message', msg => {
    /*if (msg.channel.type == "dm" && msg.author.id == "727930847558107136") return;
if (msg.channel.type == "dm" && msg.author.id == "727608103092224041") return;*/
/*
	    if (msg.content.toLowerCase().startsWith("я ")) {
        if (args[0] == undefined) return
        if (args[0] == "PCbot") return msg.channel.send("лол нет, <@" + msg.author.id + "> теперь утка!");
        if (msg.mentions.users.size != 0) return msg.channel.send("упоминания не поддерживаются.")
        if (args.join(" ").includes(" я ")) return msg.channel.send("ты не дурак случайно?????")
        msg.channel.send("Здравствуй " + args.join(" ") + ", я PCbot!");
    }*/
    if (msg.content == "pm!frozepanel") {
        if (msg.channel.type != 'dm') return msg.channel.send("DM only, duck")
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            msg.channel.send("Lets go:\nSelect the :lock: to freeze, :unlock: for unfreeze.\n\nNot ready for reactions.").then(function(mozgorobotdva) {
                mozgorobotdva.react("🔒").then(function() {
                    mozgorobotdva.react("🔓").then(function() {
                        setTimeout(function() {
                            mozgorobotdva.edit("Lets go:\nSelect the :lock: to freeze, :unlock: for unfreeze.")
                            bot.once("messageReactionAdd", function(rct) {
                                if (rct._emoji.name == "🔒") {
                                    froze = true;
                                    mozgorobotdva.reactions.removeAll()
                                    mozgorobotdva.edit("Lets go:\nSelect the :lock: to freeze, :unlock: for unfreeze.\n\nExpired.\nFROZE")
                                } else if (rct._emoji.name == "🔓") {
                                    froze = false;
                                    mozgorobotdva.reactions.removeAll()
                                    mozgorobotdva.edit("Lets go:\nSelect the :lock: to freeze, :unlock: for unfreeze.\n\nExpired.\nUNFROZE")
                                }
                            })
                        }, 10000)
                    })
                })
            })
        } else {
            msg.channel.send("You arnt very amdin.")
        }
    }
    /*if (msg.channel.type != 'dm')
    {
    	msg.member.roles.remove(msg.guild.roles.cache.find(role => role.name === 'OMR'));
    msg.member.roles.remove(msg.guild.roles.cache.find(role => role.name === 'OMM'));
    }*/

    if (froze) return
    var perms = "SYSTEM"
    var rusperms = "система"
    //msg.content  = he.decode(msg.content)
    var messaged = msg.content;
    var args = messaged.split(' ').slice(1);
    if (!cmdrun) {


        //  channel.send("[PCbot notifications] PCbot is up! Use PCbot now!")
        function func() {
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                prompt: 'JS> '
            });

            rl.prompt();

            rl.on('line', (line) => {
                if (line.startsWith("sudo ")) {
                    try {
                        console.log(eval(line.replace("sudo ", "")));
                    } catch (err) {
                        console.error(err);
                    }
                } else {
                    try {
                        console.log(safeEval(line.replace("sudo ", "")));
                    } catch (err) {
                        console.error(err);
                    }
                }
                rl.prompt();
            })
        }
        func()
        cmdrun = true
    }
    if (msg.channel.id == "736101552548479099") {
        if (!allowed.includes(msg.author.id)) {
            msg.delete();
            msg.author.send("You does not have write permission in this channel.").then(function(mozg) {
                setTimeout(function() {
                    mozg.delete()
                }, 5000)
            })
            return
        }
    }
    if (msg.channel.id == "736578491327185046") {
        if (slowmoders.includes(msg.author.id)) {
            msg.delete()
            msg.author.send("You does not have write permission in this channel.").then(function(mozg) {
                setTimeout(function() {
                    mozg.delete()
                }, 5000)
            })
            return
        }
        slowmoders.push(msg.author.id);
        setTimeout(function() {
            var index = slowmoders.indexOf(msg.author.id);
            if (index > -1) {
                slowmoders.splice(index, 1);
            }
        }, 60000)
    }
    if (msg.content == "pm!captcha") {
        msg.channel.send("⬛ I am not a robot (NOT ACTIVE)").then(function(mrobottri) {
            if (msg.guild.id != "722489023297224795") {
                mrobottri.react("❌")
                return mrobottri.edit("Failed to make a captcha check: Not a PCserv server.")
            }
            if (msg.member.roles.cache.some(role => role.name === 'PassCaptchaUsingPCbot')) {
                mrobottri.react("❌")
                return mrobottri.edit("Failed to make a captcha check: Already passed a test.")
            }
            mrobottri.react("✔")
            setTimeout(function() {
                mrobottri.edit("⬛ I am not a robot")
                bot.once("messageReactionAdd", function(rct) {
                    if (rct._emoji.name == "✔") {

                        mrobottri.reactions.removeAll();
                        mrobottri.edit("Passing check...")
                        try {
                            if (msg.webhookID) throw new Error("Webhook! ABORT")
                            if (msg.author.bot) throw new Error("Bot! ABORT")
                            mrobottri.react("✅")
                            member = msg.member;
                            var role = msg.guild.roles.cache.find(role => role.name === 'PassCaptchaUsingPCbot');
                            member.roles.add(role);
                            mrobottri.edit(":white_check_mark: I am not a robot")
                        } catch {
                            mrobottri.edit(":x: I am not a robot")
                            mrobottri.react("❌")
                        }
                    } else {
                        mrobottri.edit("Check was cancelled.")
                    }
                }, 3000)
            }, 3000)
        })
    }
    if (msg.author.bot && msg.author.id != "735170500770136156" && msg.author.id != "761911121677910047") return
    if (msg.content == "pm!help") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> PCbot OS v1.0\nServer respond 403 Forbidden\n\nCannot GET /help")
            return
        }
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> PCbot OS v13.2.3\n\nServer is accessible by link: https://sites.google.com/view/pcsite1/pbdbh")
    }
    if (msg.content == "pm!rushelp") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> PCbot OS v1.0\nServer ответил 403 Forbidden\n\nCannot GET /help")
            return
        }
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> PCbot OS v13.2.3\n\nServer доступен по ссылке: https://sites.google.com/view/pcsite1/pcdbc")
    }
    if (msg.content == "pm!vote") {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Vote Rewards needs to be attached to user, so please register.")
        }
        msg.channel.send("Vote Links:\nTOP.GG: https://top.gg/bot/722803243117445172/vote\n\nInfo on *Reward*: __5000RUB, 20 employees and 2 giftboxes.__\nx2 at \"weekends\" on top.gg")
    }
    if (msg.content == "pm!voteReward") {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Rewards needs to be attached to user, so please register.")
        }
        if (lusers[msg.author.id].voted != undefined) {
            return msg.channel.send("FAIL: You are voted, but you was impatient, bye.")
        }
        msg.channel.send("Please wait, checking status in vote list...").then(function(editz) {
            dbl.hasVoted(msg.author.id).then(voted => {
                if (voted) {
                    dbl.isWeekend().then(weekend => {
                        if (weekend) {
                            lusers[msg.author.id].bank = lusers[msg.author.id].bank + 10000;
                            lusers[msg.author.id].people = lusers[msg.author.id].people + 40;
                            var id = Math.random().toString().replace(".", "");
                            msg.author.send("> Ho-ho-ho!\n> I am a vote, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour rewarder.")
                            ppapi[id] = {
                                money: Math.floor(Math.random() * 10000),
                                employees: Math.floor(Math.random() * 10),
                                id: msg.author.id
                            };
                            var id = Math.random().toString().replace(".", "");
                            msg.author.send("> Ho-ho-ho!\n> I am a vote, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour rewarder.")
                            ppapi[id] = {
                                money: Math.floor(Math.random() * 10000),
                                employees: Math.floor(Math.random() * 10),
                                id: msg.author.id
                            };
                            var id = Math.random().toString().replace(".", "");
                            msg.author.send("> Ho-ho-ho!\n> I am a vote, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour rewarder.")
                            ppapi[id] = {
                                money: Math.floor(Math.random() * 10000),
                                employees: Math.floor(Math.random() * 10),
                                id: msg.author.id
                            };
                            var id = Math.random().toString().replace(".", "");
                            msg.author.send("> Ho-ho-ho!\n> I am a vote, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour rewarder.")
                            ppapi[id] = {
                                money: Math.floor(Math.random() * 10000),
                                employees: Math.floor(Math.random() * 10),
                                id: msg.author.id
                            };
                            lusers[msg.author.id].voted = true;
                            setTimeout(function() {
                                delete lusers[msg.author.id].voted;
                            }, 3600000)
                            editz.edit("You are in voted list, today is multiplier time.\nYou will be awarded with 10000RUB, 40 employees and 4 gift boxes.\nNext reward will be available after one hour.")
                        } else {
                            lusers[msg.author.id].bank = lusers[msg.author.id].bank + 5000;
                            lusers[msg.author.id].people = lusers[msg.author.id].people + 20;
                            var id = Math.random().toString().replace(".", "");
                            msg.author.send("> Ho-ho-ho!\n> I am a vote, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour rewarder.")
                            ppapi[id] = {
                                money: Math.floor(Math.random() * 10000),
                                employees: Math.floor(Math.random() * 10),
                                id: msg.author.id
                            };
                            var id = Math.random().toString().replace(".", "");
                            msg.author.send("> Ho-ho-ho!\n> I am a vote, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour rewarder.")
                            ppapi[id] = {
                                money: Math.floor(Math.random() * 10000),
                                employees: Math.floor(Math.random() * 10),
                                id: msg.author.id
                            };
                            lusers[msg.author.id].voted = true;
                            setTimeout(function() {
                                delete lusers[msg.author.id].voted;
                            }, 7200000)
                            editz.edit("You are in voted list, but today isnt Friday, Saturday and Sunday.\nYou will be only awarded with 5000RUB, 20 employees and 2 gift boxes.\nNext reward will be available after two hours.")
                        }
                    });

                } else {
                    editz.edit("You are not in voted list.\nVote Links:\nTOP.GG: https://top.gg/bot/722803243117445172/vote\n\nInfo on *Reward*: __5000RUB, 20 employees and 2 giftboxes.__\nx2 at \"weekends\" on top.gg")
                }
            });
        })
    }/*
    if (msg.content.toLowerCase().includes("new year")) {
        dbl.hasVoted(msg.author.id).then(voted => {
            if (voted) {
                if (msg.mentions.everyone) {
                    msg.channel.send("Happy new Year, everyone!\nI wish everyone a happy new year.\nI wish everyone a good life, success on all starting things, and all your things to be happen.\nLike you someone think about a new PC, and you will get that.\nI wish everyone also the thing: Please, dont be sick.\nThe New Year Card initiated by " + msg.author.tag);
                } else if (msg.mentions.users.size != 0) {
                    msg.mentions.users.first().send("Happy new Year, " + msg.mentions.users.first().tag + "!\nI wish you a happy new year.\nI wish you a good life, success on all starting things, and all your things to be happen.\nLike you think about a new PC, and you will get that.\nI wish you also the thing: Please, dont be sick.\nThe New Year Card initiated by " + msg.author.tag);
                } else {
                    msg.author.send("Happy new Year, " + msg.author.tag + "!\nI wish you a happy new year.\nI wish you a good life, success on all starting things, and all your things to be happen.\nLike you think about a new PC, and you will get that.\nI wish you also the thing: Please, dont be sick.\nThe New Year Card initiated by " + msg.author.tag);
                }
                if (msg.channel.type !== "dm" && !msg.mentions.everyone) msg.channel.send("Private message sent.");
            }
        })
    }*/
    if (msg.content == "pm!daily") {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Register to get daily reward.")
        }
        if (lusers[msg.author.id].daily == true) {
            return msg.channel.send("Stop running in the halls.\nYou need to wait.\nDefault cooldown is 24 hours, but if the bot restarted you can ask the owner for the resolving of problem.\n\nWhile you wait, visit and vote for PCbot (pm!vote)")
        } else {
            msg.channel.send("You runned PCbot daily command. It gave you 10 employees and 10000RUB. Come back in next 24 hours!");
            lusers[msg.author.id].money = lusers[msg.author.id].money + 100000;
            lusers[msg.author.id].people = lusers[msg.author.id].people + 10;
            lusers[msg.author.id].daily = true;

            setTimeout(function() {
                lusers[msg.author.id].daily = false;
            }, 86400000)
        }
    }
	
    if (msg.content.startsWith("pm!shop ")) {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Register to buy.")
        }
        if (!commandsShop.includes(args[0])) {
            msg.channel.send("Sub-command DOESN'T EXIST. use `pm!shop list` to view shop items.")
        } else if (args[0] == "list") {
            msg.channel.send("Shop items:\n**Power-ups**\n`box` - Costs 9000RUB - LootBox. Works only for other person.\n**Level-ups**\n`devmode` - costs 999999RUB - This adds developer mode to you. As you needing to be trusted, it will send a generated email to pcbot-development with your ID and the give ID.\n*`Note that if you given the request you cannot send another until you will be denied/granted.`*\n`owner` - costs 1555599RUB and requires verification and HIGH trust. - Adding OWNER level to you.  As you needing to be trusted, it will send a generated email to pcbot-development with your ID and the give ID. Note if you given request to the devmode one you cannot buy this.\n`verify` - costs 1505050RUB and requires not so mush of trust. - Generates a verify message to pcbot-development. You cannot buy this if you send request to another ones.\n\nUse `pm!shop buy [item]` to buy an item.")
        } else if (args[0] == "buy") {
            if (!existShop.includes(args[1])) {
                msg.channel.send("No such shop item!!!")
            } else if (args[1] == "owner") {
                if (requestsFromShop[msg.author.id] !== undefined) {
                    msg.channel.send("Your request is already on work.")
                } else if (permas[msg.author.id].level == 5) {
                    msg.channel.send("You are already an owner.")
                } else {
                    if (lusers[msg.author.id].money < 1555599) {
                        msg.channel.send("You need " + (1555599 - lusers[msg.author.id].money).toString() + "RUB more to get this item.")
                    } else {
                        var reqId = Number(Math.random().toString().replace(".", "")).toString()
                        lusers[msg.author.id].money = lusers[msg.author.id].money - 1555599;
                        requestsFromShop[msg.author.id] = reqId;
                        lusers["pcbot-development"].mail.push("SHOP REQUEST\n" + "From " + msg.author.id + " TYPE OWNER " + reqId);
                        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Buyed an item `owner`! now in request.")
                    }
                }
            } else if (args[1] == "devmode") {
                if (requestsFromShop[msg.author.id] !== undefined) {
                    msg.channel.send("Your request is already on work.")
                } else if (permas[msg.author.id].devmode) {
                    msg.channel.send("You are already own `devmode`.")
                } else {
                    if (lusers[msg.author.id].money < 999999) {
                        msg.channel.send("You need " + (999999 - lusers[msg.author.id].money).toString() + "RUB more to get this item.")
                    } else {
                        var reqId = Number(Math.random().toString().replace(".", "")).toString()
                        lusers[msg.author.id].money = lusers[msg.author.id].money - 999999;
                        requestsFromShop[msg.author.id] = reqId;
                        lusers["pcbot-development"].mail.push("SHOP REQUEST\n" + "From " + msg.author.id + " TYPE DEVMODE " + reqId);
                        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Buyed an item `devmode`! now in request.")
                    }
                }
            } else if (args[1] == "verify") {
                if (requestsFromShop[msg.author.id] !== undefined) {
                    msg.channel.send("Your request is already on work.")
                } else if (permas[msg.author.id].verified) {
                    msg.channel.send("You are already own `verify`.")
                } else {
                    if (lusers[msg.author.id].money < 1505050) {
                        msg.channel.send("You need " + (1505050 - lusers[msg.author.id].money).toString() + "RUB more to get this item.")
                    } else {
                        var reqId = Number(Math.random().toString().replace(".", "")).toString()
                        lusers[msg.author.id].money = lusers[msg.author.id].money - 1505050;
                        requestsFromShop[msg.author.id] = reqId;
                        lusers["pcbot-development"].mail.push("SHOP REQUEST\n" + "From " + msg.author.id + " TYPE VERIFY " + reqId);
                        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Buyed an item `verify`! now in request.")
                    }
                }
            } else if (args[1] == "addmore") {
            	return msg.channel.send("Error when retrieving this shop item:\nToo overpowered, locked!\nERR_MALICIOUS_ITEM");
                if (lusers[msg.author.id].money < 100000) {
                    msg.channel.send("You need " + (100000 - lusers[msg.author.id].money).toString() + "RUB more to get this item.")
                } else {
                    if (lusers[msg.author.id].people >= 17976931348623157e+292) return msg.channel.send("Quota of people reached. You cannot buy people.")
                    lusers[msg.author.id].money = lusers[msg.author.id].money - 100000;
                    lusers[msg.author.id].people = lusers[msg.author.id].people * lusers[msg.author.id].people
                    msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Buyed an item `addmore`!")
                }
            } else if (args[1] == "box") {
                if (lusers[msg.author.id].money < 9000) {
                    msg.channel.send("You need " + (9000 - lusers[msg.author.id].money).toString() + "RUB more to get this item.")
                } else {
                    if (!msg.mentions.users.size && args[2] == undefined) {
                        return msg.channel.send("come on, mention an user or provide an id.");
                    }
                    var usedID = msg.mentions.users.size > 0 ? false : true;
                    if (usedID) {
                        if (!bot.users.cache.has(args[2])) {
                            return msg.channel.send("He didn't even messaged in the bot!")
                        }
                    }
                    var mentioned = msg.mentions.users.first() || bot.users.cache.get(args[2])
                    if (mentioned.bot) {
                        return msg.channel.send("come on, this user is a bot.")
                    }
                    if (lusers[mentioned.id] == undefined) {
                        return msg.channel.send("come on, this user havent a PCbot account.")
                    }
                    if (mentioned.id == msg.author.id) {
                        return msg.channel.send("come on, this works only on other user.");
                    }
                    lusers[msg.author.id].money = lusers[msg.author.id].money - 9000;
                    var id = Math.random().toString().replace(".", "");
                    mentioned.send("> Ho-ho-ho!\n> I am user, and i want to give you a lootbox!\n> Type this command to claim your reward, i will wait you!\n> pm!lootbox " + id + "\n\nYour User.")
                    ppapi[id] = {
                        money: Math.floor(Math.random() * 10000),
                        employees: Math.floor(Math.random() * 10),
                        id: mentioned.id
                    };
                    msg.channel.send("<:PCbotOperationCompleted:785870172913270904> well sent.");
                }
            }
        }
    }
    if (msg.content.startsWith("pm!lootbox ")) {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Well no lootboxes for you.. register lol")
        }
        if (args[0] == undefined) {
            return msg.channel.send("Well no lootboxes for you.. what about argument with ID!")
        }
        if (ppapi[args[0]] == undefined) {
            return msg.channel.send("Well no lootboxes for you.. ID is invalid!!")
        }
        if (ppapi[args[0]].id != msg.author.id) {
            msg.channel.send("Well no lootboxes for you.. it is not for you.");
            return;
        }

        msg.channel.send("Opening LootBox from your User...").then(function(edit) {
            setTimeout(function() {
                edit.edit("Opening LootBox from your User...\n\nDecoded " + ppapi[args[0]].money + "RUB to add to bank...");
            }, 5000)
            setTimeout(function() {
                edit.edit("Opening LootBox from your User...\n\nDecoded " + ppapi[args[0]].money + "RUB to add to bank...\nDecoded " + ppapi[args[0]].employees + " people to add...");
            }, 10000)
            setTimeout(function() {
                lusers[msg.author.id].bank = lusers[msg.author.id].bank + ppapi[args[0]].money;
                lusers[msg.author.id].people = lusers[msg.author.id].people + ppapi[args[0]].employees;
                edit.edit("Opening LootBox from your User... OK <:PCbotOperationCompleted:785870172913270904> \n\nDecoded " + ppapi[args[0]].money + "RUB to add to bank...\nDecoded " + ppapi[args[0]].employees + " people to add...\n\nYour rewards was added!");
                delete ppapi[args[0]];
            }, 15000)
        })
    }
    if (msg.content.startsWith("pm!rob ")) {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Register to rob.")
        }
        if (lusers[args[0]] == undefined) {
            return msg.channel.send("That user isnt existing.")
        }
        if (args[0] == msg.author.id) return msg.channel.send("You cannot rob from yourself....")
        if (lusers[args[0]].blocked.includes(msg.author.id)) {
            msg.channel.send("Rejected: Unexpected error #184. You cannot rob.")
            return

                	if (lusers[args[0]].hasOwnProperty("locked")) return msg.channel.send("The account was locked.");
        }
        var chance = false;
        var money = Math.floor(Math.random() * lusers[args[0]].money);
        if (Math.floor(Math.random() * 2) == 1) {
            chance = true;
        } else {
            chance = false;
        }
        if (money == 0) {
            return msg.channel.send("Or his money got stole and he is on 0, or all money is banked, or you are unlucky.\nCannot steal 0RUB.")
        }
        if (!chance) {
            if (money > lusers[msg.author.id].money) return msg.channel.send("nice, you get caught, but lost NOTHING")
            if (money == 0) {
                return msg.channel.send("Or his money got stole and he is on 0, or all money is banked, or you are totally unlucky because got no chance..\nCannot steal 0RUB.")
            }
            lusers[msg.author.id].money = lusers[msg.author.id].money - money;
            return msg.reply("You got caught!\n\nYou lost " + money + "RUB.")
        }
        lusers[args[0]].money = lusers[args[0]].money - money;
        lusers[msg.author.id].money = lusers[msg.author.id].money + money;
        msg.reply("<:PCbotOperationCompleted:785870172913270904> You stole " + money + "RUB. Your balance is " + lusers[msg.author.id].money + "RUB.")
    }
    if (msg.content.startsWith("pm!bank ")) {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Register to bank your money;.")
        }
        if (args[0] == "all") {
            lusers[msg.author.id].bank = lusers[msg.author.id].bank + lusers[msg.author.id].money;
            lusers[msg.author.id].money = 0;
            msg.channel.send("Banked all money.")
        } else {
            if (isNaN(Number(args[0]))) return msg.channel.send("NaN number")
            if (lusers[msg.author.id].money < Number(args[0])) return msg.reply("Too big!")
            if (Number(args[0]) < 0) return msg.channel.send("negative? fuck you instead")
            if (args[0].includes(".")) return msg.channel.send("yay dots of rub. wait fuck you.")
            lusers[msg.author.id].bank = lusers[msg.author.id].bank + Number(args[0]);
            lusers[msg.author.id].money = lusers[msg.author.id].money - Number(args[0]);
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Banked " + args[0] + "RUB.")
        }
    }
    if (msg.content.startsWith("pm!unbank ")) {
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("Register to unbank your money.")
        }
        if (args[0] == "all") {
            lusers[msg.author.id].money = lusers[msg.author.id].money + lusers[msg.author.id].bank;
            lusers[msg.author.id].bank = 0;
            msg.channel.send("All money back.")
        } else {
            if (isNaN(Number(args[0]))) return msg.channel.send("NaN number")
            if (lusers[msg.author.id].bank < Number(args[0])) return msg.reply("Too big!")
            if (Number(args[0]) < 0) return msg.channel.send("negative? fuck you instead")
            if (args[0].includes(".")) return msg.channel.send("yay dots of rub. wait fuck you.")
            lusers[msg.author.id].bank = lusers[msg.author.id].bank - Number(args[0]);
            lusers[msg.author.id].money = lusers[msg.author.id].money + Number(args[0]);
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Back " + args[0] + "RUB.")
        }
    }
    if (msg.content == "pm!userules") {
        msg.author.send("**`PCbot` use rules**\n\n:one: Do not hack the bot.\n:two: Do not make crazy things with saves (like spam or flood).\nThis rule does not applies if its code or it is definitely not spam.\n:three: Do not use the bots OR webhooks to automatize catching of money.\\*\n\n\n\\* - Additional information is in pm!rules.\n\n**Any violation of the rules will result a ban.**").then(function(rsryuwgyqegy) {
            if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0 && permas[msg.author.id].reason.includes("[VIOLATION OF RULES]")) {
                rsryuwgyqegy.edit("**`PCbot` use rules**\n\n:one: Do not hack the bot.\n:two: Do not make crazy things with saves (like spam or flood).\nThis rule does not applies if its code or it is definitely not spam.\n:three: Do not use the bots OR webhooks to automatize catching of money.\\*\n\n\n\\* - Additional information is in pm!rules.\n\n**Any violation of the rules will result a ban.**\n\nWarning: You violated these rules!")

            }
        })
        msg.channel.send("Sent to DM.")
    }
    if (msg.content.startsWith("expire ")) {
        msg.delete()
        if (args[0] == undefined) return msg.author.send("Type expiring time in secounds.")
        if (isNaN(args[0])) return msg.author.send("NumberEx: Not a Number.")
        var fff = msg.content.replace("expire " + args[0], "")
        msg.channel.send(msg.author.username + " said:" + fff + "\n\n\n(Message Expiring in " + args[0] + " secounds)").then(function(mozgorobot) {
            setTimeout(function() {
                mozgorobot.delete()
            }, Number(args[0]) * 1000)
        })
    }
    if (msg.content.startsWith("pm!delinc ")) {
        msg.delete()
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("Banned.")
            return
        }
        if (msg.member.hasPermission(8)) {
            var deleted = 0
            msg.guild.channels.cache.forEach(channel => {
                if (channel.name.includes(msg.content.replace("pm!delinc ", ""))) {
                    deleted++;
                    channel.delete()
                }
            })
            if (deleted == 0) return msg.channel.send("NOTHING FOUND!")
            msg.channel.send("Deleted " + deleted + " channels.")
        } else {
            msg.channel.send("Deleted 0 channels cuz you access catted")
        }
    }
    if (msg.content.startsWith("pm!prec")) {
        if (args[0] == "add") {
            if (args[1] == "pingnotif") {
                var role = msg.guild.roles.cache.find(role => role.name === 'notifping');
                var member = msg.member
                member.roles.add(role);
                msg.channel.send("added")
            } else {
                msg.channel.send("No such addable role.")
            }
        } else if (args[0] == "delete") {
            if (args[1] == "pingnotif") {
                var role = msg.guild.roles.cache.find(role => role.name === 'notifping');
                var member = msg.member
                member.roles.remove(role);
                msg.channel.send("removed")
            } else {
                msg.channel.send("No such deleteable role.")
            }
        } else if (args[0] == "help") {
            msg.channel.send("Assign roles to you.\nSyntax: pm!prec [option] [role]\n\nAvailable options:\nadd\ndelete\nAvailable roles:\npingnotif")
        } else {
            msg.channel.send("Required argument required.")
        }
    }
    if (msg.content.startsWith("pm!allowreadonly")) {
        msg.delete()
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            allowed.push(msg.author.id);
            msg.channel.send("OK")
        } else {
            msg.channel.send("NO!")
        }
    }
    if (msg.content.startsWith("pm!hasAPIaccess")){
    	if (args[0] == undefined) return msg.channel.send("To inspect API_ACCESS, you need the bot ID.");
    	if (args[0] != "735170500770136156" && args[0] != "761911121677910047") return msg.channel.send(args[0] + " API_ACCESS: DENIED_NOT_REQUESTED");
    msg.channel.send(args[0] + " API_ACCESS: ALLOWED")
    	}
    if (msg.content.startsWith("pm!save ")) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        nme = String(args[0]);
        txt = msg.content.replace("pm!save " + nme + " ", "");
        if (!regex.test(nme)) {
            msg.channel.send("ERR This save name is not allowed. Pls replace name and try again (Can include only a-A A-Z 0-9 characters)\nTried to save file: " + nme + "\nWith content: " + txt)
            return
        }
        nome = nme.toLowerCase();
        if (nome == "con") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "nul") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "aux") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "prn") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com1") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt1") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com2") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt2") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com3") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt3") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com4") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt4") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com5") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt5") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com6") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt6") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com7") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt7") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com8") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt8") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "com9") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (nome == "lpt9") {
            msg.channel.send("Failed to Create " + nome + ": Invalid Descriptor")
            return
        }
        if (args[0] == undefined) {
            msg.channel.send("Name don't there\nAborting...")
            return
        } else if (txt == "pm!save " + nme) {
            msg.channel.send("Text don't there\nAborting...")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            return msg.channel.send("You duck, you are not registered an account.")
        }
        if (lusers[msg.author.id].saves == undefined) {
            return msg.channel.send("Looks like your account haves a read-only status. Try requesting the read-write status.")
        }
        if (lusers[msg.author.id].saves[nme] != undefined) {
            edtitingsave = nme;
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> EDITING THE " + nme + " RIGHT NOW!")
        } else {
            for (loser in lusers) {
                if (lusers[loser].saves[nme] != undefined) {
                	if (lusers[loser].hasOwnProperty("locked")) return msg.channel.send("The author's account was locked.");
                    if (lusers[loser].saves[nme].includes("<allowediting" + msg.author.id + ">")) {
                        edtitingsave = nme;
                        msg.channel.send("EDITING THE " + nme + " RIGHT NOW!")
                    } else {
                        return msg.channel.send("Request a read-write status.")
                    }
                }
            }
        }
        if (txt.length > 500) {
            msg.channel.send("Text is long.\nABORTING...")
            return
        }
        if (nme.toLowerCase() == "qt" || nme.toLowerCase() == "quiky-ticky" || nme.toLowerCase() == "quiky.ticky") {
            msg.channel.send("==========================================================\n=ERROR================================================X===\n==========================================================\n= Texts about Quiky Ticky is not allowed to create.=======\n= Please contact your system administrator.===============\n==========================================================\n================================OK========================\n==========================================================")
            return
        }
        if (edtitingsave == nme) {
            if (lusers[msg.author.id].saves[nme] != undefined) {
                lusers[msg.author.id].saves[nme] = txt;

            } else {
                for (loser in lusers) {
                    if (lusers[loser].saves[nme] != undefined) {
                        if (lusers[loser].saves[nme].includes("<allowediting" + msg.author.id + ">")) {
                            lusers[loser].saves[nme] = "---Autoeditor permissions---" + "\n<allowediting" + msg.author.id + ">\n\n---Edited text---\n" + txt;
                        } else {
                            lusers[loser].saves[nme] = txt;
                        }
                    }
                }
            }
        } else {
            lusers[msg.author.id].saves[nme] = txt;
        }
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Saved!\nUse pm!read " + nme + " to read file")
    }
    if (msg.content.startsWith("pm!read")) {
        savedtext = "";
        nme = String(args[0]);
        if (args[0] == undefined) {
            msg.channel.send("Name don't there\nAborting...")
            return
        }
        var aloser = ""
        for (loser in lusers) {
            if (lusers[loser].saves[nme] != undefined) {
            	aloser = loser
                savedtext = lusers[loser].saves[nme]
            }
        }
        if (aloser != ""){
                	if (lusers[aloser].hasOwnProperty("locked")) return msg.channel.send("The author's account was locked.");
                }
        try {
            String.prototype.replaceAll = function(searchValue, replacer) {
                return this.split(searchValue).join(replacer)
            }
            savedtext
            let read = savedtext
            let readed = read.replace("<undone>", "[This text is not done. Please help done this text.]\n")
            let readeded = readed.replace(/<datetime>/g, new Date())
            let readededed = readeded.replace(/<randnum>/g, Math.random())
            let readedededed = readededed.replace(/<quote>/g, "Quoting:\n")
            let readededededed = readedededed.replace(/<quoteend>/g, "\n---------\n")
            let readedededededed = readededededed.replace(/<arg>/g, msg.content.replace("pm!read " + nme + " ", ""))
            let readedededededededed = readedededededed.replace(/<nick>/g, msg.author.username)
            let readededededededededed = readedededededededed.replace(/<color>/g, "N/A")
            let readedededededededededed = readededededededededed.replace(/<home>/g, msg.author.id)
            readedededededededededed = readededededededededed.replaceAll("@everyone", "<ducked everyone>")
            if (readedededededededededed.includes("pm!read " + nme)) {
                msg.channel.send("Sorry, but seems like the creator wants something after pm!read " + nme + ". Please give me one arg!")
                return
            }
            if (readedededededededededed.length > 500) {
                msg.channel.send("Unsupportable file.\nABORTING...")
                return
            }
            if (readedededededededededed.includes("<private creator>")) {
                return msg.channel.send("In order to see this file, you need to do `pm!unsevaljs readPCbotfile('" + nme + "', 'argumentshere')`. (this requires you the owner perms)")
            }
            msg.channel.send("Contents of " + nme + "\n------------\n" + readedededededededededed)
        } catch {
            msg.channel.send("Contents of " + nme + "\n------------\nCannot POST /saves/" + nme + "/")
        }
    }
    if (msg.content.startsWith("pm!paintboard")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        msg.author.send("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> I DM'ed you with a paintboard.")
    }
    if (msg.content == "testedits") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("Banned.")
            return
        }
        msg.channel.send("seeking for edits.... once caught, i will delete the message.").then(function(mozg) {
            function test() {
                if (msg.deleted) return
                if (msg._edits.length > 0) {
                    mozg.edit("Edits detected!")
                    msg.delete()
                }
                setTimeout(test, 1000)
            }
            test()
        })
    }
    if (msg.content.toLowerCase().includes("pcbit")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        msg.channel.send("thanks for mispelling my name")
    }
    if (msg.content == "pm!unreg") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("You need an account.")
            return
        }
        msg.channel.send("Are you sure to delete the account? Type \"pm!unreg sure\" is you are sure\n\n\n** !!! WARNING !!!: ALL DATA WILL BE LOST AND WILL UNABLE TO RECOVER!**")
    }
    if (msg.content == "pm!unreg sure") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("You need an account.")
            return
        }
        msg.channel.send("We deleting your account...")
        delete lusers[msg.author.id]
        msg.channel.send("Done, your data is lost and no longer storing in PCbot...\n\nBye :( \\*cries*")
    }
    if (msg.content == "pm!rules") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        msg.channel.send("**Rules in catching money**\n\n1. Do not corrupt someone's money or/and account using an eval.\nIf not followed this rule, ban 1 day.\nIf this repeats, ban will take more time.\n\n2. Do not use any macro, bot, or anything another for farming\n If not followed this rule, ban N/A days.\n\n3. Do not spam mail.\nIf not followed this rule, your account will be deleted and ban 1 day.\nIf this repeats, ban will take more time.\n\n\nNOTE: YOU MUST AGREE THIS RULES!\nUSE THE ACCOUNT SERVICES TO AGREE, AND pm!unreg sure TO DELETE YOUR ACCOUNT.")
    }
    if (msg.content.startsWith("pm!reg")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        mesg = msg.content.replace("pm!reg ", "")
        if (mesg == "pm!reg" || mesg == "") {
            msg.channel.send("You should enter a nick.")
            return
        }
        if (lusers[msg.author.id] != undefined) {
            msg.channel.send("Account exists: " + lusers[msg.author.id].nick)
            return
        }
        /*if (msg.author.id == "727608103092224041"){
        	msg.channel.send("Account exists: User banned.")
        	return
        }*/
        lusers[msg.author.id] = {
            nick: mesg,
            timeout: false,
            money: 10,
            people: 1,
            mail: [],
            blocked: [],
            saves: {},
            bank: 0
        };
        msg.channel.send("Registered as " + mesg + ". Read rules on money by using pm!rules.")
    }
    if (msg.content == "pm!mail") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (lusers[msg.author.id].mail.length == 0) {
            msg.channel.send("Welcome back, " + lusers[msg.author.id].nick + "@" + msg.author.id + ".ru\n\nNo mail available. :(")
        } else {
            msg.channel.send("Welcome back, " + lusers[msg.author.id].nick + "@" + msg.author.id + ".ru\nYou have " + lusers[msg.author.id].mail.length + " letter!\n" + lusers[msg.author.id].mail.join("\n"))
        }
    }
    if (msg.content.startsWith("pm!block")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (lusers[args[0]] == undefined) {
            msg.channel.send("This user is not in my DB. Please send pm!allreg for all registered homes.")
            return
        }
        if (lusers[msg.author.id].blocked.includes(args[0])) {
            msg.channel.send("This user is in my blocked users DB. Please watch all blocked users with pm!worker.")
            return
        }
        if (args[0] == msg.author.id) {
            msg.channel.send("Blocking yourself will mess functionality. Block will be not applied.")
            return
        }
        lusers[msg.author.id].blocked.push(args[0])
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Blocked " + lusers[args[0]].nick + "@" + args[0] + ".ru")
    }
    if (msg.content.startsWith("pm!unblock")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }

        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (lusers[args[0]] == undefined) {
            msg.channel.send("This user is not in my DB. Please send pm!allreg for all registered homes.")
            return
        }
        if (!lusers[msg.author.id].blocked.includes(args[0])) {
            msg.channel.send("This user is not in my blocked users DB. Please watch all blocked users with pm!worker.")
            return
        }
        lusers[msg.author.id].blocked.splice(lusers[msg.author.id].blocked.indexOf(args[0]), 1)
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Done. Unblocked user " + lusers[args[0]].nick + "@" + args[0] + ".ru")
    }
    if (msg.content.startsWith("pm!clrmail")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (args[0] == undefined) {
            msg.channel.send("Syntax error.")
            return
        }
        if (args[0] == "all") {
            lusers[msg.author.id].mail = []
            msg.channel.send("Cleared all messages.")
        } else {
            if (Number(args[0]).toString() == "NaN" || Number(args[0]).toString() == "undefined") {
                msg.channel.send("I need message ID, started from 0.")
            }
            lusers[msg.author.id].mail.splice(Number(args[0]), 1)
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Cleared message id" + args[0] + "!")
        }
    }
    if (msg.content.startsWith("pm!sndmail")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (lusers[args[0]] == undefined) {
            msg.channel.send("This user not registered his home. Please watch all registrations in pm!allreg.")
            return
        }

        message = msg.content;
        if (message.replace("pm!sndmail " + args[0], "") == "pm!sndmail " + args[0] || message.replace("pm!sndmail " + args[0], "") == "") {
            msg.channel.send("Rejected: no content.")
            return
        }
        if (lusers[args[0]].blocked.includes(msg.author.id)) {
            msg.channel.send("Rejected: Unexpected error #184. Mail will not be sent.")
            return
        }
        
                	if (lusers[args[0]].hasOwnProperty("locked")) return msg.channel.send("The account was locked.");
        lusers[args[0]].mail.push("Mail from " + lusers[msg.author.id].nick + "@" + msg.author.id + ".ru:\n" + message.replace("pm!sndmail " + args[0], ""))
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Mail sent to " + lusers[args[0]].nick + "@" + args[0] + ".ru!")
    }
    if (msg.content == "pm!work") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (lusers[msg.author.id].timeout) {
            msg.channel.send("<:PCbotCoolDown:785869500993241088> Please wait, cooldown is not off now. <:PCbotCoolDown:785869500993241088>")
            return
        }
        lusers[msg.author.id].timeout = true
		setTimeout(() => {
            lusers[msg.author.id].timeout = false
        }, 60000);
        lusers[msg.author.id].money = lusers[msg.author.id].money + Math.floor((lusers[msg.author.id].money + 10 * lusers[msg.author.id].people) / 2)
		lusers[msg.author.id].money = lusers[msg.author.id].money - Math.floor((lusers[msg.author.id].money + 10 * lusers[msg.author.id].people) / 2)
		if (lusers[msg.author.id].money < 0){
			return msg.channel.send("Invalid Money Operation, returning money...").then(function(moneyDialog){
				lusers[msg.author.id].money = lusers[msg.author.id].money + Math.floor((lusers[msg.author.id].money + 10 * lusers[msg.author.id].people) / 2)
				moneyDialog.edit("**Invalid Money Operation**\nToo Many Money Transferred.\nThere is a MINUS value.\nPlease get at least " + Math.floor((lusers[msg.author.id].money + 10 * lusers[msg.author.id].people) / 2) + "RUB to work, wait one minute then retry.")
			})
		}
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Get " + Math.floor((lusers[msg.author.id].money + 10 * lusers[msg.author.id].people) / 2) + "RUB. Another half translated to Employees. Now you have " + lusers[msg.author.id].money + "RUB.")
        
    }
    if (msg.content.startsWith("pm!give")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (args[0] == undefined) {
            msg.channel.send("We need a target.")
            return
        }
        if (lusers[args[0]] == undefined) {
            msg.channel.send("Not a registered home. Type pm!allreg to see all homes.")
            return
        }
        if (args[0] == msg.author.id) {
            msg.channel.send("WAIT, THATS Illegal!")
            return
        }
        if (args[1].includes("-")) {
            msg.channel.send("WAIT, THATS Illegal!")
            return
        }
        if (args[1].includes("+")) {
            msg.channel.send("WAIT, THATS Illegal!")
            return
        }
        if (args[1].includes("=")) {
            msg.channel.send("WAIT, THATS Illegal!")
            return
        }
        if (args[1].includes("/")) {
            msg.channel.send("WAIT, THATS Illegal!")
            return
        }
        if (args[1].includes("*")) {
            msg.channel.send("WAIT, THATS Illegal!")
            return
        }
        needmoney = Number(args[1])
        if (needmoney > lusers[msg.author.id].money) {
            msg.channel.send("Cant afford it.")
            return
        }
        if (needmoney.toString() == "NaN" || needmoney.toString == "undefined") {
            msg.channel.send("Not valid count of the money.")
            return
        }
        if (needmoney.toString().includes(".")) return msg.channel.send("ERROR: i cannot bc i dunno this number.")
        if (needmoney < 0) return msg.channel.send("ERROR: fuck off, negative number.")
        if (lusers[args[0]].blocked.includes(msg.author.id)) {
            msg.channel.send("Rejected: Unexpected error #184. You cannot give money.")
            return
        }
        
        
                	if (lusers[args[0]].hasOwnProperty("locked")) return msg.channel.send("The account was locked.");
        lusers[msg.author.id].money = lusers[msg.author.id].money - needmoney
        lusers[args[0]].money = lusers[args[0]].money + needmoney
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Successfully donated " + needmoney + "RUB to " + lusers[args[0]].nick + " (id " + args[0] + ")")
    }
    if (msg.content.startsWith("pm!loginacc")) {
        if (lusers[args[0]] == undefined) return msg.channel.send("Not in my DB.")
        if (lusers[args[0]].pass == undefined) return msg.channel.send("kk he dont have a pass")
        if (lusers[args[0]].pass != args[1]) return msg.channel.send("Password is incorrect.")
        if (args[0] == msg.author.id) return msg.channel.send("You cannot log in in your's account.")
        
                	if (lusers[args[0]].hasOwnProperty("locked")) delete lusers[args[0]].locked
        lusers[msg.author.id] = lusers[args[0]]
        
        delete lusers[args[0]]
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Overwrited your old profile with new (" + lusers[msg.author.id].nick + ").")
    }
    if (msg.content == "pm!logoutw") {
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (lusers[msg.author.id].pass == undefined) return msg.channel.send("no pass")
        unbhome = Math.random().toString().replace(".", "")
        msg.channel.send("I will log out your account. Please remember this key! or write it down: " + unbhome + "\nUse it as unblock home!")
        lusers[msg.author.id].locked = true
        lusers[unbhome] = lusers[msg.author.id]
        delete lusers[msg.author.id]
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> DONE! :DD")
    }
    if (msg.content.startsWith("pm!passchg")) {
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (args[0] == undefined) return msg.channel.send("no, no pass")
        if (lusers[msg.author.id].pass == undefined) {
            lusers[msg.author.id].pass = args[0]
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Creating a password... Done.")
        } else {
            if (args[1] == undefined) return msg.channel.send("no, no new pass")
            if (lusers[msg.author.id].pass != args[0]) {
                msg.channel.send("Password cannot be changed: Old password does not match.");
            } else {
                lusers[msg.author.id].pass = args[1]
                msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Password updated.")
            }
        }
    }
    if (msg.content.startsWith("pm!urban")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (msg.channel.id != "742383438966816866" && msg.channel.id != "744265869852672063" && msg.channel.id != "761504530407227393") return msg.reply("Oops, access denied. Please use the urban channels, that PCbot supports.")
        if (!args.length) {
            return msg.channel.send('You need to supply a search term!');
        }
        query = querystring.stringify({
            term: args.join(' ')
        });
        async function urban(messageobj, query) {

            var {
                list
            } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
            if (!list.length) {
                return messageobj.channel.send(`No results found for **${args.join(' ')}**.`);
            }
            var trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
            var [answer] = list;
            var embed = new Discord.MessageEmbed()
                .setColor('#EFFF00')
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addFields({
                    name: 'Definition',
                    value: trim(answer.definition, 1024)
                }, {
                    name: 'Example',
                    value: trim(answer.example, 1024)
                }, {
                    name: 'Rating',
                    value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`
                });
            messageobj.channel.send(embed);
        }
        urban(msg, query);
    }
    if (msg.content.startsWith("pm!worker")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("You are Default account - Guest\nGot timeout: No data\nGot money: No data\nAnd people in company equals to: No data\nBanked (you cannot steal that!): No data\nBlocked homes:\nBlocked users option cannot be used by guests.")
            return
        }
        if (args[0] != undefined) {
            if (lusers[args[0]] == undefined) {
                msg.channel.send("He is Default account - Guest\nGot timeout: No data\nGot money: No data\nAnd people in company equals to: No data\nBanked (you cannot steal that!): No data")
                return
            }
            if (lusers[args[0]].blocked.includes(msg.author.id)) {
                msg.channel.send("Unable to look up user. Unexpected error.")
                return
            }
            
                	if (lusers[args[0]].hasOwnProperty("locked")) return msg.channel.send("The account was locked.");
            msg.channel.send("He is " + lusers[args[0]].nick + "\nGot timeout: " + lusers[args[0]].timeout + "\nGot money: " + lusers[args[0]].money + "RUB\nAnd people in his company equals to: " + lusers[args[0]].people + "\nBanked (you cannot steal that!): " + lusers[args[0]].bank + "RUB")
            return
        }
        msg.channel.send("You are " + lusers[msg.author.id].nick + "\nGot timeout: " + lusers[msg.author.id].timeout + "\nGot money: " + lusers[msg.author.id].money + "RUB\nAnd people in company equals to: " + lusers[msg.author.id].people + "\nBanked (you cannot steal that!): " + lusers[msg.author.id].bank + "RUB\nBlocked homes:\n" + lusers[msg.author.id].blocked.join("\n"))
    }
    if (msg.content == "pm!allreg") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("All registered users:\n\nYou should register in order to see this list. Use pm!reg [account].")
            return
        }
        alusers = ["Default account - Guest"]
        for (user in lusers) {
            alusers.push(lusers[user].nick + " (id " + user + ")")
        }
        msg.channel.send("All registered users:\n" + alusers.join("\n"))
    }
    if (msg.content.startsWith("pm!buypeople")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (lusers[msg.author.id] == undefined) {
            msg.channel.send("Register first, using pm!reg [account].")
            return
        }
        if (args[0] == undefined) amount = 1;
        if (args[0] != undefined) amount = Number(args[0])
        if (lusers[msg.author.id].people >= 17976931348623157e+292) return msg.channel.send("Quota of people reached. You cannot buy people.")
        if (isNaN(Number(amount))) return msg.channel.send("It is not a number.")
        if (amount < 0) return msg.channel.send("ERROR: Negative Number Detected.")
        if (amount.toString().includes(".")) return msg.channel.send("ERROR: i cannot bc i dunno this number.")
        if (lusers[msg.author.id].money >= amount * 100) {
            lusers[msg.author.id].money = lusers[msg.author.id].money - amount * 100;
			lusers[msg.author.id].money = lusers[msg.author.id].money + amount * 10;
            lusers[msg.author.id].people = lusers[msg.author.id].people + amount
            msg.channel.send("You buy " + amount + " more people. You got now " + lusers[msg.author.id].money + "RUB and " + lusers[msg.author.id].people + " people in your company. (Some money transferred to you to keep work.)");
        } else {
            msg.channel.send('You can\'t afford it. You got ' + lusers[msg.author.id].money + "RUB and need to have at least " + amount * 100 + "RUB.")
        }
    }
    if (msg.content == "pm!date") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var d = new Date();
        var day = days[d.getDay()];
        var today = new Date();
        var date = day + ' ' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        msg.channel.send("The date is " + date + ".")
    }
    if (msg.content == "pm!home") {
        msg.channel.send("Your home: " + msg.author.id)
    }
    if (msg.content == "pm!time") {
        var today = new Date();
        var mins = today.getMinutes()
        if (mins < 10) {
            mins = "0" + mins;
        }
        var time = today.getHours() + ":" + mins
        var offset = new Date().getTimezoneOffset();
        if (offset < 0) {
            msg.channel.send('Time (UTC+' + new Date().getTimezoneOffset() / -60 + ' ): ' + time)
        } else {
            msg.channel.send('Time (UTC-' + new Date().getTimezoneOffset() / -60 + ' ): ' + time)
        }
    }
    if (msg.content == "pm!rusdate") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        var days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
        var d = new Date();
        var day = days[d.getDay()];
        var today = new Date();
        var date = day + ' ' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        msg.channel.send("Сегодня дата " + date + ".")
    }
    if (msg.content == "pm!rushome") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("Бан.")
            return
        }
        msg.channel.send("ВАШ ID: " + msg.author.id)
    }
    if (msg.content.startsWith("pm!helphim")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> banned")
            return
        }
        if (activated[msg.author.id] == undefined) return msg.channel.send("Invalid activation code.\n\nCode is expired. Request another.\n\nOr another reasons....\nYour code is already used.\nYou typed an incorrect code.")
        if (args[0] == undefined) return msg.channel.send("please type activation code.")
        if (args[0] == activated[msg.author.id].hlpforuser) {
            lusers[activated[msg.author.id].usern].money = lusers[activated[msg.author.id].usern].money + 1000
            lusers[activated[msg.author.id].usern].people = lusers[activated[msg.author.id].usern].people + 3
            delete activated[msg.author.id]
            msg.channel.send("<:PCbotOperationCompleted:785870172913270904> you helped!")
        } else {
            msg.channel.send("Invalid activation code.\n\nCode is expired. Request another.\n\nOr another reasons....\nYour code is already used.\nYou typed an incorrect code.")
        }
    }
    if (msg.content.startsWith("pm!helper")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> banned")
            return
        }
        if (args[0] == undefined) return msg.channel.send("mention a helper")
        if (msg.mentions.users.size == 0) return msg.channel.send("mention a helper")
        if (lusers[msg.author.id] == undefined) return msg.channel.send("hmm, you have not registered an account.")
        if (activated[msg.mentions.users.first().id] != undefined) return msg.channel.send("retry next time loser")
        if (msg.mentions.users.first().id == msg.author.id) return msg.channel.send("you cannot request help to yourself.")
        if (msg.mentions.users.first().bot) return msg.channel.send("you cannot request help to bots.")
        generated = Math.random().toString().replace(".", "");
        activated[msg.mentions.users.first().id] = {
            hlpforuser: generated,
            usern: msg.author.id
        };
        var gooo = setTimeout(function() {
            delete activated[msg.mentions.users.first().id]
        }, 60000)
        try {
            msg.mentions.users.first().send("Hello " + msg.mentions.users.first().username + ",\nWill you help " + msg.author.username + " make money? If you want to help, you type in the channel the command:\npm!helphim " + generated + "\n\nThis will work for 60secounds only, so if you want to help, please GOOOOOOOOOOOOOO").catch(() => {
                msg.channel.send("He disallowed to DM or another error occured.")
                delete activated[msg.mentions.users.first().id]
                clearTimeout(gooo)
            })
            msg.channel.send(msg.mentions.users.first().username + " is DM'ed with your message. <:PCbotOperationCompleted:785870172913270904> ");
        } catch {
            msg.channel.send("He disallowed to DM or another error occured.")
            delete activated[msg.mentions.users.first().id]
            clearTimeout(gooo)
        }
    }

    if (msg.content.startsWith("pm!mute")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> banned")
            return
        }
        if (args[0] == undefined) return msg.channel.send("mention a mute")
        if (msg.mentions.users.size == 0) return msg.channel.send("mention a mute")
        if (msg.channel.type === 'dm') return msg.channel.send("cannot work in dms")
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            if (args[1] == "mute" || args[1] == undefined) {
                if (msg.mentions.users.first().id == msg.author.id) return msg.channel.send("you cannot mute yourself.")
                if (msg.mentions.users.first().bot) return msg.channel.send("you cannot mute bots.")
                role = msg.guild.roles.cache.find(role => role.name === 'mute');
                member = msg.mentions.members.first();
                member.roles.add(role);
                msg.channel.send("Muted " + msg.mentions.users.first().username + ":white_check_mark:")
            } else if (args[1] == "unmute") {
                var role = msg.guild.roles.cache.find(role => role.name === 'mute');
                var member = msg.mentions.members.first();
                member.roles.remove(role);
                msg.channel.send('Unmuted ' + msg.mentions.users.first().username + ':ballot_box_with_check:')
            } else {
                msg.channel.send("no")
            }
        } else {
            msg.channel.send("Could not (UN)Mute.")
        }
    }
    if (msg.content.startsWith("pm!cheats ")) {
        msg.delete()
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            return
        }


        if (lusers[msg.author.id] == undefined) return msg.channel.send("in order to use this command, you need to register an account.")
        if (cheats[args[0]] == undefined) return msg.channel.send("This cheat code is not in my DB.")
        if (cheats[args[0]].alreadyused.includes(msg.author.id)) return msg.channel.send("This cheat is already used.")
        if (cheats[args[0]].blocked) return msg.channel.send("This cheat is blocked.")

        lusers[msg.author.id].money = lusers[msg.author.id].money + cheats[args[0]].money
        cheats[args[0]].alreadyused.push(msg.author.id)
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Now used the cheat. You now have " + lusers[msg.author.id].money + "RUB.")
        if (cheats[args[0]].defaultfunc != undefined) cheats[args[0]].defaultfunc()
    }
    if (msg.content.startsWith("pm!totb")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            return
        }
        if (!tbon) return
        if (args[0] == undefined) return msg.channel.send("cannot answer when the args is undefined")
        msg.channel.send("<:PCbotOperationCompleted:785870172913270904> okay");
        socket.emit("message", "[PCbot Trollbox-Discord Port] " + msg.author.username + " (id" + msg.author.id + ") | " + args.join(" "));
    }
    if (msg.content.startsWith("pm!tbport")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (permas[msg.author.id].devmode || permas[msg.author.id].level == 5) {
            if (args[0] == "on") {
                if (!tbon) {
                    tbon = true
                    socket = io("https://extrovertedfairlivedistra--tbsharedaccount.repl.co/")
                    socket.emit("user joined", "PCBT-DP", "#a700ff", "", "")
                    socket.on("message", function(deeta) {
                        if (deeta.msg.startsWith("pm!tods")) {
                            if (deeta.msg == "pm!tods" || deeta.msg == "pm!tods ") {
                                socket.emit("message", "not this time, " + deeta.nick)
                                return
                            } else {
                                var chan = bot.channels.cache.get('727951172325081130')
                                chan.send("[PCbot Trollbox-Discord Port] " + deeta.nick + " (id" + deeta.home + ") |" + deeta.msg.replace("pm!tods", ""))
                                socket.emit("message", "sent")
                            }
                        }
                    })
                    msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Operation completed successfully, press F to pay a respect. or 1 to feedback.")
                } else {
                    msg.channel.send("Operation failed successfully, press F to pay a respect. or 1 to feedback.")
                }
            } else if (args[0] == "off") {
                if (tbon) {
                    tbon = false
                    socket.destroy();
                    delete socket
                    msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Operation completed successfully, press F to pay a respect. or 1 to feedback.")
                } else {
                    msg.channel.send("Operation failed successfully, press F to pay a respect. or 1 to feedback.")
                }
            } else {
                msg.channel.send("wait thats illegal #3")
            }
        } else {
            msg.channel.send("wait thats illegal #5")
        }
    }
    if (msg.content == "pm!rustime") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Бан.")
            return
        }
        var today = new Date();
        var mins = today.getMinutes()
        if (mins < 10) {
            mins = "0" + mins;
        }
        var time = today.getHours() + ":" + mins
        var offset = new Date().getTimezoneOffset();
        if (offset < 0) {
            msg.channel.send('ВРЕМЯ (UTC+' + new Date().getTimezoneOffset() / -60 + '): ' + time)
        } else {
            msg.channel.send('ВРЕМЯ (UTC-' + new Date().getTimezoneOffset() / -60 + '): ' + time)
        }
    }
    if (msg.content == "pm!login") {
        perms = "User";
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 1) {
            perms = "VIP (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 2) {
            perms = "Moderator (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 3) {
            perms = "Administrator (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 4) {
            perms = "Head Administrator (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            perms = "Owner (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            perms = "Banned (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 3005) {
            perms = "User (Reason: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].devmode) {
            perms = perms + " [Dev Mode]"
        }
        if (msg.channel.type != "dm") {
            if (serversVerified.includes(msg.guild.id)) {
                perms = perms + " [Current server passed the PCsoft Verification]";
            }
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].verified) {
            msg.channel.send("Permissions: " + perms + "\nNick: " + msg.author.username + " ✓\nColor: N/A")
            return
        }

        msg.channel.send("Permissions: " + perms + "\nNick: " + msg.author.username + "\nColor: N/A")
    }
    if (msg.content == "pm!ruslogin") {
        rusperms = "Пользователь";
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 1) {
            rusperms = "VIP (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 2) {
            rusperms = "Модератор (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 3) {
            rusperms = "Администратор (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 4) {
            rusperms = "Высокий Администратор (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            rusperms = "Создатель (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            rusperms = "Бан (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 3005) {
            rusperms = "Пользователь (Причина: " + permas[msg.author.id].reason + ")"
        }
        if (msg.channel.type != "dm") {
            if (serversVerified.includes(msg.guild.id)) {
                perms = perms + " [Этот сервер прошел верификацию PCsoft]";
            }
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].devmode) {
            rusperms = rusperms + " [Режим разработчика]"
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].verified) {
            msg.channel.send("Разрешения: " + rusperms + "\nНик: " + msg.author.username + " ✓\nЦвет: н/д")
            return
        }
        msg.channel.send("Разрешения: " + rusperms + "\nНик: " + msg.author.username + "\nЦвет: н/д")
    }
    if (msg.content.startsWith("pm!evaljs")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }

        //return msg.channel.send("CRITICAL STOP ERROR 0x30002098923798463763454563457: OPERATION NOT ALLOWED.\nCommand was locked due to an issue, while and fromCharCode was overloading the bot.")
        class ExecuteJSex extends Error {
            constructor(msg) {
                super("ExecuteJSex")
                this.name = "ExecuteJSex"
                this.message = msg
            }
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].devmode || permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            if (msg.content.replace("pm!evaljs ", "") == "pm!evaljs" || msg.content.replace("pm!evaljs ", "") == "") {
                msg.channel.send("JS, please.....")
                return
            }
            try {
                /*if (msg.content.replace("pm!evaljs ","").includes("child_process")){
                	throw new ExecuteJSex("No processes for you.")
                }*/
                if (msg.content.replace("pm!evaljs ", "").includes("this.constructor.constructor")) {
                    return msg.channel.send("Unable to run: " + msg.content.replace("pm!evaljs ", "") + "\nReturned value:\nThe operation has been cancelled due to restrictions in PCbot.\nContact your system administrator.")
                }
                if (msg.content.replace("pm!evaljs ", "").includes("eval")) {
                    return msg.channel.send("Unable to run: " + msg.content.replace("pm!evaljs ", "") + "\nReturned value:\nThe operation has been cancelled due to restrictions in PCbot.\nContact your system administrator.")
                }
                if (msg.content.replace("pm!evaljs ", "").includes("while")) {
                    return msg.channel.send("Unable to run: " + msg.content.replace("pm!evaljs ", "") + "\nReturned value:\nThe operation has been cancelled due to restrictions in PCbot.\nContact your system administrator.")
                }
                if (msg.content.replace("pm!evaljs ", "").includes("for")) {
                    return msg.channel.send("Unable to run: " + msg.content.replace("pm!evaljs ", "") + "\nReturned value:\nThe operation has been cancelled due to restrictions in PCbot.\nContact your system administrator.")
                }
                var answ = safeEval(msg.content.replace("pm!evaljs ", ""))
                if (answ == process.env.TOKEN) return msg.channel.send("Runned: " + msg.content.replace("pm!evaljs ", "") + "\nReturned value:\nducked, no token for u")
                msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Runned: " + msg.content.replace("pm!evaljs ", "") + "\nReturned value:\n" + answ)
            } catch (err) {
                msg.channel.send("Unable to run: " + msg.content.replace("pm!evaljs ", "") + "\nException:\n" + err.toString())
            }
            return
        } else {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Nope, you need a devmode enabled.")
        }
    }
    if (msg.content == "pm!shutdown") {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (permas[msg.author.id] == undefined) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Nope.")
            return
        }
        if (permas[msg.author.id].level != 5) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Nope.")
            return
        }
        froze = true
        bot.user.setActivity('Offline.', {
            type: 'LISTENING'
        });
        pcbotembed = new Discord.MessageEmbed()
        pcbotembed.setTitle("Shutdown")
        pcbotembed.setDescription("Please wait while PCbot OS\nwrites unsaved data in PCbot...")
        msg.channel.send(pcbotembed).then(function(mozg) {
            setTimeout(function() {
                offpcbotembed = new Discord.MessageEmbed()
                offpcbotembed.setTitle("Shutdown")
                offpcbotembed.setDescription("It is now safe to turn off your PCbot.")
                mozg.edit(offpcbotembed)
                setTimeout(function() {
                    bot.destroy();
                    setTimeout(function() {
                        process.exit(0);
                    }, 2000);
                }, 2000)
            }, 5000)
        })
    }
    if (msg.content.startsWith("pm!notif ")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        if (permas[msg.author.id] == undefined) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Nope.")
            return
        }
        if (permas[msg.author.id].level != 5) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Nope.")
            return
        }
        if (msg.content.replace("pm!notif ", "") == "pm!notif" || msg.content.replace("pm!notif ", "") == "") {
            msg.channel.send("NOPEEE! No message to notify.")
            return
        }
        channel = bot.channels.cache.get('728540765286039613');
        pcbotembed = new Discord.MessageEmbed()
        pcbotembed.setTitle("Notification")
        pcbotembed.setColor("#5c00d4")
        pcbotembed.setAuthor(msg.author.username)
        pcbotembed.setDescription("<@&735519287065968661> " + msg.content.replace("pm!notif ", ""))
        pcbotembed.setFooter("Generated by PCbot with reason: requested by " + msg.author.username + ".")
        channel.send(pcbotembed)
        bot.channels.cache.get("792661081801490453").send(pcbotembed)
    }
    if (msg.content.startsWith("pm!unsevaljs")) {
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 0) {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Banned.")
            return
        }
        class ExecuteJSex extends Error {
            constructor(msg) {
                super("ExecuteJSex")
                this.name = "ExecuteJSex"
                this.message = msg
            }
        }
        if (permas[msg.author.id] != undefined && permas[msg.author.id].level == 5) {
            if (msg.content.replace("pm!unsevaljs ", "") == "pm!unsevaljs" || msg.content.replace("pm!unsevaljs ", "") == "") {
                msg.channel.send("JS, please.....")
                return
            }
            try {
                if (msg.content.replace("pm!unsevaljs ", "").includes("child_process")) {
                    throw new ExecuteJSex("No processes for you.")
                }
                var answ = eval(msg.content.replace("pm!unsevaljs ", ""))
                msg.channel.send("<:PCbotOperationCompleted:785870172913270904> Runned: " + msg.content.replace("pm!unsevaljs ", "") + "\nReturned value:\n" + answ)
            } catch (err) {
                msg.channel.send("Unable to run: " + msg.content.replace("pm!unsevaljs ", "") + "\nException:\n" + err.toString())
            }
            return
        } else {
            msg.channel.send("<:PCbotNoAccess:785869645071777853> Nope, you need an owner perms")
        }
    }
});

function readPCbotfile(file, args) {
    let read = mystorage.getItem(file);
    let readed = read.replace("<undone>", "[This text is not done. Please help done this text.]\n")
    let readeded = readed.replace(/<datetime>/g, new Date())
    let readededed = readeded.replace(/<randnum>/g, Math.random())
    let readedededed = readededed.replace(/<quote>/g, "Quoting:\n")
    let readededededed = readedededed.replace(/<quoteend>/g, "\n---------\n")
    let readedededededed = readededededed.replace(/<arg>/g, args)
    let readedededededededed = readedededededed.replace(/<nick>/g, "Cannot use username in function enviroment.")
    let readededededededededed = readedededededededed.replace(/<color>/g, "Cannot use color in function enviroment.")
    let readedededededededededed = readededededededededed.replace(/<home>/g, "Cannot use home in function enviroment.")
    if (readedededededededededed.includes("undefined")) {
        return "try use args"
    }
    if (readedededededededededed.length > 500) {
        return "unsupportable file"
    }
    return readedededededededededed.replace(/<private creator>/g, "");
}
process.on('exit', function() {
    //bot.user.setActivity('Offline.', { type: 'LISTENING'});
    console.log("\nShutting down...")
    setTimeout(function() {
        bot.destroy()
        //process.exit(0)
        setTimeout(function() {
            process.exit(0)
        }, 2000)
    }, 2000)
});
process.on('SIGINT', function() {
    //bot.user.setActivity('Offline.', { type: 'LISTENING'});
    console.log("\nShutting down...")
    setTimeout(function() {
        bot.destroy()
        //process.exit(0)
        setTimeout(function() {
            process.exit(0)
        }, 2000)
    }, 2000)
});
process.on('SIGHUP', function() {
    //bot.user.setActivity('Offline.', { type: 'LISTENING'});
    console.log("\nShutting down...")
    setTimeout(function() {
        bot.destroy()
        //process.exit(0)
        setTimeout(function() {
            process.exit(0)
        }, 2000)
    }, 2000)
});
