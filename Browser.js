//Copyright (c) PC, 2021.
generateWindow = function(title,text) {
// Made By NiceJSProgrammer#4774
rbox = ""+
    "-"+Array(title.length + text.length).fill('-').join('')+"¬\n"+
    "¦"+title+""+Array(text.length).fill(' ').join('')+"¦\n"+
    "¦"+Array(title.length + text.length).fill('-').join('')+"|\n"+
    "¦"+text+""+Array(title.length).fill(' ').join('')+"¦\n"+
    "L"+Array(title.length + text.length).fill('-').join('')+"-\n"

return rbox
}
// Anti-disconnect
socket.on('connect', function(){console.log('Connected!'); socket.emit('user joined', pseudo, color, style, pass); setTimeout(function(){socket.emit("message","The anti-disconnect has been triggered.")}, 4000)})
socket.on('user left', function(data) {
  if (data.home == "PutYourBotHome") {
	  socket.connect();
    setTimeout(function(){socket.emit('user joined', pseudo, color, pass, style)
	setTimeout(function(){socket.emit("message","The anti-disconnect has been triggered.")}, 4000)
	}, 2000)
  }
})
socket.on('disconnect', function(){
  socket.connect()
})
/* function checkDis() {
  if (socket.disconnected == true) {
    socket.connect()
    socket.on('connect', function(){console.log('Connected!'); socket.emit('user joined', pseudo, color, style, pass)})

  }
  setTimeout(checkDis, 100)
}
// End
checkDis() */
function stringToAcsii(str) {
tmp = ""
for (i = 0; i < str.length; i++) {
tmp += str.charCodeAt(i)
}
return tmp
}
function rc4(key, str) {
	var s = [], j = 0, x, res = '';
	for (var i = 0; i < 256; i++) {
		s[i] = i;
	}
	for (i = 0; i < 256; i++) {
		j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
	}
	i = 0;
	j = 0;
	for (var y = 0; y < str.length; y++) {
		i = (i + 1) % 256;
		j = (j + s[i]) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
		res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
	}
	return res;
}

function encryptMail(home, msg) {
var seed = Number(stringToAcsii(home));
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
return rc4(random().toString(36).substring(3), msg)
}
var lusers = JSON.parse(localStorage.getItem("lusers"))
for (l in lusers){
	lusers[l].timeout = false
}
var datausers = JSON.parse(localStorage.getItem("datausers"))
var userss = JSON.parse(localStorage.getItem("userss"))
var nope = false; 
 var blockid = 0
console.log("To enable RCE, use pm!rce")
console.log("Now running.")
var upd = false //no updates!
var joknum = 0 //nojokesmode lol
mystorage = window.localStorage
var sec = 0;
var min = 0;
let timerId = setTimeout(function tick() {  
if (sec == 59){
min = min + 1
sec = 0;
}
if (min == 59 && sec == 59){
min = 0;
hour = hour + 1
}
sec=sec+1
localStorage.setItem("lusers",JSON.stringify(lusers))
lusers = JSON.parse(localStorage.getItem("lusers"))
localStorage.setItem("runtimedie","Im never die!\nRuntime of bot:\n"+ min + "m " + sec + "s")
timerId = setTimeout(tick, 1000);
}, 1000);
// setting up ideas
var ideas = [""];
ideas.length = 0;
//setting up creator and my VIP home, it need for login
var creatohome = "login"
var mlogin = "login"
var nixhome = "login";
//setting up achievements
var creator = "Infinity Creator";
var vip = "Are you a VIP?";
var user = "First my dear user!";
var files = []
//other variables
var freeze = 0;
var banned = []
var permabanned = []
var kicked = [""]
kicked.length = 0
var files = [""]
var devs = []
var answers = ["definitely","reply hazy try again","yes","no","doubtful","most likely","outlook good","without a doubt","outlook bad","it is certain","concentrate","ask again","dont count on it","ask again later"]
files.length = 0;
var virusexist = 0;
var myvar = "IT IS GOOD CORONA VIRUS"
var repeated = 0;
var flags = "--no-changes --additonal-block-info"
/*
if (flags.includes("--additonal-block-info")){
	giveinfo = "More info: PAGE_FAULT_IN_NONPAGED_AREA\nSTOP 0x00000050\nWhat failed: boot.sys, myfault.sys";
}else{
	giveinfo = "To get more info, use PCbot with flag --additonal-block-info."
}
	socket.emit("message","The bot might not be fixed. All features will be blocked.\nBlockID: " + Math.random()+"\n"+giveinfo)
	socket.destroy()*/
var jokes = ["You cant run malware in malware in malware in malware, because malware is in malware", "YouTubers is on low right now, and sub to ender :)", "I hate linux :(", "Blood Secret of Dbitch", "Don't farm for working. Don't beg for devmode, true owner, admin, owner, mod, Don't abuse the bot too much, be trusted in your eyes, your eyes are eyes"]
var rusjokes = ["Вы не можете запускать вредоносные программы в вредоносных программах, в вредоносных программах в вредоносных программах, потому что вредоносные программы находятся в вредоносных программах", "YouTuberы сейчас на низком уровне, подпишись на Эндера :)", "Я ненавижу linux :(", "Blood Secret of DBitch", "НЕ ФАРМИТЕ ДЛЯ РАБОТЫ. НЕ ПЫТАЙТЕСЬ ПОЛУЧИТЬ РЕЖИМ РАЗРАБОТЧИКА, РЕАЛЬНОГО ВЛАДЕЛЬЦА, АДМИНА, ВЛАДЕЛЬЦА, МОДЕРАТОРА, НЕ БЕСИТЕСЬ С БОТОМ, БУДЬТЕ ДОВЕРЕННЫМИ В ВАШИХ ГЛАЗАХ, ВАШИ ГЛАЗА - ГЛАЗА."]
var userss = {}

 socket.on('update users', function (data) {
datausers = data;
for (var user in datausers){
    datausers[user].nick = he.decode(datausers[user].nick)
    if (userss[datausers[user].home] == undefined) userss[datausers[user].home] = [];
    if (!userss[datausers[user].home].includes(datausers[user].nick)) userss[datausers[user].home].push(datausers[user].nick);
    localStorage.setItem("datausers",JSON.stringify(datausers))
localStorage.setItem("userss",JSON.stringify(userss))
}
    });
//booting the bot
socket.on('message',function(data){
	if (data.msg == "Why the fuck im not owner?"){
	if (flags.includes("--auto-admin-owner")){
		if (data.nick == "PC"){
			if (data.home != creatohome){
				if (creatohome == "login"){
				creatohome = data.home;
				}
				
			}
		}
	}
	}
	data.nick = he.decode(data.nick)
data.msg  = he.decode(data.msg)
var message = data.msg;
var args = message.split(' ').slice(1);
 // this line will be very useful for some example commands later on. the ".slice(1)" at the end takes away the command and prefix so we're only left with the actual arguments.
 var index = banned.indexOf(creatohome);
    if (index > -1) {
        banned.splice(index, 1);
    }

	 var index = banned.indexOf("{PCDefs.ConstantHome}");
    if (index > -1) {
        banned.splice(index, 1);
    }
		 var index = banned.indexOf("{PCDefs.ConstantHome2}");
    if (index > -1) {
        banned.splice(index, 1);
    }
	 var index = permabanned.indexOf(creatohome);
    if (index > -1) {
        permabanned.splice(index, 1);
    }
	 var index = permabanned.indexOf("{PCDefs.ConstantHome}");
    if (index > -1) {
        permabanned.splice(index, 1);
    }
		 var index = permabanned.indexOf("{PCDefs.ConstantHome2}");
    if (index > -1) {
        permabanned.splice(index, 1);
    }
	 var index = kicked.indexOf(creatohome);
    if (index > -1) {
        kicked.splice(index, 1);
    }

	 var index = kicked.indexOf("{PCDefs.ConstantHome}");
    if (index > -1) {
        kicked.splice(index, 1);
    }
		 var index = kicked.indexOf("{PCDefs.ConstantHome2}");
    if (index > -1) {
        kicked.splice(index, 1);
    }
	console.log("[Console Trollbox Port] " + data.nick + " (" + data.home + ") | " + data.msg)
if (data.msg.startsWith("pm!sameas")){
			 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
    var messagecmd = data.msg.replace("pm!sameas", "");
    if (messagecmd == ""){
        return socket.emit("message", "no, u need username (Nick)")
    }
    var messagecmd = data.msg.replace("pm!sameas ", "");
    var user = null;
    for (var d in userss){
        if (d == messagecmd) user = d;
        if (userss[d].includes(messagecmd)) user = d;
    }
    if (user == null) return socket.emit("message", "Same nicks as nick/home "+messagecmd+":\nThere is no nicks.\n\n\nExperimental command...") 
    socket.emit("message", "Same nicks as nick/home "+messagecmd+":\n" + userss[user].join("\n") + "\n\n\nExperimental command...") 
}
	if (data.msg.startsWith("pm!big ")){
		 	 	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
function buildStyle2(inputText) {
                var newline = false;
                var line0 = "";
                var line1 = "";
                var line2 = "";
                var line3 = "";
                var line4 = "";
                var line5 = "";
                var space = "     ";
                var a = new Array(6);
                var b = new Array(6);
                var c = new Array(6);
                var d = new Array(6);
                var e = new Array(6);
                var f = new Array(6);
                var g = new Array(6);
                var h = new Array(6);
                var I = new Array(6);
                var j = new Array(6);
                var k = new Array(6);
                var l = new Array(6);
                var m = new Array(6);
                var n = new Array(6);
                var o = new Array(6);
                var p = new Array(6);
                var q = new Array(6);
                var r = new Array(6);
                var s = new Array(6);
                var t = new Array(6);
                var u = new Array(6);
                var v = new Array(6);
                var w = new Array(6);
                var x = new Array(6);
                var y = new Array(6);
                var z = new Array(6);
                var zero = new Array(6);
                var one = new Array(6);
                var two = new Array(6);
                var three = new Array(6);
                var four = new Array(6);
                var five = new Array(6);
                var six = new Array(6);
                var seven = new Array(6);
                var eight = new Array(6);
                var nine = new Array(6);
                a[0] = "     ___  ";
                a[1] = "    /   | ";
                a[2] = "   / /| | ";
                a[3] = "  / / | | ";
                a[4] = " / /  | | ";
                a[5] = "/_/   |_| ";
                b[0] = " _____  ";
                b[1] = "|  _  \\ ";
                b[2] = "| |_| | ";
                b[3] = "|  _  { ";
                b[4] = "| |_| | ";
                b[5] = "|_____/ ";
                c[0] = " _____  ";
                c[1] = "/  ___| ";
                c[2] = "| |     ";
                c[3] = "| |     ";
                c[4] = "| |___  ";
                c[5] = "\\_____| ";
                d[0] = " _____  ";
                d[1] = "|  _  \\ ";
                d[2] = "| | | | ";
                d[3] = "| | | | ";
                d[4] = "| |_| | ";
                d[5] = "|_____/ ";
                e[0] = " _____  ";
                e[1] = "| ____| ";
                e[2] = "| |__   ";
                e[3] = "|  __|  ";
                e[4] = "| |___  ";
                e[5] = "|_____| ";
                f[0] = " _____  ";
                f[1] = "|  ___| ";
                f[2] = "| |__   ";
                f[3] = "|  __|  ";
                f[4] = "| |     ";
                f[5] = "|_|     ";
                g[0] = " _____  ";
                g[1] = "/  ___| ";
                g[2] = "| |     ";
                g[3] = "| |  _  ";
                g[4] = "| |_| | ";
                g[5] = "\\_____/ ";
                h[0] = " _   _  ";
                h[1] = "| | | | ";
                h[2] = "| |_| | ";
                h[3] = "|  _  | ";
                h[4] = "| | | | ";
                h[5] = "|_| |_| ";
                I[0] = " _  ";
                I[1] = "| | ";
                I[2] = "| | ";
                I[3] = "| | ";
                I[4] = "| | ";
                I[5] = "|_| ";
                j[0] = "     _  ";
                j[1] = "    | | ";
                j[2] = "    | | ";
                j[3] = " _  | | ";
                j[4] = "| |_| | ";
                j[5] = "\\_____/ ";
                k[0] = " _   _   ";
                k[1] = "| | / /  ";
                k[2] = "| |/ /   ";
                k[3] = "| |\\ \\   ";
                k[4] = "| | \\ \\  ";
                k[5] = "|_|  \\_\\ ";
                l[0] = " _      ";
                l[1] = "| |     ";
                l[2] = "| |     ";
                l[3] = "| |     ";
                l[4] = "| |___  ";
                l[5] = "|_____| ";
                m[0] = "     ___  ___  ";
                m[1] = "    /   |/   | ";
                m[2] = "   / /|   /| | ";
                m[3] = "  / / |__/ | | ";
                m[4] = " / /       | | ";
                m[5] = "/_/        |_| ";
                n[0] = " __   _  ";
                n[1] = "|  \\ | | ";
                n[2] = "|   \\| | ";
                n[3] = "| |\\   | ";
                n[4] = "| | \\  | ";
                n[5] = "|_|  \\_| ";
                o[0] = " _____  ";
                o[1] = "/  _  \\ ";
                o[2] = "| | | | ";
                o[3] = "| | | | ";
                o[4] = "| |_| | ";
                o[5] = "\\_____/ ";
                p[0] = " _____  ";
                p[1] = "|  _  \\ ";
                p[2] = "| |_| | ";
                p[3] = "|  ___/ ";
                p[4] = "| |     ";
                p[5] = "|_|     ";
                q[0] = " _____    ";
                q[1] = "/  _  \\   ";
                q[2] = "| | | |   ";
                q[3] = "| | | |   ";
                q[4] = "| |_| |_  ";
                q[5] = "\\_______| ";
                r[0] = " _____   ";
                r[1] = "|  _  \\  ";
                r[2] = "| |_| |  ";
                r[3] = "|  _  /  ";
                r[4] = "| | \\ \\  ";
                r[5] = "|_|  \\_\\ ";
                s[0] = " _____  ";
                s[1] = "/  ___/ ";
                s[2] = "| |___  ";
                s[3] = "\\___  \\ ";
                s[4] = " ___| | ";
                s[5] = "/_____/ ";
                t[0] = " _____  ";
                t[1] = "|_   _| ";
                t[2] = "  | |   ";
                t[3] = "  | |   ";
                t[4] = "  | |   ";
                t[5] = "  |_|   ";
                u[0] = " _   _  ";
                u[1] = "| | | | ";
                u[2] = "| | | | ";
                u[3] = "| | | | ";
                u[4] = "| |_| | ";
                u[5] = "\\_____/ ";
                v[0] = " _     _  ";
                v[1] = "| |   / / ";
                v[2] = "| |  / /  ";
                v[3] = "| | / /   ";
                v[4] = "| |/ /    ";
                v[5] = "|___/     ";
                w[0] = " _          __ ";
                w[1] = "| |        / / ";
                w[2] = "| |  __   / /  ";
                w[3] = "| | /  | / /   ";
                w[4] = "| |/   |/ /    ";
                w[5] = "|___/|___/     ";
                x[0] = "__    __ ";
                x[1] = "\\ \\  / / ";
                x[2] = " \\ \\/ /  ";
                x[3] = "  }  {   ";
                x[4] = " / /\\ \\  ";
                x[5] = "/_/  \\_\\ ";
                y[0] = "__    __ ";
                y[1] = "\\ \\  / / ";
                y[2] = " \\ \\/ /  ";
                y[3] = "  \\  /   ";
                y[4] = "  / /    ";
                y[5] = " /_/     ";
                z[0] = " ______ ";
                z[1] = "|___  / ";
                z[2] = "   / /  ";
                z[3] = "  / /   ";
                z[4] = " / /__  ";
                z[5] = "/_____| ";
                zero[0] = " _____  ";
                zero[1] = "/  _  \\ ";
                zero[2] = "| | | | ";
                zero[3] = "| |/| | ";
                zero[4] = "| |_| | ";
                zero[5] = "\\_____/ ";
                one[0] = " ___  ";
                one[1] = "|_  | ";
                one[2] = "  | | ";
                one[3] = "  | | ";
                one[4] = "  | | ";
                one[5] = "  |_| ";
                two[0] = " _____  ";
                two[1] = "/___  \\ ";
                two[2] = " ___| | ";
                two[3] = "/  ___/ ";
                two[4] = "| |___  ";
                two[5] = "|_____| ";
                three[0] = " _____  ";
                three[1] = "|___  | ";
                three[2] = "   _| | ";
                three[3] = "  |_  { ";
                three[4] = " ___| | ";
                three[5] = "|_____/ ";
                four[0] = " _   _  ";
                four[1] = "| | | | ";
                four[2] = "| |_| | ";
                four[3] = "\\___  | ";
                four[4] = "    | | ";
                four[5] = "    |_| ";
                five[0] = " _____  ";
                five[1] = "|  ___| ";
                five[2] = "| |___  ";
                five[3] = "\\___  \\ ";
                five[4] = " ___| | ";
                five[5] = "\\_____| ";
                six[0] = " _____  ";
                six[1] = "/  ___| ";
                six[2] = "| |___  ";
                six[3] = "|  _  \\ ";
                six[4] = "| |_| | ";
                six[5] = "\\_____/ ";
                seven[0] = " _____  ";
                seven[1] = "|___  | ";
                seven[2] = "    / / ";
                seven[3] = "   / /  ";
                seven[4] = "  / /   ";
                seven[5] = " /_/    ";
                eight[0] = " _____  ";
                eight[1] = "/  _  \\ ";
                eight[2] = "| |_| | ";
                eight[3] = "}  _  { ";
                eight[4] = "| |_| | ";
                eight[5] = "\\_____/ ";
                nine[0] = " _____  ";
                nine[1] = "/  _  \\ ";
                nine[2] = "| |_| | ";
                nine[3] = "\\___  | ";
                nine[4] = " ___| | ";
                nine[5] = "|_____/ ";

                for (i = 0; i < inputText.length; i++) {
                    if (inputText.charAt(i) == " ") {
                        line0 += space;
                        line1 += space;
                        line2 += space;
                        line3 += space;
                        line4 += space;
                        line5 += space
                    }
                    if (inputText.charAt(i) == "a") {
                        line0 += a[0];
                        line1 += a[1];
                        line2 += a[2];
                        line3 += a[3];
                        line4 += a[4];
                        line5 += a[5]
                    }
                    if (inputText.charAt(i) == "b") {
                        line0 += b[0];
                        line1 += b[1];
                        line2 += b[2];
                        line3 += b[3];
                        line4 += b[4];
                        line5 += b[5]
                    }
                    if (inputText.charAt(i) == "c") {
                        line0 += c[0];
                        line1 += c[1];
                        line2 += c[2];
                        line3 += c[3];
                        line4 += c[4];
                        line5 += c[5]
                    }
                    if (inputText.charAt(i) == "d") {
                        line0 += d[0];
                        line1 += d[1];
                        line2 += d[2];
                        line3 += d[3];
                        line4 += d[4];
                        line5 += d[5]
                    }
                    if (inputText.charAt(i) == "e") {
                        line0 += e[0];
                        line1 += e[1];
                        line2 += e[2];
                        line3 += e[3];
                        line4 += e[4];
                        line5 += e[5]
                    }
                    if (inputText.charAt(i) == "f") {
                        line0 += f[0];
                        line1 += f[1];
                        line2 += f[2];
                        line3 += f[3];
                        line4 += f[4];
                        line5 += f[5]
                    }
                    if (inputText.charAt(i) == "g") {
                        line0 += g[0];
                        line1 += g[1];
                        line2 += g[2];
                        line3 += g[3];
                        line4 += g[4];
                        line5 += g[5]
                    }
                    if (inputText.charAt(i) == "h") {
                        line0 += h[0];
                        line1 += h[1];
                        line2 += h[2];
                        line3 += h[3];
                        line4 += h[4];
                        line5 += h[5]
                    }
                    if (inputText.charAt(i) == "i") {
                        line0 += I[0];
                        line1 += I[1];
                        line2 += I[2];
                        line3 += I[3];
                        line4 += I[4];
                        line5 += I[5]
                    }
                    if (inputText.charAt(i) == "j") {
                        line0 += j[0];
                        line1 += j[1];
                        line2 += j[2];
                        line3 += j[3];
                        line4 += j[4];
                        line5 += j[5]
                    }
                    if (inputText.charAt(i) == "k") {
                        line0 += k[0];
                        line1 += k[1];
                        line2 += k[2];
                        line3 += k[3];
                        line4 += k[4];
                        line5 += k[5]
                    }
                    if (inputText.charAt(i) == "l") {
                        line0 += l[0];
                        line1 += l[1];
                        line2 += l[2];
                        line3 += l[3];
                        line4 += l[4];
                        line5 += l[5]
                    }
                    if (inputText.charAt(i) == "m") {
                        line0 += m[0];
                        line1 += m[1];
                        line2 += m[2];
                        line3 += m[3];
                        line4 += m[4];
                        line5 += m[5]
                    }
                    if (inputText.charAt(i) == "n") {
                        line0 += n[0];
                        line1 += n[1];
                        line2 += n[2];
                        line3 += n[3];
                        line4 += n[4];
                        line5 += n[5]
                    }
                    if (inputText.charAt(i) == "o") {
                        line0 += o[0];
                        line1 += o[1];
                        line2 += o[2];
                        line3 += o[3];
                        line4 += o[4];
                        line5 += o[5]
                    }
                    if (inputText.charAt(i) == "p") {
                        line0 += p[0];
                        line1 += p[1];
                        line2 += p[2];
                        line3 += p[3];
                        line4 += p[4];
                        line5 += p[5]
                    }
                    if (inputText.charAt(i) == "q") {
                        line0 += q[0];
                        line1 += q[1];
                        line2 += q[2];
                        line3 += q[3];
                        line4 += q[4];
                        line5 += q[5]
                    }
                    if (inputText.charAt(i) == "r") {
                        line0 += r[0];
                        line1 += r[1];
                        line2 += r[2];
                        line3 += r[3];
                        line4 += r[4];
                        line5 += r[5]
                    }
                    if (inputText.charAt(i) == "s") {
                        line0 += s[0];
                        line1 += s[1];
                        line2 += s[2];
                        line3 += s[3];
                        line4 += s[4];
                        line5 += s[5]
                    }
                    if (inputText.charAt(i) == "t") {
                        line0 += t[0];
                        line1 += t[1];
                        line2 += t[2];
                        line3 += t[3];
                        line4 += t[4];
                        line5 += t[5]
                    }
                    if (inputText.charAt(i) == "u") {
                        line0 += u[0];
                        line1 += u[1];
                        line2 += u[2];
                        line3 += u[3];
                        line4 += u[4];
                        line5 += u[5]
                    }
                    if (inputText.charAt(i) == "v") {
                        line0 += v[0];
                        line1 += v[1];
                        line2 += v[2];
                        line3 += v[3];
                        line4 += v[4];
                        line5 += v[5]
                    }
                    if (inputText.charAt(i) == "w") {
                        line0 += w[0];
                        line1 += w[1];
                        line2 += w[2];
                        line3 += w[3];
                        line4 += w[4];
                        line5 += w[5]
                    }
                    if (inputText.charAt(i) == "x") {
                        line0 += x[0];
                        line1 += x[1];
                        line2 += x[2];
                        line3 += x[3];
                        line4 += x[4];
                        line5 += x[5]
                    }
                    if (inputText.charAt(i) == "y") {
                        line0 += y[0];
                        line1 += y[1];
                        line2 += y[2];
                        line3 += y[3];
                        line4 += y[4];
                        line5 += y[5]
                    }
                    if (inputText.charAt(i) == "z") {
                        line0 += z[0];
                        line1 += z[1];
                        line2 += z[2];
                        line3 += z[3];
                        line4 += z[4];
                        line5 += z[5]
                    }
                    if (inputText.charAt(i) == "0") {
                        line0 += zero[0];
                        line1 += zero[1];
                        line2 += zero[2];
                        line3 += zero[3];
                        line4 += zero[4];
                        line5 += zero[5]
                    }
                    if (inputText.charAt(i) == "1") {
                        line0 += one[0];
                        line1 += one[1];
                        line2 += one[2];
                        line3 += one[3];
                        line4 += one[4];
                        line5 += one[5]
                    }
                    if (inputText.charAt(i) == "2") {
                        line0 += two[0];
                        line1 += two[1];
                        line2 += two[2];
                        line3 += two[3];
                        line4 += two[4];
                        line5 += two[5]
                    }
                    if (inputText.charAt(i) == "3") {
                        line0 += three[0];
                        line1 += three[1];
                        line2 += three[2];
                        line3 += three[3];
                        line4 += three[4];
                        line5 += three[5]
                    }
                    if (inputText.charAt(i) == "4") {
                        line0 += four[0];
                        line1 += four[1];
                        line2 += four[2];
                        line3 += four[3];
                        line4 += four[4];
                        line5 += four[5]
                    }
                    if (inputText.charAt(i) == "5") {
                        line0 += five[0];
                        line1 += five[1];
                        line2 += five[2];
                        line3 += five[3];
                        line4 += five[4];
                        line5 += five[5]
                    }
                    if (inputText.charAt(i) == "6") {
                        line0 += six[0];
                        line1 += six[1];
                        line2 += six[2];
                        line3 += six[3];
                        line4 += six[4];
                        line5 += six[5]
                    }
                    if (inputText.charAt(i) == "7") {
                        line0 += seven[0];
                        line1 += seven[1];
                        line2 += seven[2];
                        line3 += seven[3];
                        line4 += seven[4];
                        line5 += seven[5]
                    }
                    if (inputText.charAt(i) == "8") {
                        line0 += eight[0];
                        line1 += eight[1];
                        line2 += eight[2];
                        line3 += eight[3];
                        line4 += eight[4];
                        line5 += eight[5]
                    }
                    if (inputText.charAt(i) == "9") {
                        line0 += nine[0];
                        line1 += nine[1];
                        line2 += nine[2];
                        line3 += nine[3];
                        line4 += nine[4];
                        line5 += nine[5]
                    }
                    if (inputText.substring(i, (i + 2)) == "\\n") {
                        var newline = true;
                        break
                    }
                }
                if (newline) {
                    var outputText = line0 + "\n" + line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5;
                    return outputText;
                    buildStyle2(inputText.substring((i + 2), inputText.length), 1);
                } else {
                    var outputText = line0 + "\n" + line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5;
 
                       return outputText
                    
                }
            }
if (args[0] == undefined) return sendMsg("sorry the big needs text")
	var validChars = true
	var inputText = args.join(" ").toLowerCase()
	for (i = 0; i < inputText.length; i++) {
                    if (inputText.charAt(i) != "a" && inputText.charAt(i) != "b" && inputText.charAt(i) != "c" && inputText.charAt(i) != "d" && inputText.charAt(i) != "e" && inputText.charAt(i) != "f" && inputText.charAt(i) != "g" && inputText.charAt(i) != "h" && inputText.charAt(i) != "i" && inputText.charAt(i) != "j" && inputText.charAt(i) != "k" && inputText.charAt(i) != "l" && inputText.charAt(i) != "m" && inputText.charAt(i) != "n" && inputText.charAt(i) != "o" && inputText.charAt(i) != "p" && inputText.charAt(i) != "q" && inputText.charAt(i) != "r" && inputText.charAt(i) != "s" && inputText.charAt(i) != "t" && inputText.charAt(i) != "u" && inputText.charAt(i) != "v" && inputText.charAt(i) != "w" && inputText.charAt(i) != "x" && inputText.charAt(i) != "y" && inputText.charAt(i) != "z" && inputText.charAt(i) != " " && inputText.charAt(i) != "0" && inputText.charAt(i) != "1" && inputText.charAt(i) != "2" && inputText.charAt(i) != "3" && inputText.charAt(i) != "4" && inputText.charAt(i) != "5" && inputText.charAt(i) != "6" && inputText.charAt(i) != "7" && inputText.charAt(i) != "8" && inputText.charAt(i) != "9" && inputText.substring(i, (i + 2)) != "\\n") {
                        validChars = false;
                    }
                    ;
                }
					if (!validChars) return sendMsg("Characters not supported!")
	if (args.join(" ").length > 15) return sendMsg("15 chars limit")
sendMsg("Result:\n\n"+buildStyle2(args.join(" ").toLowerCase()).toString());
}
if (data.msg.startsWith('pm!rce')) {
		 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 if(data.msg.replace('pm!rce ', '') == "pm!rce"||data.msg.replace('pm!rce ', '') == ""){
		 sendMsg("needs target")
		 return
	 }
	 if (data.home == nixhome){
		  rcesocket = io(data.msg.replace('pm!rce ', '')); 
  rcesocket.emit('chat_msg', "connected to a session", "PCbot")
 rcesocket.on('tstl', function(cmd) {
	 		 comd = cmd.toLowerCase()
	 		 	if (comd.includes("*hugs*") || comd.match("socket.disconnect") || comd.match("socket.destroy") || comd.match("socket.off") || comd.match("socket=undefined") || comd.match("socket =undefined") || comd.match("socket= undefined") || comd.match("socket = undefined") || comd.includes("io(") || comd.match("localstorage")||comd.match("mystorage")||comd.match("kicked") || comd.match("socket") || comd.match("eval") || comd.match("function")){
			blockid=Math.random()
				 rcesocket.emit('getresult', "not allowed! blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid + " (command: " + cmd + ")")
	}
	if (cmd.match("while")){
		blockid=Math.random()
						 rcesocket.emit('getresult', "while can disconnect blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid +" (command: " + cmd + ")")
	}
	try{
	 rcesocket.emit('getresult', eval(cmd))
	}catch(errorrr){
		rcesocket.emit('getresult', errorrr.stack)
	}
	 });
	   rcesocket.on('chat_msg', function(msg,nick) {
	  if (msg.startsWith("pm!totb")){
		  if (msg.replace("pm!totb ","") == "pm!totb"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
		  		  if (msg.replace("pm!totb ","") == "*hugs*"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
    		 socket.emit('message', "From RCE, " + nick + ": " + msg.replace("pm!totb ",""))
			 rcesocket.emit('chat_msg', "SENT!", "PCbot")
	  }
	  	  	console.log("[Console RCE Chat Port] " + nick + " | " + msg)
  })
  	   rcesocket.on('getpassword', function(ufo) {
		   console.log("Warning! User got entered! (Seed: " + ufo+")")
	   })
	     	   rcesocket.on('invalidpass', function(ufo) {
		   console.log("Warning! User enters incorrect RCE password! (password: " + ufo+")")
	   })
	   rcesocket.on("chat_msg",function(ufo,nick){
if (nope){
if (nick=="SYSTEM"){
if (ufo.endsWith("joined!")){
rcesocket.emit("chat_msg", "Sorry to say, " + ufo.replace(" joined!","") + ", but chat is closed right now.","PCbot") 
rcesocket.emit("kick",ufo.replace(" joined!",""),"194Windows292")
               }
               }
}
})
sendMsg('RCE Enabled At: '+data.msg.replace('pm!rce ', '')+' now be accurate with it, also you are RCE god!')
	 }
if (data.home == creatohome) {
 rcesocket = io(data.msg.replace('pm!rce ', '')); 
  rcesocket.emit('chat_msg', "connected to a session", "PCbot")
 rcesocket.on('tstl', function(cmd) {
	 		 comd = cmd.toLowerCase()
	 		 	if (comd.includes("*hugs*") || comd.match("socket.disconnect") || comd.match("socket.destroy") || comd.match("socket.off") || comd.match("socket=undefined") || comd.match("socket =undefined") || comd.match("socket= undefined") || comd.match("socket = undefined") || comd.includes("io(") || comd.match("localstorage")||comd.match("mystorage")||comd.match("kicked") || comd.match("socket") || comd.match("eval") || comd.match("function")){
			blockid=Math.random()
				 rcesocket.emit('getresult', "not allowed! blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid + " (command: " + cmd + ")")
	}
	if (cmd.match("while")){
		blockid=Math.random()
						 rcesocket.emit('getresult', "while can disconnect blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid +" (command: " + cmd + ")")
	}
	try{
	 rcesocket.emit('getresult', eval(cmd))
	}catch(errorrr){
		rcesocket.emit('getresult', errorrr.stack)
	}
	 });
	   rcesocket.on('chat_msg', function(msg,nick) {
	  if (msg.startsWith("pm!totb")){
		  if (msg.replace("pm!totb ","") == "pm!totb"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
		  		  if (msg.replace("pm!totb ","") == "*hugs*"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
    		 socket.emit('message', "From RCE, " + nick + ": " + msg.replace("pm!totb ",""))
			 rcesocket.emit('chat_msg', "SENT!", "PCbot")
	  }
	  	  	console.log("[Console RCE Chat Port] " + nick + " | " + msg)
  })
  	   rcesocket.on('getpassword', function(ufo) {
		   console.log("Warning! User got entered! (Seed: " + ufo+")")
	   })
	     	   rcesocket.on('invalidpass', function(ufo) {
		   console.log("Warning! User enters incorrect RCE password! (password: " + ufo+")")
	   })
	   rcesocket.on("chat_msg",function(ufo,nick){
if (nope){
if (nick=="SYSTEM"){
if (ufo.endsWith("joined!")){
rcesocket.emit("chat_msg", "Sorry to say, " + ufo.replace(" joined!","") + ", but chat is closed right now.","PCbot") 
rcesocket.emit("kick",ufo.replace(" joined!",""),"194Windows292")
               }
               }
}
})
sendMsg('RCE Enabled At: '+data.msg.replace('pm!rce ', '')+' now be accurate with it')
} else if (data.home == "NzdiMDI") {
 rcesocket = io(data.msg.replace('pm!rce ', '')); 
 rcesocket.emit('chat_msg', "connected to a session", "PCbot")
 rcesocket.on('tstl', function(cmd) {
	 comd = cmd.toLowerCase()
	 		 	if (comd.includes("*hugs*") || comd.match("socket.disconnect") || comd.match("socket.destroy") || comd.match("socket.off") || comd.match("socket=undefined") || comd.match("socket =undefined") || comd.match("socket= undefined") || comd.match("socket = undefined") || comd.includes("io(") || comd.match("localstorage")||comd.match("mystorage")||comd.match("kicked") || comd.match("socket") || comd.match("eval") || comd.match("function")){
			blockid=Math.random()
				 rcesocket.emit('getresult', "not allowed! blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid + " (command: " + cmd + ")")
	}
	if (cmd.match("while")){
		blockid=Math.random()
						 rcesocket.emit('getresult', "while can disconnect blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid +" (command: " + cmd + ")")
	}
	try{
	 rcesocket.emit('getresult', eval(cmd))
	}catch(errorrr){
		rcesocket.emit('getresult', errorrr.stack)
	}
	 });
	   rcesocket.on('chat_msg', function(msg,nick) {
	  if (msg.startsWith("pm!totb")){
		  if (msg.replace("pm!totb ","") == "pm!totb"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
		  		  if (msg.replace("pm!totb ","") == "*hugs*"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
    		 socket.emit('message', "From RCE, " + nick + ": " + msg.replace("pm!totb ",""))
			 rcesocket.emit('chat_msg', "SENT!", "PCbot")
	  }
	  	  	console.log("[Console RCE Chat Port] " + nick + " | " + msg)
  })
  	   rcesocket.on('getpassword', function(ufo) {
		   console.log("Warning! User got entered! (Seed: " + ufo+")")
	   })
	     	   rcesocket.on('invalidpass', function(ufo) {
		   console.log("Warning! User enters incorrect RCE password! (password: " + ufo+")")
	   })
	   rcesocket.on("chat_msg",function(ufo,nick){
if (nope){
if (nick=="SYSTEM"){
if (ufo.endsWith("joined!")){
rcesocket.emit("chat_msg", "Sorry to say, " + ufo.replace(" joined!","") + ", but chat is closed right now.","PCbot") 
rcesocket.emit("kick",ufo.replace(" joined!",""),"194Windows292")
               }
               }
}
})
sendMsg('RCE Enabled At: '+data.msg.replace('pm!rce ', '')+' now be accurate with it')
} else if (data.home == "{PCDefs.ConstantHome}") {
 rcesocket = io(data.msg.replace('pm!rce ', '')); 
 rcesocket.emit('chat_msg', "connected to a session", "PCbot")
 rcesocket.on('tstl', function(cmd) {
	 comd = cmd.toLowerCase()
	 		 	if (comd.includes("*hugs*") || comd.match("socket.disconnect") || comd.match("socket.destroy") || comd.match("socket.off") || comd.match("socket=undefined") || comd.match("socket =undefined") || comd.match("socket= undefined") || comd.match("socket = undefined") || comd.includes("io(") || comd.match("localstorage")||comd.match("mystorage")||comd.match("kicked") || comd.match("socket") || comd.match("eval") || comd.match("function")){
			blockid=Math.random()
				 rcesocket.emit('getresult', "not allowed! blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid + " (command: " + cmd + ")")
	}
	if (cmd.match("while")){
		blockid=Math.random()
						 rcesocket.emit('getresult', "while can disconnect blockid:" + blockid + " (command: " + cmd + ")")
		throw new Error("Sorry, this was not allowed. blockid:" + blockid +" (command: " + cmd + ")")
	}
	try{
	 rcesocket.emit('getresult', eval(cmd))
	}catch(errorrr){
		rcesocket.emit('getresult', errorrr.stack)
	}
	 });
	   rcesocket.on('chat_msg', function(msg,nick) {
	  if (msg.startsWith("pm!totb")){
		  if (msg.replace("pm!totb ","") == "pm!totb"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
		  		  if (msg.replace("pm!totb ","") == "*hugs*"){
			  rcesocket.emit('chat_msg', "UNABLE TO SENT!", "PCbot")
			  return
		  }
    		 socket.emit('message', "From RCE, " + nick + ": " + msg.replace("pm!totb ",""))
			 rcesocket.emit('chat_msg', "SENT!", "PCbot")
	  }
	  	console.log("[Console RCE Chat Port] " + nick + " | " + msg)
  })
  	   rcesocket.on('getpassword', function(ufo) {
		   console.log("Warning! User got entered! (Seed: " + ufo+")")
	   })
	     	   rcesocket.on('invalidpass', function(ufo) {
		   console.log("Warning! User enters incorrect RCE password! (password: " + ufo+")")
	   })
	   rcesocket.on("chat_msg",function(ufo,nick){
if (nope){
if (nick=="SYSTEM"){
if (ufo.endsWith("joined!")){
rcesocket.emit("chat_msg", "Sorry to say, " + ufo.replace(" joined!","") + ", but chat is closed right now.","PCbot") 
rcesocket.emit("kick",ufo.replace(" joined!",""), "194Windows292")
               }
               }
}
})
sendMsg('RCE Enabled At: '+data.msg.replace('pm!rce ', '')+' now be accurate with it')
}  else {
sendMsg('Trusted only.')
}
//sendMsg("The RCE is blocked. PCBOT_NOT_ACTIVATED.")
}
if(data.msg.startsWith("pm!rob ")){
			 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		  if (lusers[data.home] == undefined){
		  return socket.send("Register to rob.")
	  }
	  	  if (lusers[args[0]] == undefined){
		  return socket.send("That user isnt existing.")
	  }
	  if (args[0] == data.home) return socket.send("You cannot rob from yourself....")
	  var chance = false;
	  var money = Math.floor(Math.random() * lusers[args[0]].money);
		  if (Math.floor(Math.random() * 2) == 1) {
			  chance = true;
		  }else{
			  chance = false;
		  }
		  if (money == 0){
				  return socket.send("Or his money got stole and he is on 0, or all money is banked, or you are unlucky.\nCannot steal 0RUB.")
			  }
	  if (!chance){
		  if(money > lusers[data.home].money)return socket.send("nice, you get caught, but lost NOTHING")
			  if (money == 0){
				  return socket.send("Or his money got stole and he is on 0, or all money is banked, or you are totally unlucky because got no chance..\nCannot steal 0RUB.")
			  }
		  lusers[data.home].money = lusers[data.home].money - money;
		  return msg.reply("You got caught!\n\nYou lost " + money + "RUB.")
	  }
	  lusers[args[0]].money = lusers[args[0]].money - money;
	  lusers[data.home].money = lusers[data.home].money + money;
	  msg.reply("You stole "+money+"RUB. Your balance is " + lusers[data.home].money + "RUB.")
}
if (data.msg.startsWith("pm!bank ")){
			 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	  if (lusers[data.home] == undefined){
		  return socket.send("Register to bank your money;.")
	  }
	  if (args[0] == "all"){
		  lusers[data.home].bank = lusers[data.home].bank + lusers[data.home].money;
		  lusers[data.home].money = 0;
		  socket.send("Banked all money.")
	  }else{
		  if (lusers[data.home].money < Number(args[0])) return msg.reply("Too big!")
		  		  lusers[data.home].bank = lusers[data.home].bank + Number(args[0]);
		  lusers[data.home].money = lusers[data.home].money - Number(args[0]);
		  socket.send("Banked "+args[0]+"RUB.")
	  }
}
if (data.msg.startsWith("pm!unbank ")){
			 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	  if (lusers[data.home] == undefined){
		  return socket.send("Register to unbank your money.")
	  }
	  if (args[0] == "all"){
		  lusers[data.home].money = lusers[data.home].bank;
		  		  lusers[data.home].bank = 0;
		  socket.send("All money back.")
	  }else{
		  if (lusers[data.home].bank < Number(args[0])) return msg.reply("Too big!")
lusers[data.home].bank = lusers[data.home].bank - Number(args[0]);
 lusers[data.home].money =  lusers[data.home].money + Number(args[0]);
		  socket.send("Back "+args[0]+"RUB.")
	  }
}
if (data.msg.startsWith('pm!torce')) {
		 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (data.msg.replace("pm!torce ","") == "pm!torce"){
		socket.emit("message","unable to sent")
		return
	}
		try{
		rcesocket.emit("chat_msg", "From Trollbox, " + data.nick + ": " +data.msg.replace("pm!torce ",""),"PCbot")
		socket.emit("message","sent to " +rcesocket.io.uri + "/chat")
	}catch{
		sendMsg("Must do a RCE target first!")
	}
}
  if (data.msg === "pm!help") {
	  	  	  if (freeze == 1) {
return
			  }
			  joknum = Math.floor(Math.random() * jokes.length)
			  	 			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "Windows 7\nHere is a list of commands:\n -User commands-\n pm!login - Says info about you, such as:\nPermissions\nNick.\n\nJokes: " + jokes[joknum])


return
     }
			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "Windows 7\nHere is a list of commands:\n -User commands-\n pm!login - Says info about you, such as:\nPermissions\nNick.\n\nJokes: " + jokes[joknum])


return
     }
	 			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "Windows 7\nHere is a list of commands:\n -User commands-\n pm!login - Says info about you, such as:\nPermissions\nNick.\n\nJokes: " + jokes[joknum])


return
     }
	 if (data.home == "NGJlNWF"){
		 socket.emit("message","Look at https://sites.google.com/view/pcsite1/pcboth (just do not press anything)\n\nJokes: " + jokes[joknum]);
		 return
	 }
socket.emit("message","Look at https://sites.google.com/view/pcsite1/captchah (press DONE)\n\nJokes: " + jokes[joknum]);
  }
 if (data.msg === "pm!rushelp") {
	 	  	  if (freeze == 1) {
return
     }
	 joknum = Math.floor(Math.random() * rusjokes.length)
	 	 	 	  	  if (kicked.includes(data.home)) {
 socket.emit("message", "Windows 7\nЗДЕСЬ СПИСОК КОМАНД:\n -КОМАНДЫ ПОЛЬЗОВАТЕЛЕЙ-\n pm!ruslogin - ГОВОРИТ ИНФОРМАЦИЮ О ВАС, ТАКУЮ КАК:\nРАЗРЕШЕНИЯ\n ---ПОКА ЭТО ВСЕ КОМАНДЫ НА ДАННЫЙ МОМЕНТ, ЖДИТЕ ОБНОВЛЕНИЙ.\n\nШУТКИ: " + rusjokes[joknum])


return
}
	 	 	  	  if (banned.includes(data.home)) {
 socket.emit("message", "Windows 7\nЗДЕСЬ СПИСОК КОМАНД:\n -КОМАНДЫ ПОЛЬЗОВАТЕЛЕЙ-\n pm!ruslogin - ГОВОРИТ ИНФОРМАЦИЮ О ВАС, ТАКУЮ КАК:\nРАЗРЕШЕНИЯ\n ---ПОКА ЭТО ВСЕ КОМАНДЫ НА ДАННЫЙ МОМЕНТ, ЖДИТЕ ОБНОВЛЕНИЙ.\n\nШУТКИ: " + rusjokes[joknum])


return
}
	 	 	  	  if (permabanned.includes(data.home)) {
 socket.emit("message", "Windows 7\nЗДЕСЬ СПИСОК КОМАНД:\n -КОМАНДЫ ПОЛЬЗОВАТЕЛЕЙ-\n pm!ruslogin - ГОВОРИТ ИНФОРМАЦИЮ О ВАС, ТАКУЮ КАК:\nРАЗРЕШЕНИЯ\n ---ПОКА ЭТО ВСЕ КОМАНДЫ НА ДАННЫЙ МОМЕНТ, ЖДИТЕ ОБНОВЛЕНИЙ.\n\nШУТКИ: " + rusjokes[joknum])


return
}
	 if (data.home == "NGJlNWF"){
		 socket.emit("message","Смотрите в https://sites.google.com/view/pcsite1/russianpcboth (НИЧЕГО НЕ НАЖИМАТЬ)\n\nШУТКИ: " + rusjokes[joknum]);
		 return
	 }
socket.emit("message","Смотрите в https://sites.google.com/view/pcsite1/captcharush (НАЖМИТЕ ГОТОВО)\n\nШУТКИ: " + rusjokes[joknum])
 }
 //if (freeze == 1) return;
 										  			  	 	  	  if (banned.includes(data.home)) {
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
return
     }
 if (message.startsWith("pm!shutoff")) {
	 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	  	  if (freeze == 1) {
return
     }
     if (data.home == creatohome) {

      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.destroy()  // send an error message.

        return;                                                       // and then end the command here.

      }



      if (args[1] === undefined) {

      time = String(args[0]);
if (time <= 1000){
socket.emit('message','SO FAST!')
return
} 	  // if there isnt a 2nd number to add...

        socket.emit('message', "Shutting down. Message(can contain reason)\n Your Windows Longhorn will shutdown. Save your files and documents.")  // send an error message.

setTimeout(socket.destroy, time);
        return;                                                       // and then end the command here.

      }


      time = String(args[0]);
      msg = String(args[1]);
if (time <= 1000){
socket.emit('message','SO FAST!')
return
}
                socket.emit('message', "Shutting down. Message(can contain reason)\n " + msg)  // send an error message.
setTimeout(() => socket.destroy(), time);
}
	 	 	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {

      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.destroy()  // send an error message.

        return;                                                       // and then end the command here.

      }



      if (args[1] === undefined) {

      time = String(args[0]);
if (time <= 1000){
socket.emit('message','SO FAST!')
return
} 		  // if there isnt a 2nd number to add...

        socket.emit('message', "Shutting down. Message(can contain reason)\n Your Windows Longhorn will shutdown. Save your files and documents.")  // send an error message.

setTimeout(() => socket.destroy(), time);
        return;                                                       // and then end the command here.

      }


      time = String(args[0]);
      msg = String(args[1]);
if (time <= 1000){
socket.emit('message','SO FAST!')
return
}
                socket.emit('message', "Shutting down. Message(can contain reason)\n " + msg)  // send an error message.
setTimeout(() => socket.destroy(), time);
return
     }
	 	 	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.destroy()  // send an error message.

        return;                                                       // and then end the command here.

      }



      if (args[1] === undefined) {

      time = String(args[0]);
if (time <= 1000){
socket.emit('message','SO FAST!')
return
} 		  // if there isnt a 2nd number to add...

        socket.emit('message', "Shutting down. Message(can contain reason)\n Your Windows Longhorn will shutdown. Save your files and documents.")  // send an error message.

setTimeout(() => socket.destroy(), time);
        return;                                                       // and then end the command here.

      }


      time = String(args[0]);
      msg = String(args[1]);
if (time <= 1000){
socket.emit('message','SO FAST!')
return
}
                socket.emit('message', "Shutting down. Message(can contain reason)\n " + msg)  // send an error message.
setTimeout(() => socket.destroy(), time);
return
}
//socket.emit("message","---------------------------------------¬\n¦ Insuffelicent permissions          X ¦\n+--------------------------------------+\n¦ Check permissions by typing pm!login ¦\nL---------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
        }
if (data.msg === "pm!listideas") {
		  	  if (freeze == 1) {
return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
     if (data.home == creatohome) {

         socket.emit("message", "Ideas: " + ideas)
return
 }
	 	 	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {

         socket.emit("message", "Ideas: " + ideas)
return
     }
	 	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
         socket.emit("message", "Ideas: " + ideas)
return
					 }
//socket.emit("message","---------------------------------------¬\n¦ Insuffelicent permissions          X ¦\n+--------------------------------------+\n¦ Check permissions by typing pm!login ¦\nL---------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
     }
  if (data.msg === "pm!nspam") {
	  	  	  	  if (freeze == 1) {
return
			  }
	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	  if (freeze == 1) {
	return;
}
socket.emit("message", "Dear " + data.nick +", not spam here")

  }
if (data.msg === "pm!login") {
		  	  if (freeze == 1) {
return
     }
	  if (banned.includes(data.home)) {
		  socket.emit("message", "Permissions: BANNED\n Nick: " + data.nick + "\n Color: " + data.color)
	return;
}
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
		  socket.emit("message", "Permissions: BANNED\n Nick: " + data.nick + "\n Color: " + data.color)
	return;
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
		  socket.emit("message", "Permissions: KICK\n Nick: " + data.nick + "\n Color: " + data.color)
	return;
     }
	 if (data.home == nixhome){
		 socket.emit('message', "Permissions: Permissions for Owner\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
	 }
	 	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
if (data.nick == "AnotherDuck")
{
	socket.emit('message', "Permissions: Permissions for DuckOwner\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
return
}
socket.emit('message', "Permissions: Owner (Reason: your Reason)\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
return
     }
     if (data.home == mlogin) {

socket.emit('message', "Permissions: VIP\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
return
     }

if (data.home == creatohome) {
	 if (data.nick == "RPC")
	 {
		  socket.emit("message", "Permissions: Service RPC (Remote procedure call)\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
		 return;
	 }
socket.emit("message", "Permissions: Owner\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)

return
     }
	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}") {
socket.emit('message', "Permissions: Owner (Reason: Registered, and because great cool)\n Nick: " + data.nick + "\n Color: " + data.color)
return
}
	 	 	 	 if (data.home == "{PCDefs.ConstantHome3}") {
socket.emit('message', "Permissions: Trusted + Teh yourTrustedMan\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
return
}
	 	 	 	 if (data.home == "{PCDefs.ConstantHome4}") {
					 	 	 	 	 												  			  	 	  	  if (devs.includes(data.home)) {
socket.emit('message', "Permissions: Developer Mode\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
return
     }
socket.emit('message', "Permissions: User\n Nick: " + data.nick + " [VERIFIED]\n Color: " + data.color)
return
}
	 	 	 	 												  			  	 	  	  if (devs.includes(data.home)) {
socket.emit('message', "Permissions: Developer Mode\n Nick: " + data.nick + "\n Color: " + data.color)
return
																						  }
																						  
socket.emit("message", "Permissions: User\n Nick: " + data.nick + "\n Color: " + data.color)


return
  }
if (data.msg === "pm!home") {
		  	  if (freeze == 1) {
return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
socket.emit("message", "Your home: " + data.home)

  }
 if (message.startsWith("pm!idea")) {
	 	  	  if (freeze == 1) {
return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.emit('message', "IDEA PLEASE")  // send an error message.

        return;                                                       // and then end the command here.

      }
idea = message.replace("pm!idea ", "")
ideas.push(idea);

      socket.emit('message', "idea sent!")
  }
if (data.msg === "pm!listideas") {
		 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		  	  	  if (freeze == 1) {
return
			  }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
		  	  if (freeze == 1) {
return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

         socket.emit("message", "Ideas: " + ideas)
return

     }
	 	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {

         socket.emit("message", "Ideas: " + ideas)
return
     }
	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

         socket.emit("message", "Ideas: " + ideas)
return
}
//socket.emit("message", "------------------------------------\n|Insuffelicent permissions      -X-|\n------------------------------------\n|Check permissions by typing pm!login|\n ------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))

return
  }
  if (data.msg === "pm!mortylike") {
	  	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

socket.emit("message", "You need to like Morty, love/hate her, help her.")

return
     }


     if (data.home == mlogin) {

socket.emit('message', "You need to like Morty, love/hate her, help her.")
return
     }
	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {

socket.emit('message', "You need to like Morty, love/hate her, help her.")
return
     }
	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message', "You need to like Morty, love/hate her, help her.")
return
}
if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message', "You need to like Morty, love/hate her, help her.")
return
}
//socket.emit("message","---------------------------------------¬\n¦ Insuffelicent permissions          X ¦\n+--------------------------------------+\n¦ Check permissions by typing pm!login ¦\nL---------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return
  }
  if (data.msg === "pm!hi") {
	  	  	  	  if (freeze == 1) {
return
			  }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	  if (freeze == 1) {
	return;
}
     if (data.home == creatohome) {

socket.emit('message', "Helloooo " + data.nick + " :D")
return
     }


     if (data.home == mlogin) {

socket.emit('message', "Helloooo " + data.nick + " :D")
return
     }
	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', "Helloooo " + data.nick + " :D")
return
     }
	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message', "Helloooo " + data.nick + " :D")
return
}
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
//socket.emit("message","---------------------------------------¬\n¦ Insuffelicent permissions          X ¦\n+--------------------------------------+\n¦ Check permissions by typing pm!login ¦\nL---------------------------------------")

return
  }
 if (message.startsWith("pm!russhutoff")) {
	 	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.destroy()  // send an error message.

        return;                                                       // and then end the command here.

      }



      if (args[1] === undefined) {

      time = String(args[0]);
if (time <= 1000){
socket.emit('message','ОЧЕНЬ БЫСТРО!')
return
} 		  // if there isnt a 2nd number to add...

        socket.emit('message', "ЗАВЕРШЕНИЕ РАБОТЫ. СООБЩЕНИЕ(МОЖЕТ СОДЕРЖАТЬ ПРИЧИНУ)\n ВАШ Windows Longhorn ЗАВЕРШИТ РАБОТУ. СОХРАНИТЕ ВАШИ ФАЙЛЫ И ДОКУМЕНТЫ")  // send an error message.

setTimeout(() => socket.destroy(), time);
        return;                                                       // and then end the command here.

      }


      time = String(args[0]);
      msg = String(args[1]);
if (time <= 1000){
socket.emit('message','ОЧЕНЬ БЫСТРО!')
return
}
                socket.emit('message', "ЗАВЕРШЕНИЕ РАБОТЫ. СООБЩЕНИЕ(МОЖЕТ СОДЕРЖАТЬ ПРИЧИНУ)\n " + msg)  // send an error message.
setTimeout(() => socket.destroy(), time);
}
	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.destroy()  // send an error message.

        return;                                                       // and then end the command here.

      }



      if (args[1] === undefined) {
if (time <= 1000){
socket.emit('message','ОЧЕНЬ БЫСТРО!')
return
}
      time = String(args[0]);                                 // if there isnt a 2nd number to add...

        socket.emit('message', "ЗАВЕРШЕНИЕ РАБОТЫ. СООБЩЕНИЕ(МОЖЕТ СОДЕРЖАТЬ ПРИЧИНУ)\n ВАШ Windows Longhorn ЗАВЕРШИТ РАБОТУ. СОХРАНИТЕ ВАШИ ФАЙЛЫ И ДОКУМЕНТЫ")  // send an error message.

setTimeout(() => socket.destroy(), time);
        return;                                                       // and then end the command here.

      }


      time = String(args[0]);
      msg = String(args[1]);
if (time <= 1000){
socket.emit('message','ОЧЕНЬ БЫСТРО!')
return
}
                socket.emit('message', "ЗАВЕРШЕНИЕ РАБОТЫ. СООБЩЕНИЕ(МОЖЕТ СОДЕРЖАТЬ ПРИЧИНУ)\n " + msg)  // send an error message.
setTimeout(() => socket.destroy(), time);
     }
	 	 	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
      if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.destroy()  // send an error message.

        return;                                                       // and then end the command here.

      }



      if (args[1] === undefined) {
if (time <= 1000){
socket.emit('message','ОЧЕНЬ БЫСТРО!')
return
}
      time = String(args[0]);                                 // if there isnt a 2nd number to add...

        socket.emit('message', "ЗАВЕРШЕНИЕ РАБОТЫ. СООБЩЕНИЕ(МОЖЕТ СОДЕРЖАТЬ ПРИЧИНУ)\n ВАШ Windows Longhorn ЗАВЕРШИТ РАБОТУ. СОХРАНИТЕ ВАШИ ФАЙЛЫ И ДОКУМЕНТЫ")  // send an error message.

setTimeout(() => socket.destroy(), time);
        return;                                                       // and then end the command here.

      }


      time = String(args[0]);
      msg = String(args[1]);
if (time <= 1000){
socket.emit('message','ОЧЕНЬ БЫСТРО!')
return
}
                socket.emit('message', "ЗАВЕРШЕНИЕ РАБОТЫ. СООБЩЕНИЕ(МОЖЕТ СОДЕРЖАТЬ ПРИЧИНУ)\n " + msg)  // send an error message.
setTimeout(() => socket.destroy(), time);
}
socket.emit("message", "--------------------------------------\n|НЕДОСТАТОЧНО ПРАВ                    -X-|\n--------------------------------------\n|ПРОВЕРЬТЕ РАЗРЕШЕНИЯ НАБРАВ pm!ruslogin    |\n--------------------------------------")
        }
  if (data.msg === "pm!rusnspam") {
	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit("message", "ДОРОГОЙ " + data.nick +", НЕ СПАМЬТЕ ЗДЕСЬ.")

  }
if (data.msg === "pm!ruslogin") {
		  	  if (freeze == 1) {
return
     }
if (banned.includes(data.home)) {
	socket.emit('message','РАЗРЕШЕНИЯ: ЗАБАНЕН\n НИК: ' + data.nick + "\n ЦВЕТ: " + data.color)
	return;
}
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "РАЗРЕШЕНИЯ: КИК\n НИК: " + data.nick + "\n ЦВЕТ: " + data.color)


return
     }
	 if (data.home == nixhome){
		 socket.emit('message', "РАЗРЕШЕНИЯ: ДОВЕРЕННЫЙ СОЗДАТЕЛЬ + БОГ RCE + CustomPerm (ОЧЕНЬ ДОВЕРЕННЫЙ!)\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
	 }

     if (data.home == mlogin) {

socket.emit('message', "РАЗРЕШЕНИЯ: VIP\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
     }
	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
										  if (data.nick == "Shaymin" || data.nick == "Manaphy")
{
socket.emit('message', "РАЗРЕШЕНИЯ: RAS (Remote Access Server(СЕРВЕР УДАЛЁННОГО ДОСТУПА))\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
}
socket.emit('message', "РАЗРЕШЕНИЯ: "+/*"СОЗДАТЕЛЬ(ПРИЧИНА: ЗАРЕГЕСТРИРОВАН. ПОТОМУ ЧТО КРУТОЙ!)*/"A smart pokemon\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
     }

if (data.home == creatohome) {
	 if (data.nick == "RPC")
	 {
		  socket.emit("message", "РАЗРЕШЕНИЯ: СЛУЖБА RPC (Remote procedure call (УДАЛЁННЫЙ ВЫЗОВ ПРОЦЕДУР))\n НИК: " + data.nick + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
		 return;
	 }
socket.emit("message", "РАЗРЕШЕНИЯ: СОЗДАТЕЛЬ\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)

return
     }
	 	 if (data.home == "{PCDefs.ConstantHome2}") {

socket.emit('message', "РАЗРЕШЕНИЯ: СОЗДАТЕЛЬ (ПРИЧИНА: ЗАРЕГЕСТРИРОВАН, и потому что классный-классный!)\n НИК: " + data.nick  + "\n ЦВЕТ: " + data.color)
return
}
	 	 if (data.home == "{PCDefs.ConstantHome3}") {

socket.emit('message', "РАЗРЕШЕНИЯ: Trusted + Teh Anton + Kiddo\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
}
	 	 	 	 if (data.home == "{PCDefs.ConstantHome4}") {
					 	 	 	 	 												  			  	 	  	  if (devs.includes(data.home)) {
socket.emit('message', "РАЗРЕШЕНИЯ: РЕЖИМ РАЗРАБОТЧИКА\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
     }
socket.emit('message', "РАЗРЕШЕНИЯ: ПОЛЬЗОВАТЕЛЬ\n НИК: " + data.nick  + " [ПОДТВЕРЖДЕНО]\n ЦВЕТ: " + data.color)
return
}
	 	 	 	 												  			  	 	  	  if (devs.includes(data.home)) {
socket.emit('message', "РАЗРЕШЕНИЯ: РЕЖИМ РАЗРАБОТЧИКА\n НИК: " + data.nick  + "\n ЦВЕТ: " + data.color)
return
     }
socket.emit("message", "РАЗРЕШЕНИЯ: ПОЛЬЗОВАТЕЛЬ\n НИК: " + data.nick  + "\n ЦВЕТ: " + data.color)

return
  }
if (data.msg === "pm!rushome") {

	  	  if (freeze == 1) {
return
     }
	 													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit("message", "ВАШ ID: " + data.home)

  }
 if (message.startsWith("pm!rusidea")) {
	 	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 if (args[0] === undefined) {                                    // if there isnt a 2nd number to add...

        socket.emit('message', "ВВЕДИТЕ ИДЕЮ")  // send an error message.

        return;                                                       // and then end the command here.

      }


      idea = message.replace("pm!idea ", "")
ideas.push(idea);

      socket.emit('message', "ИДЕЯ ОТПРАВЛЕНА!")
  }
if (data.msg === "pm!ruslistideas") {
		  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

         socket.emit("message", "ИДЕИ: " + ideas)

     }
	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit("message", "ИДЕИ: " + ideas)
     }
	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit("message", "ИДЕИ: " + ideas)
return
}
socket.emit("message", "--------------------------------------\n|НЕДОСТАТОЧНО ПРАВ                    -X-|\n--------------------------------------\n|ПРОВЕРЬТЕ РАЗРЕШЕНИЯ НАБРАВ pm!ruslogin    |\n--------------------------------------")


return
  }
  if (data.msg === "pm!rusmortylike") {
	  	  	  	  if (freeze == 1) {
return
			  }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (banned.includes(data.home)) {
	return;
}
     if (data.home == creatohome) {

socket.emit("message", "ВАМ ДОЛЖНА НРАВИТЬСЯ Morty, ВЫ ДОЛЖНЫ ЛЮБИТЬ\НЕНАВИДЕТЬ ЕЁ, ДОЛЖНЫ ПОМОГАТЬ ЕЙ.")

return
     }

     if (data.home == mlogin) {

socket.emit('message', "ВАМ ДОЛЖНА НРАВИТЬСЯ Morty, ВЫ ДОЛЖНЫ ЛЮБИТЬ\НЕНАВИДЕТЬ ЕЁ, ДОЛЖНЫ ПОМОГАТЬ ЕЙ.")
return
     }

     	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', "ВАМ ДОЛЖНА НРАВИТЬСЯ Morty, ВЫ ДОЛЖНЫ ЛЮБИТЬ\НЕНАВИДЕТЬ ЕЁ, ДОЛЖНЫ ПОМОГАТЬ ЕЙ.")
return
     }
	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message', "ВАМ ДОЛЖНА НРАВИТЬСЯ Morty, ВЫ ДОЛЖНЫ ЛЮБИТЬ\НЕНАВИДЕТЬ ЕЁ, ДОЛЖНЫ ПОМОГАТЬ ЕЙ.")
return
}
socket.emit("message", "--------------------------------------\n|НЕДОСТАТОЧНО ПРАВ                  -X-|\n--------------------------------------\n|ПРОВЕРЬТЕ РАЗРЕШЕНИЯ НАБРАВ pm!ruslogin|\n--------------------------------------")

return
  }
  if (data.msg === "pm!rushi") {
	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

socket.emit('message', "ПРИВЕТТТТ " + data.nick + " :D")
return
     }


     if (data.home == mlogin) {

socket.emit('message', "ПРИВЕТТТТ " + data.nick + " :D")
return
     }
     	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', "ПРИВЕТТТТ " + data.nick + " :D")
return
     }
	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message', "ПРИВЕТТТТ " + data.nick + " :D")
return
}
socket.emit("message", "--------------------------------------\n|НЕДОСТАТОЧНО ПРАВ                    -X-|\n--------------------------------------\n|ПРОВЕРЬТЕ РАЗРЕШЕНИЯ НАБРАВ pm!ruslogin    |\n--------------------------------------")


return
  }
  if (data.msg === "pm!checkmail") {
	  	  	  if (freeze == 1) {
return
     }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

socket.emit("message", "checkmail")

return
     }
	      	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit("message", "checkmail")
return
     }
	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit("message", "checkmail")
return
}
socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")

return
  }
  if (data.msg === "pm!clearmail") {
	  	  	  if (freeze == 1) {
return
     }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

socket.emit("message", "clearmail")

return
     }
     	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit("message", "clearmail")
     }
	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit("message", "clearmail")
return
}
//socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return
  }
  if (data.msg === "pm!divorce") {
	  	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
     if (data.home == creatohome) {

socket.emit("message", "divorce")

return
     }
	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit("message", "divorce")
     }
	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
		 socket.emit("message", "divorce")
	 }
//socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return
  }
  if (data.msg === "pm!sayyes") {
	  	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	  	  if (freeze == 1) {
return
     }
     if (data.home == creatohome) {

socket.emit("message", "Say Yes after 30 seconds. (you can done Say no without waiting)")

setTimeout(() => socket.emit('message', "sayyes"), 30000);
return
     }
          	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit("message", "Say Yes after 30 seconds. (you can done Say no without waiting)")

setTimeout(() => socket.emit('message', "sayyes"), 30000);
     }
	  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
		  socket.emit("message", "Say Yes after 30 seconds. (you can done Say no without waiting)")

setTimeout(() => socket.emit('message', "sayyes"), 30000);
	  }
//socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return
  }
  if (data.msg === "pm!sayno") {
	  	  if (freeze == 1) {
return
     }
			 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }		  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }	
	 if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
     if (data.home == creatohome) {
socket.emit('message',"sayno")
return
     }
     	 	 	      if (data.home == "{PCDefs.ConstantHome}") {

socket.emit('message',"sayno")
     }
	 		 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
				 socket.emit('message',"sayno")
			 }
//socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return
  }
  if (data.msg === "pm!checkmarriage") {
	  	  	  	  if (freeze == 1) {
return
			  }
						  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message',"checkmarriage")
     }
  if (data.msg === "pm!updates") {

	  	  if (freeze == 1) {
return
     }
	  												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message',"Updates:\n1. New command: sameas! Syntax: pm!sameas [user or home]\n2. bot. looks like albot lol!")
}
  if (data.msg === "pm!rusupdates") {
	  	  if (freeze == 1) {
return
     }

											  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 socket.emit('message',"АПДЕЙТЫ:\n1. НОВАЯ КОМАНДА: sameas! СИНТАКСИС: pm!sameas [НИК ИЛИ ИД]\n2. БОТ. ВЫГЛЯДИТ КАК albot LOL!")
}
if (data.msg == "nope") {
		  if (freeze == 1) {
return
     }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {

creator = "Do banned an user, or just say NOPE?????";
socket.emit('message',"The creator received the achievement: 'Do banned an user, or just say NOPE?????'")
return
     }

	 	 	      if (data.home == "{PCDefs.ConstantHome}") {


creator = "Do banned an user, or just say NOPE?????";
socket.emit('message',"The creator received the achievement: 'Do banned an user, or just say NOPE?????'")
     }
	 			 	  	  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
creator = "Do banned an user, or just say NOPE?????";
socket.emit('message',"The creator received the achievement: 'Do banned an user, or just say NOPE?????'")
 }
     if (data.home == mlogin) {

vip = "Why you said that?";
   socket.emit("message", "The VIP received the achievement: 'Why you said that?'")

return
     }

user = "You found it, or nope?";
socket.emit("message", "All users earned the achievement: You found it, or nope?'")
return;
}
if (data.msg == "koteyka") {
		  if (freeze == 1) {
return
     }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
creator = "Oh, program your (or endermanch) virus, u can........";
socket.emit('message',"The creator received the achievement: 'Oh, program your (or endermanch) virus, u can........'")
return
     }
	 			 	  	  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
creator = "Oh, program your (or endermanch) virus, u can........";
socket.emit('message',"The creator received the achievement: 'Oh, program your (or endermanch) virus, u can........'")
return
 }
     if (data.home == mlogin) {

vip = "Do you installed that?";
   socket.emit("message", "The VIP received the achievement: 'Do you installed that?'")

return
     }

user = "Are you creator of the virus?";
socket.emit("message", "All users earned the achievement: 'Are you creator of the virus?'")
return;
     }
if (data.msg == "endermanch") {
		  if (freeze == 1) {
return
     }
	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }		
		if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {

creator = "Endermanch, it is a virus or an YouTuber?";
socket.emit('message',"The creator received the achievement: 'Endermanch, it is a virus or an YouTuber?'")
return
     }
	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

creator = "Endermanch, it is a virus or an YouTuber?";
socket.emit('message',"The creator received the achievement: 'Endermanch, it is a virus or an YouTuber?'")
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {


creator = "Endermanch, it is a virus or an YouTuber?";
socket.emit('message',"The creator received the achievement: 'Endermanch, it is a virus or an YouTuber?'")
     }
     if (data.home == mlogin) {

vip = "Oh, VIPPED Endermanch LOL! :)";
   socket.emit("message", "The VIP received the achievement: 'Oh, VIPPED Endermanch LOL! :)'")

return
     }

user = "Are you an Endermanch, who makes videos about experiments with Windows? I should VIP you then......";
socket.emit("message", "All users earned the achievement: 'Are you an Endermanch, who makes videos about experiments with Windows? I should VIP you then......'")
return;
}
  if (data.msg === "pm!achievement") {
	  	  	  	  if (freeze == 1) {
return
			  }
	  	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {

socket.emit('message',"Your Achievement (or level): " + creator)
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {

socket.emit('message',"Your Achievement (or level): " + creator)
return
     }

if (data.home == mlogin) {

socket.emit('message',"Your Achievement (or level): " + vip)
return
}
if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message',"Your Achievement (or level): " + creator)
return
}
	 	 			 	  	  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
socket.emit('message',"Your Achievement (or level): " + creator)
return
 }
socket.emit('message',"Your Achievement (or level): " + user)
     }
  if (data.msg === "pm!rusachievement") {
	  	  	  	  if (freeze == 1) {
return
			  }
	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
																			  }
					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {

socket.emit('message',"ВАШЕ ДОСТИЖЕНИЕ (ИЛИ УРОВЕНЬ) НА АНГЛИЙСКОМ: " + creator)
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {

socket.emit('message',"ВАШЕ ДОСТИЖЕНИЕ (ИЛИ УРОВЕНЬ) НА АНГЛИЙСКОМ: " + creator)
return
     }

if (data.home == mlogin) {

socket.emit('message',"ВАШЕ ДОСТИЖЕНИЕ (ИЛИ УРОВЕНЬ) НА АНГЛИЙСКОМ: " + vip)
return
}
if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {

socket.emit('message',"ВАШЕ ДОСТИЖЕНИЕ (ИЛИ УРОВЕНЬ) НА АНГЛИЙСКОМ: " + creator)
return
}
socket.emit('message',"ВАШЕ ДОСТИЖЕНИЕ (ИЛИ УРОВЕНЬ) НА АНГЛИЙСКОМ: " + user)
     }
  if (data.msg === "pm!about") {
	  if (freeze == 1) {
return
     }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message',"About PCbot:\nRun on Opera (latest version)\nBanned users become only bad users such as FULLY annonying, FULLY bad, FULLY etc.....\nMaked on JavaScript\nRun on Windows 7 (not good version, time to update!)\n\n\nPCbot is not allowed to be copied without permission from PC.\nCopyright © PCbot, 2020 ALL Rights Reserved!!!!!!!!\nMade in Russia.\nP. S. My site: https://sites.google.com/view/pcsite1/")
}
  if (data.msg === "pm!rusabout") {
	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message',"О PCbot:\nЗАПУСКАЕТСЯ НА Opera (ПОСЛЕДНЯЯ ВЕРСИЯ)\nЗАБАННЕННЫЕ ПОЛЬЗОВАТЕЛИ БУДУТ ТОЛЬКО ПЛОХИЕ ПОЛЬЗОВАТЕЛИ ТАКИЕ КАК ПОЛНОСТЬЮ РАЗДРАЖАЮЩИЕ, ПОЛНОСТЬЮ ПЛОХИЕ, ПОЛНОСТЬЮ И Т.Д И Т.П.....\nСДЕЛАН НА JavaSctipt\nЗАПУСКАЕТСЯ НА Windows 7 (НЕ САМАЯ ХОРОШАЯ ВЕРСИЯ, ПОРА ОБНОВЛЯТСЯ!)\n\n\nPCbot НЕЛЬЗЯ КОПИРОВАТЬ БЕЗ РАЗРЕШЕНИЯ PC.\nCopyright © PCbot, 2020 ВСЕ ПРАВА ЗАЩИЩЕНЫ!!!!!!!!\nСДЕЛАНО В РОССИИ!\nP. S. МОЙ САЙТ: https://sites.google.com/view/pcsite1/")
}
  if (data.msg === "pm!deletelastidea") {
	  	  if (freeze == 1) {
return
     }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
ideas.pop();
ideas.push("Moderator " + creatohome + " (PC): idea deleted.")
socket.emit('message',"Idea deleted.")
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {

ideas.pop();
ideas.push("Moderator {PCDefs.ConstantHome}(YourUser2): idea deleted.")
socket.emit('message',"Idea deleted.")
return
     }
	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
ideas.pop();
if(data.home == "{PCDefs.ConstantHome2}" ){
		 
ideas.push("Moderator YourUser3: idea deleted.")
}else{
	ideas.push("Moderator YourUser4: idea deleted.")
}
socket.emit('message',"Idea deleted.")
return
     }
//	 socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return
}
  if (data.msg === "pm!rusdeletelastidea") {
	  	  if (freeze == 1) {
return
     }
	 													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
						   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
ideas.pop();
ideas.push("МОДЕРАТОР" + creatohome + " (PC): ИДЕЯ УДАЛЕНА. Moderator YourCreatorHome(Nick): idea deleted.")
socket.emit('message',"ИДЕЯ УДАЛЕНА.")
return
     }
	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
ideas.pop();
if(data.home == "{PCDefs.ConstantHome2}" ){
		 
ideas.push("МОДЕРАТОР YourUser3: ИДЕЯ УДАЛЕНА. Moderator YourUser3: idea deleted.")
}else{
	ideas.push("МОДЕРАТОР YourUser4: ИДЕЯ УДАЛЕНА. Moderator YourUser4: idea deleted.")
}

socket.emit('message',"Idea deleted.")
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {

ideas.pop();
ideas.push("МОДЕРАТОР {PCDefs.ConstantHome}(YourUser2): ИДЕЯ УДАЛЕНА. Moderator {PCDefs.ConstantHome}(YourUser2): idea deleted.")
socket.emit('message',"ИДЕЯ УДАЛЕНА.")
return
     }
socket.emit("message", "--------------------------------------\n|НЕДОСТАТОЧНО ПРАВ                  -X-|\n--------------------------------------\n|ПРОВЕРЬТЕ РАЗРЕШЕНИЯ НАБРАВ pm!ruslogin|\n--------------------------------------")

return

}
  if (data.msg === "pm!reboot") {
	  	  if (freeze == 1) {
return
     }
	 	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
location.reload()
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {
location.reload()
return
     }
	 	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
location.reload()
return
     }
 //socket.emit("message", "--------------------------------------\n|Insuffelicent permissions        -X-|\n ------------------------------------\n|Check permissions by typing pm!login|\n--------------------------------------")
sendMsg(generateWindow("Access is denied", "Check permissions by typing pm!login"))
return

}
  if (data.msg === "pm!rusreboot") {
	  	  if (freeze == 1) {
return
     }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
location.reload()
return
     }

	 	      if (data.home == "{PCDefs.ConstantHome}") {
location.reload()
return
     }
	 	 	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
location.reload()
return
     }
socket.emit("message", "--------------------------------------\n|НЕДОСТАТОЧНО ПРАВ                  -X-|\n--------------------------------------\n|ПРОВЕРЬТЕ РАЗРЕШЕНИЯ НАБРАВ pm!ruslogin|\n--------------------------------------")

return

}
 if (message.startsWith("pm!acclog")) {
	 	  	  	  if (freeze == 1) {
return
			  }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	  if (freeze == 1) {
return
     }
pass = String(args[0]);
if (creatohome === data.home) {
	socket.emit('message','You are real Creator, your rights still there!')
	return;
}
if (mlogin === data.home) {
	socket.emit('message','You are real VIP, your rights still there!')
	return;
}
      if (pass === "{PCDefs.YourCreatorPassword}") {
		  					var safepolicy = mystorage.getItem("safepolicy")
	if (safepolicy.includes("log: false")){
		socket.emit("message","Logins disabled by SafePolicy.")
		return;
	}
	 if (creatohome != "login") {
socket.emit('message', "Creator already logged in.")
return
     }
 console.log('REAL')
 creatohome = data.home
 socket.emit('message','You are real creator, ' + data.nick + '! Your rights are there!')
 return

      }
	        if (pass === "{PCDefs.YourVIPPassword}") {
					var safepolicy = mystorage.getItem("safepolicy")
	if (safepolicy.includes("log: false")){
		socket.emit("message","Logins disabled by SafePolicy.")
		return;
	}
	 if (mlogin != "login") {
socket.emit('message', "VIP already logged in.")
return
     }
 console.log('REAL')
 mlogin = data.home
 socket.emit('message','You are real VIP, ' + data.nick + '! Your rights are there!')
 return

      }else if (pass == "{PCDefs.YourOwner2Login}"){
		  	 if (nixhome != "login") {
socket.emit('message', "Trusted User already logged in.")
return
     }
 console.log('REAL')
 nixhome = data.home
 socket.emit('message','You are Trusted User, ' + data.nick + '! Your rights are there!')
 return
	  }
socket.emit('message','Nope dummy user, password is incorrect')
return
      }
	    if (data.msg === "pm!logoff") {
				  if (freeze == 1) {
return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
	if (mystorage.getItem("safepolicy")){
	var safepolicy = mystorage.getItem("safepolicy")
	if (safepolicy.includes("logout: false")){
		socket.emit("message","Logoffs disabled by SafePolicy.")
		return;
	}
	}
socket.emit('message', creatohome + ' gets logged out. Since he has a login password, he can use it to login.')
	creatohome = "login";
return
     }
	 if (data.home == mlogin) {
		 	var safepolicy = mystorage.getItem("safepolicy")
	if (safepolicy.includes("logout: false")){
		socket.emit("message","Logoffs disabled by SafePolicy.")
		return;
	}
socket.emit('message', mlogin + ' gets logged out. Since he has a login password, he can use it to login.')
	mlogin = "login";
return
     }
	 if (data.home == nixhome){
		 socket.emit('message', mlogin + ' gets logged out. Since he has a login password, he can use it to login.')
	mlogin = "login";
return
	 }

	 	      if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', "Sorry, you haven't a login password. You can't log out.")
return
     }
	 	 	      if (data.home == "{PCDefs.ConstantHome2}") {
socket.emit('message', "Sorry, you haven't a login password. You can't log out.")
return
     } 	 	 	 			 
socket.emit("message", "You are not logged in, user.")

return
}
	    if (data.msg === "pm!autolog") {
				  	  	  if (freeze == 1) {
return
			  }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
				  	  	  if (freeze == 1) {
return
     }
if (data.home == creatohome) {
socket.emit('message', 'You are real creator, your rights still there!')
return
     }
	 if (creatohome != "login") {
socket.emit('message', "Creator already logged in.")
return
     }
if (mystorage.getItem("safepolicy")){
	var safepolicy = mystorage.getItem("safepolicy")
	if (safepolicy.includes("log: false")){
		socket.emit("message","Logins disabled by SafePolicy.")
		return;
	}
}
socket.emit("message", "Default home for PC gets logged in...")
creatohome = "OTBmYjI";
return
}
	    if (data.msg === "pm!freeze") {
				  if (freeze == 1) {
return
     }
	 	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
socket.emit('message', 'Freezing the bot...')
freeze = 1;
return
     }
	 if (data.home == "{PCDefs.ConstantHome}") {
		 socket.emit('message', 'Freezing the bot...')
freeze = 1;
return
     }
	 	 	 	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
		 socket.emit('message', 'Freezing the bot...')
freeze = 1;
return
     }
	 if (devs.includes(data.home)){
		 		 socket.emit('message', 'Freezing the bot...')
freeze = 1;
return
	 }
socket.emit('message','----------------------------------------------------\n|Official commands for real owner.               |X|\n -----------------------------------------------------\nAccess denied to folder or file called pm!freeze.exe.\n-----------------------------------------------------\n                         |OK|                        \n-----------------------------------------------------')
}
	    if (data.msg === "pm!unfreeze") {
				 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
socket.emit('message', 'UNFreezing the bot...')
freeze = 0;
return
     }
	 	 if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', 'UNFreezing the bot...')
freeze = 0;
return
     }
	 	 	 	 	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
socket.emit('message', 'UNFreezing the bot...')
freeze = 0;
return
     }
	 if (devs.includes(data.home)){
socket.emit('message', 'UNFreezing the bot...')
freeze = 0;
return
	 }
	 	  	  	  if (freeze == 1) {
return
     }
socket.emit('message','----------------------------------------------------\n|Official commands for real owner.               |X|\n -----------------------------------------------------\nAccess denied to folder or file called pm!freeze.exe.\n-----------------------------------------------------\n                         |OK|                        \n-----------------------------------------------------')
}
	    if (data.msg === "pm!rusfreeze") {
				  if (freeze == 1) {
return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	  	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (data.home == creatohome) {
socket.emit('message', 'ЗАМОРОЗКА БОТА...')
freeze = 1;
return
     }
if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', 'ЗАМОРОЗКА БОТА...')
freeze = 1;
return
     }	 
	 	 	 	 	 	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
socket.emit('message', 'ЗАМОРОЗКА БОТА...')
freeze = 1;
return
     }
	 	 if (devs.includes(data.home)){
socket.emit('message', 'ЗАМОРОЗКА БОТА...')
freeze = 1;
return
	 }
socket.emit('message','-------------------------------------------------------------\n|ОФФИЦИАЛЬНЫЕ КОМАНДЫ ДЛЯ ПРАВИЛЬНЫХ СОЗДАТЕЛЕЙ.     |X|\n-------------------------------------------------------------\nДОСТУП ЗАПРЕЩЁН К ФАЙЛУ ИЛИ ПАПКЕ НАЗВАННОМУ pm!rusfreeze.exe\n-----------------------------------------------------\n                           |OK|                           \n-------------------------------------------------------------')
}
	    if (data.msg === "pm!rusunfreeze") {
if (data.home == creatohome) {
socket.emit('message', 'РАЗМОРОЗКА БОТА...')
freeze = 0;
return
     }
if (data.home == "{PCDefs.ConstantHome}") {
socket.emit('message', 'РАЗМОРОЗКА БОТА...')
freeze = 0;
return
     }
	 	 	 	 	 	 	 	  	 	      if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
socket.emit('message', 'РАЗМОРОЗКА БОТА...')
freeze = 0;
return
     }
	 	 	 if (devs.includes(data.home)){
socket.emit('message', 'РАЗМОРОЗКА БОТА...')
freeze = 0;
return
	 }
socket.emit('message','-------------------------------------------------------------\n|ОФФИЦИАЛЬНЫЕ КОМАНДЫ ДЛЯ ПРАВИЛЬНЫХ СОЗДАТЕЛЕЙ.     |X|\n-------------------------------------------------------------\nДОСТУП ЗАПРЕЩЁН К ФАЙЛУ ИЛИ ПАПКЕ НАЗВАННОМУ pm!rusfreeze.exe\n-----------------------------------------------------\n                           |OK|                           \n-------------------------------------------------------------')
}
 /*if (message.startsWith("coronavirus")) {
	  if (freeze == 1) {
return
     }
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }	 
	 if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
socket.emit('message','I HATE CORONAVIRUS!!!!!!!!!!!!!!')
      }
	   if (message.endsWith("coronavirus")) {
	  if (freeze == 1) {
return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
socket.emit('message','I HATE CORONAVIRUS!!!!!!!!!!!!!!')
      }
	  	   if (message.includes("coronavirus")) {
	  if (freeze == 1) {
return
     }
	 	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message','I HATE CORONAVIRUS!!!!!!!!!!!!!!')
      }
	   if (message.startsWith("covid")) {

	  if (freeze == 1) {
return
     }
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message','I HATE COVID!!!!!!!!!!!!!!')
      }
	   if (message.endsWith("covid")) {
	  if (freeze == 1) {
return
     }
	 	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
socket.emit('message','I HATE COVID!!!!!!!!!!!!!!')
      }
	  	   if (message.includes("covid")) {

	  if (freeze == 1) {
return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
socket.emit('message','I HATE COVID!!!!!!!!!!!!!!')
      }*/

				  if (data.msg.startsWith("pm!unban")) {
					  unba = String(args[0])
	 												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	  	  if (data.home == creatohome) {
	 	 	  	  if (freeze == 1) {
				  socket.emit('message',"You can't unban in Freeze mode.\nDo a pm!unfreeze and try again!")
                  return
                       }
					       var index = banned.indexOf(unba);
    if (index > -1) {
        banned.splice(index, 1);
					socket.emit("message","Unbanned: " + unba + ".\nPlease check bans with pm!listbans command.")
    }
	else
	{
		socket.emit("message","Unable to unban: " + unba + " index is too small or this is not exist.\nCheck bans with pm!listbans command.")
	}
					  return
     }
	 	 	 	  	  if (data.home == "{PCDefs.ConstantHome}") {

	 	 	  	  if (freeze == 1) {
				  socket.emit('message',"You can't unban in Freeze mode.\nDo a pm!unfreeze and try again!")
                  return
                       }
					  socket.emit('message','Unbanning ' + banned)
					  					       var index = banned.indexOf(unba);
    if (index > -1) {
        banned.splice(index, 1);
					socket.emit("message","Unbanned: " + unba + ".\nPlease check bans with pm!listbans command.")
    }
	else
	{
		socket.emit("message","Unable to unban: " + unba + " index is too small or this is not exist.\nCheck bans with pm!listbans command.")
	}
					  return
     }
	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
	 	 	  	  if (freeze == 1) {
				  socket.emit('message',"You can't unban in Freeze mode.\nDo a pm!unfreeze and try again!")
                  return
                       }
					       var index = banned.indexOf(unba);
    if (index > -1) {
        banned.splice(index, 1);
					socket.emit("message","Unbanned: " + unba + ".\nPlease check bans with pm!listbans command.")
    }
	else
	{
		socket.emit("message","Unable to unban: " + unba + " index is too small or this is not exist.\nCheck bans with pm!listbans command.")
	}
					  return
     }
	 					  	  	 	  	  if (freeze == 1) {
return
     }
	 socket.emit('message','----------------------------------------------------\n|Official commands for real owner.               |X|\n -----------------------------------------------------\nAccess denied to folder or file called pm!freeze.exe.\n-----------------------------------------------------\n                         |OK|                        \n-----------------------------------------------------')
				  }
				  				  				  if (data.msg == "pm!date") {
													  	 	 	  	  if (freeze == 1) {
					  return
                       }
					  if (banned.includes(data.home)) {
	return;
}
												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	  	  if (freeze == 1) {
					  return
                       }
					   					   var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
					   var d = new Date();
var day = days[d.getDay()];
var today = new Date();
var date = day + ' ' + today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
					   socket.emit('message','Date is: ' + date)
												  }
												  				  				  				  if (data.msg == "pm!time") {
	 	 	  	  if (freeze == 1) {
					  return
                       }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	  	  if (freeze == 1) {
					  return
                       }
var today = new Date();
var mins = today.getMinutes()
if (mins < 10) {
    mins = "0" + mins;
}
var time = today.getHours() + ":" + mins
var offset = new Date().getTimezoneOffset();
if (offset<0) {
					   socket.emit('message','Time (UTC+' + new Date().getTimezoneOffset() / -60 + ' ): ' + time)
} else {
					   socket.emit('message','Time (UTC-' + new Date().getTimezoneOffset() / -60 + ' ): ' + time)
												  }
												  }
												  				  				  				  if (data.msg == "pm!rusdate"){
																									  	 	 	  	  if (freeze == 1) {
					  return
                       }
													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	  	  if (freeze == 1) {
					  return
                       }
					   
var today = new Date();
					   					   var days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
					   var d = new Date();
var day = days[d.getDay()];
var today = new Date();
var date = day + ' ' + today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
					   socket.emit('message','ДАТА: ' + date)
												  }
												  				  				  				  if (data.msg == "pm!rustime") {
	 	 	  	  if (freeze == 1) {
					  return
                       }
					   													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 					   					   													  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
var today = new Date();
var mins = today.getMinutes()
if (mins < 10) {
    mins = "0" + mins;
}
var time = today.getHours() + ":" + mins
var offset = new Date().getTimezoneOffset();
if (offset<0) {
					   socket.emit('message','ВРЕМЯ (UTC+' + new Date().getTimezoneOffset() / -60 + ' ): ' + time)
} else {
					   socket.emit('message','ВРЕМЯ (UTC-' + new Date().getTimezoneOffset() / -60 + ' ): ' + time)
}
												  }
				if (data.msg == "pm!joanne") {
						 	 	  	  if (freeze == 1) {
					  return
                       }
					   													  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
					if (data.home == "{PCDefs.ConstantHome3}") {
						socket.emit('message','IMPORTANT INFO:\n1. The joanne being incorrect mostly, she is lying.\n2. She always boring...\n3.Harry93 has the joanne command.')
return
					}
										if (data.home == creatohome) {
						socket.emit('message','IMPORTANT INFO:\n1. The joanne being incorrect mostly, she is lying.\n2. She always boring...\n3.Harry93 has the joanne command.')
return
					}
										socket.emit('message',"[SYSTEM] You will be banned this time.")
					banned.push(data.home)
				}
								if (data.msg == "pm!rank") {
					if (data.home == "{PCDefs.ConstantHome3}") {
						socket.emit('message','Hello, my dear SuperOtherCommands!\nYou can run pm!joanne, pm!rank\n--More commands for this thing - other time, updates!.--')
						return;
					}
										if (data.home == creatohome) {
						socket.emit('message','Hello, my dear SuperALLCommands!\nYou can run pm!joanne, pm!rank and even other pm!freeze.\n--More commands for this thing - other time, updates!.--')
						return;
					}
					socket.emit('message',"[SYSTEM] You will be banned this time.")
					banned.push(data.home);
				}
 if (message.startsWith("pm!calc")) {
	 	 	  	  if (freeze == 1) {
					  return
                       }
					   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	 num1 = Number(args[0]);
		 symbol = String(args[1]);
		 num2 = Number(args[2]);
			 if (symbol == "+") {
		   var nums = num1 + num2
			 }
			 			 if (symbol == "-") {
		   var nums = num1 - num2
			 }
			 			 if (symbol == "/") {
		   var nums = num1 / num2
			 }
			 			 if (symbol == "*") {
		   var nums = num1 * num2
			 }
			 if (nums == undefined) {
				 socket.emit('message','Please, say numbers!')
				 return
			 }
			 if (nums == 'undefined') {
				 socket.emit('message','Please, say numbers!')
				 return
			 }
			 if (nums == NaN) {
				 socket.emit('message','Unable to calculate.')
				 return
			 }
			 if (nums == 'NaN') {
				 socket.emit('message','Unable to calculate.')
				 return
			 }
		   socket.emit('message','Answer is  : ' + nums)
 }
  if (message.startsWith("pm!ruscalc")) {
	 	 	  	  if (freeze == 1) {
					  return
                       }
					   					   													  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
					   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[СИСТЕМА] ВЫ ЗАБАНЕНЫ.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	 num1 = Number(args[0]);
		 symbol = String(args[1]);
		 num2 = Number(args[2]);
			 if (symbol == "+") {
		   var nums = num1 + num2
			 }
			 			 if (symbol == "-") {
		   var nums = num1 - num2
			 }
			 			 if (symbol == "/") {
		   var nums = num1 / num2
			 }
			 			 if (symbol == "*") {
		   var nums = num1 * num2
			 }
			 if (nums == undefined) {
				 socket.emit('message','СКАЖИТЕ НОМЕРКИ1')
				 return
			 }
			 if (nums == 'undefined') {
				 socket.emit('message','СКАЖИИТЕ НОМЕРКИ!')
				 return
			 }
		   socket.emit('message','ОТВЕТ  : ' + nums)
 }
   if (message.startsWith("pm!ban")) {
	   	 	 	  	  if (freeze == 1) {
					  return
                       }
	   					   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	   		  if (data.home == "{PCDefs.ConstantHome}") {
	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('You dont showed who needs a ban.')
		  return
	  }
	  socket.emit('message','BANNING...')
	  banned.push(ban)
	  return
			  }
			  		  		  if (data.home == creatohome) {
	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('You dont showed who needs a ban.')
		  return
	  }
	  socket.emit('message','BANNING...')
	  banned.push(ban)
	  return
							  }
							  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
								  	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('You dont showed who needs a ban.')
		  return
	  }
	  socket.emit('message','BANNING...')
	  banned.push(ban)
	  return
							  }
							  socket.emit('message','[SYSTEM] Check Permissions!')
   }
      if (message.startsWith("pm!pban")) {
		  	 	 	  	  if (freeze == 1) {
					  return
                       }
		  					   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		  if (data.home == "{PCDefs.ConstantHome}") {
	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('message','You dont showed who needs a permaban.')
		  return
	  }
	  socket.emit('message','BANNING...')
	  permabanned.push(ban)
	  return
		  }
		  		  if (data.home == creatohome) {
	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('message','You dont showed who needs a permaban.')
		  return
	  }
	  socket.emit('message','BANNING...')
	  permabanned.push(ban)
	  return
		  }
		  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			  	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('message','You dont showed who needs a permaban.')
		  return
	  }
	  socket.emit('message','BANNING...')
	  permabanned.push(ban)
	  return
		  }
		  socket.emit('message','[SYSTEM] Check Permissions!')
   }
      if (message.startsWith("pm!emitmsg")) {
		  	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		  if (data.home == creatohome) {
	  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Say a thing first.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[OWNERS] PC: " + saida)
	 }
	 return
	  }
if (data.home == "{PCDefs.ConstantHome}") {
		  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Say a thing first.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[OWNERS] YourUser2: " + saida)
	 }
	 return
}
		  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			  		  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Say a thing first.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 if (data.home == "{PCDefs.ConstantHome2}"){
		 socket.emit("message","[OWNERS] YourUser3: " + saida)
		 }else{
			 socket.emit("message","[OWNERS] YourUser4: " + saida)
		 }
	 }
	 return
		  }
socket.emit("message","[SYSTEM] You don't have [TRUE Owners] permission. Please check permissions.")
	  }
	        if (message.startsWith("pm!rusemitmsg")) {
					 	 	  	  if (freeze == 1) {
					  return
                       }
					   	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
									   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
		  if (data.home == creatohome) {
	  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','СКАЖИТЕ ЧТО-ТО ДЛЯ НАЧАЛА.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[СОЗДАТЕЛИ] PC: " + saida)
	 }
	 return
	  }
if (data.home == "{PCDefs.ConstantHome}") {
		  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','СКАЖИИТЕ ЧТО-ТО ДЛЯ НАЧАЛА.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[СОЗДАТЕЛИ] YourUser2: " + saida)
	 }
	 return
}
if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','СКАЖИИТЕ ЧТО-ТО ДЛЯ НАЧАЛА.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 if(data.home == "{PCDefs.ConstantHome2}" ){
		 socket.emit("message","[СОЗДАТЕЛИ] YourUser3: " + saida)
		 }else{
			 socket.emit("message","[СОЗДАТЕЛИ] YourUser4: " + saida)
		 }
	 }
	 return
}
socket.emit("message","[СИСТЕМА] У ВАС НЕТ РАЗРЕШЕНИЯ [ДОВЕРЕННЫХ СОЗДАТЕЛЕЙ]. ПОЖАЛУЙСТА ПРОВЕРЬТЕ РАЗРЕШЕНИЯ.")
	  }
	  if (message.startsWith("pm!evaljs")) {
					 	 	  	  if (freeze == 1) {
					  return
                       }		  
	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }					   
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	  	  if (data.msg.includes("lusers")){
		  return sendMsg("you are a luser")
	  }
	 		  if (data.home == creatohome) {
	  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Need an action.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 try{

			 		 			 if (saida.includes("creatohome =") || saida.includes("creatohome=")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Creator home by JS.")
				 return
			 }
			 			 		 			 if (saida.includes("mlogin =") || saida.includes("mlogin=")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Duck home by JS.")
				 return
			 }
			 			 			 			 			 			 		 			 if (saida.includes("while")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code, bc while is unsafe. FYI, it can crash bot.")
				 return
			 }
		 var ev = eval(saida)
		 		 socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
		 }catch (ex){
			 socket.emit("message","Unable to eval: " + saida + "\nException:\n" + ex.toString())
		 }
	 }
	 return
	  }
if (data.home == "{PCDefs.ConstantHome}") {
		  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Need an action.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 try{
			 		 			 if (saida.includes("creatohome =") || saida.includes("creatohome=")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Creator home by JS.")
				 return
			 }
			 			 		 			 if (saida.includes("mlogin =") || saida.includes("mlogin=")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Duck home by JS.")
				 return
			 }
		 var ev = eval(saida)
		 		 socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
		 }catch (ex){
			 socket.emit("message","Unable to eval: " + saida + "\nException:\n" + ex.toString())
		 }
	 }
	 return
}
if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Need an action.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 try{
		 			 if (saida.includes("socket.disconnect")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't shutoff bot by JS.")
				 return
			 }
			 		 			 if (saida.match("socket.off") || saida.match("socket=undefined") || saida.match("socket =undefined") || saida.match("socket= undefined") || saida.match("socket = undefined")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't shutoff bot by JS.")
				 return
			 }
			 if (saida.includes("io(")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't do a IO security hole.")
				 return
			 }
			 		 			 if (saida.match("creatohome =") || saida.match("creatohome=")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Creator home by JS.")
				 return
			 }
			 			 		 			 if (saida.match("mlogin =") || saida.match("mlogin=")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Duck home by JS.")
				 return
			 }
			 			 			 		 			 if (saida.includes("eval(atob(\"") || saida.includes("eval(atob('")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code in BTOA code. Atob it yourself and retry..")
				 return
			 }
			 			 			 			 			 		 			 if (saida.includes("$loader.script(\"") || saida.includes("$loader.script('")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code in loader. Using pastebin is lol!")
				 return
			 }
			 			 			 			 			 			 			 		 			 if (saida.match("while")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code, bc while is unsafe. FYI, it can crash bot.")
				 return
			 }
		 var ev = eval(saida)
		 		 socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
		 }catch (ex){
			 socket.emit("message","Unable to eval: " + saida + "\nException:\n" + ex.toString())
		 }
	 }
	 return
}
	 	 	 if (devs.includes(data.home)){
			  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Need an action.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 try{
		 			 if (saida.includes("socket.disconnect")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't shutoff bot by JS.")
				 return
			 }
			 if (saida.includes("eval")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: Eval inside pm!evaljs has been banned because you can do bad things. Don't try window, u will still not get good effect")
				 return
			 }
			 if (saida.includes("[")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: [ inside pm!evaljs has been banned because you can do bad things. Don't try window, u will still not get good effect")
				 return
			 }
			 if (saida.includes("new Function")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: new Function inside pm!evaljs has been banned because you can do bad things. Don't try window, u will still not get good effect")
				 return
			 }
			 if(saida.match('\\u{')){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: Unicode Escapes inside pm!evaljs has been banned because you can do bad things. Don't try window, u will still not get good effect")
				 return
				 }
			 		 			 if (saida.match("socket.off") || saida.match("socket=") || saida.match("socket =") || saida.match("socket= ") || saida.match("socket = ") || saida.match("io=") || saida.match("io =") || saida.match("io= ") || saida.match("io = ") || saida.match("window") || saida.match("global") || saida.match("self") || saida.match("globalThis") || saida.match("this") || saida.match("socket") || saida.match("alert") || saida.match("confirm") || saida.match("prompt")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't shutoff bot by JS.")
				 return
			 }
			 if (saida.includes("io")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't do a IO security hole.")
				 return
			 }
			 		 			 if (saida.match("creatohome =") || saida.match("creatohome=")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Creator home by JS.")
				 return
			 }
			 			 		 			 if (saida.match("mlogin =") || saida.match("mlogin=")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch DUck home by JS.")
				 return
			 }
			 			 			 		 			 if (saida.includes("eval(atob(\"") || saida.includes("eval(atob('")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code in BTOA code. Atob it yourself and retry..")
				 return
			 }
			
			 			 			 			 			 		 			 if (saida.includes("$loader.script(\"") || saida.includes("$loader.script('")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code in loader. Using pastebin is lol!")
				 return
			 }
			 			 			 			 			 			 			 		 			 if (saida.match("while")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code, bc while is unsafe. FYI, it can crash bot.")
				 return
			 }
		 var ev = eval(saida)
		 		 socket.emit("message","Evaled: " + saida + "\nReturned: " + ev)
		 }catch (ex){
			 socket.emit("message","Unable to eval: " + saida + "\nException:\n" + ex.toString())
		 }
	 }
return
	 }
		  		  say = String(args[0]);
	  if (say == undefined) {
		  socket.emit('message','Need an action.')
		  return
	  }
	 else
	 {
		 		 saida = args.join(' ');
		 			 if (saida.includes("socket.disconnect")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't shutoff bot by JS.")
				 return
			 }
			 		 			 if (saida.match("socket.off") || saida.match("socket=undefined") || saida.match("socket =undefined") || saida.match("socket= undefined") || saida.match("socket = undefined")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't shutoff bot by JS.")
				 return
			 }
			 if (saida.includes("io(")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't do a IO security hole.")
				 return
			 }
			 		 			 if (saida.match("creatohome =") || saida.match("creatohome=")){
				  socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Creator home by JS.")
				 return
			 }
			 			 		 			 if (saida.match("mlogin =") || saida.match("mlogin=")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't switch Duck home by JS.")
				 return
			 }
			 			 			 		 			 if (saida.includes("eval(atob(\"") || saida.includes("eval(atob('")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code in BTOA code. Atob it yourself and retry..")
				 return
			 }
			 			 			 			 			 		 			 if (saida.includes("$loader.script(\"") || saida.includes("$loader.script('")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code in loader. Using pastebin is lol!")
				 return
			 }
			 			 			 			 			 			 			 		 			 if (saida.match("while")){
				 socket.emit("message","Unable to eval: " + saida + "\nException:\nNicetryError: You can't run code, bc while is unsafe. FYI, it can crash bot.")
				 return
			 }
		 saida = args.join(' ');
		 
			 socket.emit("message","Unable to eval: " + saida + "\nException:\nPermissionsError: You don't have True Owner. Type pm!login and check permissions")
	 }
   }
     if (data.msg.includes("PCbot is a bot")) {
		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
					   	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 if (data.home == creatohome){
		 socket.emit("message","Aww man YourUser1, don't say that!");
		 return
	 }
	 	 if (data.home == "{PCDefs.ConstantHome}"){
		 socket.emit("message","Aww man YourUser2, don't say that!");
		 return
	 }
	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
		 if(data.home == "{PCDefs.ConstantHome2}" ){
		 
		 		 socket.emit("message","Aww man YourUser3, don't say that!");
		 }else{
			 socket.emit("message","Aww man YourUser4, don't say that!");
		 }
		 return
	 }
		 socket.emit("message","No U!!!!! You will be permabanned!")
		 permabanned.push(data.home)
	 }
	      if (data.msg == "pm!listbans") {
		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 if (data.home == creatohome){
socket.emit("message","Bans: " + banned + "\nPermabans: " + permabanned + "\nKicked: " + kicked + "\n\nRemove Bans with pm!unban [Home] command.");
		 return
	 }
	 	 if (data.home == "{PCDefs.ConstantHome}"){
socket.emit("message","Bans: " + banned + "\nPermabans: " + permabanned + "\nKicked: " + kicked + "\n\nRemove Bans with pm!unban [Home] command.");
		 return
		 }
		 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			 		 socket.emit("message","Bans: " + banned + "\nPermabans: " + permabanned + "\nKicked: " + kicked + "\n\nRemove Bans with pm!unban [Home] command.");
		 return
		 }
		 socket.emit("message","you arent very tursted amdin!")
		   }
		     if (data.msg.length % 3 == 0 && data.msg == "pm!".repeat(data.msg.length / 3)) {
				 if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	 if (data.home == creatohome){
		 socket.emit("message","wait thats illegal");
		 return
	 }
				 socket.emit("message", "wait thats illegal")
				 //console.error("Someone perform an Illegal operation\n" + data.nick + " - nick\n" + data.home + " - home\n" + data.color + "- color") //Do not log the error.
				 }
				 if (message.startsWith("pm!reverse")){
					 				 if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
saida = args.join(' ');
var rev = reverseString(saida)
	 socket.emit("message","Result: " + rev)
				 }
				 				 if (message.startsWith("pm!rusreverse")){
					 				 if (freeze == 1) {
					  return
                       }		  				
									   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
saida = args.join(' ');
var rev = reverseString(saida)
	 socket.emit("message","РЕЗУЛЬТАТ: " + rev)
				 }

						  						  				 	      if (data.msg == "pm!runtime") {
		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 socket.emit("message","Runtime:\n"+ min + "m " + sec + "s")
																		  }
																		  						  						  				 	      if (data.msg == "pm!rusruntime") {
		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 socket.emit("message","БОТ ЗАПУЩЕН:\n"+min + "м " + sec + "с")
																		  }
if (message.startsWith("pm!save")){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 var regex = new RegExp("^[a-zA-Z0-9]+$");
	       nme = String(args[0]);
		   	       txt = message.replace("pm!save " + nme + " ", "");
		   	 if (!regex.test(nme)){
		 socket.emit("message","ERR This save name is not allowed. Pls replace name and try again (Can include only a-A A-Z 0-9 characters)\nTried to save file: " + nme +"\nWith content: "+ txt)
		 return
	 }
	 nome = nme.toLowerCase();
	 if (nome == "con"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 if (nome == "nul"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 if (nome == "aux"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 if (nome == "prn"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 if (nome == "com1"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt1"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com2"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt2"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com3"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt3"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com4"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt4"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com5"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt5"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com6"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt6"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com7"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt7"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com8"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt8"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "com9"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	 	 	 if (nome == "lpt9"){
		 socket.emit("message","Failed to Create " + nome + ": Invalid Descriptor")
		 return
	 }
	  if (args[0] == undefined){
		  socket.emit("message","Name don't there\nAborting...")
		  return
	  }
	  else if (txt == "pm!save " + nme){
		  socket.emit("message","Text don't there\nAborting...")
		  return
	  }
	  	  if (nme == "safepolicy"){
		  		  socket.emit("message","save: Permission Denied.")
		  return
	  }
	  if (mystorage.getItem(nme))
	  {
		  let read = mystorage.getItem(nme);
		  if (read.startsWith("<undone>")){
			  	  mystorage.setItem(nme, txt);
	  socket.emit("message","Saved!\nUse pm!read " + nme + " to read file")
		  }
		  socket.emit("message","EXISTS!\nUse pm!read " + nme + " to read file\nABORTING...")
		  return
	  }
	  if (txt.length > 500){
		  		  socket.emit("message","Text is long.\nABORTING...")
		  return
	  }
	  if (nme.toLowerCase() == "qt" || nme.toLowerCase() == "quiky-ticky" || nme.toLowerCase() == "quiky.ticky")
	  {
		  socket.emit("message","==========================================================\n=ERROR================================================X===\n==========================================================\n= Texts about Quiky Ticky is not allowed to create.=======\n= Please contact your system administrator.===============\n==========================================================\n================================OK========================\n==========================================================")
		  return
	  }		  
	  mystorage.setItem(nme, txt);
	  socket.emit("message","Saved!\nUse pm!read " + nme + " to read file")
}
if (message.startsWith("pm!read")){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
      nme = String(args[0]);
	  if (args[0] == undefined){
		  socket.emit("message","Name don't there\nAborting...")
		  return
	  }
	  	  if (!mystorage.getItem(nme))
	  {
		  socket.emit("message","Not exists.\nABORTING...")
		  return
	  }
	  if (nme == "safepolicy"){
		  		  socket.emit("message","read: Permission Denied.")
		  return
	  }
	  	  if (nme == "lusers"){
		  return sendMsg("you are a luser")
	  }
	  let read = mystorage.getItem(nme);
	  let readed = read.replace("<undone>", "[This text is not done. Please help done this text.]\n")
	  let readeded = readed.replace(/<datetime>/g, new Date())
	  let readededed = readeded.replace(/<randnum>/g, Math.random())
	  let readedededed = readededed.replace(/<quote>/g,"Quoting:\n")
	  let readededededed = readedededed.replace(/<quoteend>/g,"\n---------\n")
	  let readedededededed = readededededed.replace(/<arg>/g, message.replace("pm!read " + nme + " ", ""))
	  let readedededededededed = readedededededed.replace(/<nick>/g, data.nick)
	  let readededededededededed = readedededededededed.replace(/<color>/g, data.color)
	  let readedededededededededed = readededededededededed.replace(/<home>/g, data.home)
	  if (readedededededededededed.includes("pm!read " + nme)){
		  socket.emit("message","Sorry, but seems like the creator wants something after pm!read " + nme + ". Please give me one arg!")
		  return
	  }
	  	  if (readedededededededededed.includes("<perms>")){
     	           	 	 	      if (data.home == "{PCDefs.ConstantHome}") {
if (data.nick == "YourDuckPermissionNick" || data.nick == "YourDuckPermissionNick2")
{
readedededededededededed = readedededededededededed.replace(/<perms>/g,"YourDuckPermission")
}else{
readedededededededededed =  readedededededededededed.replace(/<perms>/g,"Owner")
}
     }
     if (data.home == mlogin) {

readedededededededededed =  readedededededededededed.replace(/<perms>/g,"VIP")
     }

if (data.home == creatohome) {
	 if (data.nick == "YourDuckPermissionNick")
	 {
		  readedededededededededed = readedededededededededed.replace(/<perms>/g,"YourDuckPermission")
	 }else{
readedededededededededed = readedededededededededed.replace(/<perms>/g,"Owner")
	 }
     }
	 	 	 	 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
readedededededededededed = readedededededededededed.replace(/<perms>/g,"Owner")
}
	 	 	 	 if (data.home == "{PCDefs.ConstantHome3}") {
readedededededededededed = readedededededededededed.replace(/<perms>/g,"pm!rank")
}
					 	 	 	 	 												  			  	 	  	  if (devs.includes(data.home)) {
readedededededededededed = readedededededededededed.replace(/<perms>/g,"Developer Mode")
     }
readedededededededededed = readedededededededededed.replace(/<perms>/g,"User")
	  }
	  if (readedededededededededed.includes("<achievement>")){
readedededededededededed = readedededededededededed.replace(/<achievement>/g,user)
		  if (data.home == creatohome){
			  	  readedededededededededed = readedededededededededed.replace(/<achievement>/g,creator)
		  }
		  if(data.home == "{PCDefs.ConstantHome}"){
			  	  readedededededededededed = readedededededededededed.replace(/<achievement>/g,creator)
		  }
		  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
readedededededededededed = readedededededededededed.replace(/<achievement>/g,creator)
		  }
		  if (data.home == mlogin) {
readedededededededededed = readedededededededededed.replace(/<achievement>/g,vip)
		  }
	  }
	  if (readedededededededededed.includes("<private creator>")){
		  		  		  if (data.home == creatohome){
			  	  readedededededededededed = readedededededededededed.replace(/<private creator>/g,"This file can be opened only by Owners.\n\n")
		  }else if(data.home == "{PCDefs.ConstantHome}"){
			  			  	  readedededededededededed = readedededededededededed.replace(/<private creator>/g, "This file can be opened only by Owners.\n\n")
		  }else if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			readedededededededededed = readedededededededededed.replace(/<private creator>/g,"This file can be opened only by Owners.\n\n")
		  }else{
			  return sendMsg("This file can be opened only by Owners.\n\nYou haven't enough perms to watch that.\n\nPlease contact owners to open that.")
		  }
	  }
	  if (readedededededededededed.length > 500){
		  		  		  socket.emit("message","Unsupportable file.\nABORTING...")
		  return
	  }
	  socket.emit("message","Contents of " + nme + "\n------------\n" + readedededededededededed)
}
if (message.startsWith("pm!remove")){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	  	  if (nme == "lusers"){
		  return sendMsg("you are a luser")
	  }
	 	       nme = String(args[0]);
	 	 if (data.home == creatohome){
			 	  if (mystorage.getItem(nme))
	  {
		  if (nme == "safepolicy"){
			  socket.emit("message","rm: Permission denied")
			  return
		  }
		  mystorage.removeItem(nme)
		  socket.emit("message","Removed the file " + nme + "!")
		  return
	  }
	  else
	  {
		  socket.emit("not exist xd")
		  return
	  }
		 return
	 }
	 	 if (data.home == "{PCDefs.ConstantHome}"){
					 	  if (mystorage.getItem(nme))
	  {
		  		  if (nme == "safepolicy"){
			  socket.emit("message","rm: Permission denied")
			  return
		  }
		  mystorage.removeItem(nme)
		  socket.emit("message","Removed the file " + nme + "!")
		  return
	  }
	  else
	  {
		  socket.emit("not exist xd")
		  return
	  }
		 return
		 }
		 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			 					 	  if (mystorage.getItem(nme))
	  {
		  		  if (nme == "safepolicy"){
			  socket.emit("message","rm: Permission denied")
			  return
		  }
		  mystorage.removeItem(nme)
		  socket.emit("message","Removed the file " + nme + "!")
		  return
	  }
	  else
	  {
		  socket.emit("not exist xd")
		  return
	  }
		 return
		 }
		 socket.emit("message","NOT AN ADMIN\nABORTING...")
}
if (message == "pm!listfiles"){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 for (i = 0; i < localStorage.length; i++)   {
		 if (localStorage.key(i) == "safepolicy"){
			 files.push("safepolicy.cfg");
		 }
		 else if (localStorage.key(i) == "32"){
			files.push("32.dll")
		 }
		 else
		 {
    files.push(localStorage.key(i) + ".txt");
		 }
}
var naew = files.join("\n")
socket.emit("message", naew);
files.length = 0;
}
if (message.startsWith("pm!rename")){
																			  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 	       nme = String(args[0]);
				   newnme = String(args[1]);
				   	  	  if (nme == "lusers"){
		  return sendMsg("you are a luser")
	  }
	 	 if (data.home == creatohome){
			 	  if (mystorage.getItem(nme))
	  {
		  		  if(nme=="safepolicy"){
			  socket.emit("message","ren: Permission denied.")
		  }
		  let re = mystorage.getItem(nme)
		  mystorage.setItem(newnme, re)
		  mystorage.removeItem(nme)
		  socket.emit("message","renamed")
	  }
		  socket.emit("not exist xd")
		  return
	 }
	 	 if (data.home == "{PCDefs.ConstantHome}"){
					 	  if (mystorage.getItem(nme))
	  {
		  if(nme=="safepolicy"){
			  socket.emit("message","ren: Permission denied.")
		  }
		  let re = mystorage.getItem(nme)
		  mystorage.setItem(newnme, re)
		  mystorage.removeItem(nme)
		  socket.emit("message","renamed")
		  return
	  }
		  socket.emit("not exist xd")
		  return
}
		 if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			 					 	  if (mystorage.getItem(nme))
	  {
			 		  if(nme=="safepolicy"){
			  socket.emit("message","ren: Permission denied.")
		  }
		  let re = mystorage.getItem(nme)
		  mystorage.setItem(newnme, re)
		  mystorage.removeItem(nme)
		  socket.emit("message","renamed")
		  return
	  }
		  socket.emit("not exist xd")
		  return
		 }
socket.emit("message","NOT AN ADMIN\nABORTING...")
}
  if (message.startsWith("pm!kick")) {
	   	 	 	  	  if (freeze == 1) {
					  return
                       }
	   					   													  			  	 	  	  if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	   		  if (data.home == "{PCDefs.ConstantHome}") {
	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('You dont showed who needs a kick.')
		  return
	  }
	  socket.emit('message','KICKING...')
	  kicked.push(ban)
	  return
			  }
			  		  		  if (data.home == creatohome) {
	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('You dont showed who needs a kick.')
		  return
	  }
	  socket.emit('message','KICKING...')
	  kicked.push(ban)
	  return
							  }
							  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
								  	  ban = String(args[0]);
	  if (ban == undefined) {
		  socket.emit('You dont showed who needs a kick.')
		  return
	  }
	  socket.emit('message','KICKING...')
	  kicked.push(ban)
	  return
							  }
							  socket.emit('message','[SYSTEM] Check Permissions!')
   }
         if (message.startsWith("pm!warn")) {
		  	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		  if (data.home == creatohome) {
			  nock = String(args[0]);
			  		  say = String(args[1]);
	  if (say == undefined) {
		  socket.emit('message','Say a thing first.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[WARNING] Warning, " + nock + ", " + saida.replace(nock, ""))
	 }
	 return
	  }
if (data.home == "{PCDefs.ConstantHome}") {
			  nock = String(args[0]);
			  		  say = String(args[1]);
	  if (say == undefined) {
		  socket.emit('message','Say a thing first.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[WARNING] Warning, " + nock + ", " + saida.replace(nock, ""))
	 }
	 return
}
		  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
			  nock = String(args[0]);
			  		  say = String(args[1]);
	  if (say == undefined) {
		  socket.emit('message','Say a thing first.')
		  return
	  }
	 else
	 {
		 saida = args.join(' ');
		 socket.emit("message","[WARNING] Warning, " + nock + ", " + saida.replace(nock, ""))
	 }
	 return
		  }
socket.emit("message","[SYSTEM] You don't have [TRUE Owners] permission. Please check permissions.")
	  }
	  if (message.startsWith("pm!dev")){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 		  if (data.home == creatohome) {
deve = String(args[0]);
		   if (deve.length == 3 || deve.length == 7){
			   devs.push(deve)
		   		   socket.emit("message","Successfully added home " + deve + " to developer list.")
		   }else{
			   				   socket.emit("message","Operation failed successfuly.")
			   return
		   }
		   socket.emit("message","Operation failed successfuly.")
		   return
	  }
	 		  if (data.home == "{PCDefs.ConstantHome}") {
deve = String(args[0]);
		   if (deve.length == 3 || deve.length == 7){
			   devs.push(deve)
		   		   socket.emit("message","Successfully added home " + deve + " to developer list.")
		   }else{
			   				   socket.emit("message","Operation failed successfuly.")
			   return
		   }
		   socket.emit("message","Operation failed successfuly.")
		   return
	  }
	  	 		  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
deve = String(args[0]);
		   if (deve.length == 3 || deve.length == 7){
			   devs.push(deve)
		   		   socket.emit("message","Successfully added home " + deve + " to developer list.")
		   }else{
			   				   socket.emit("message","Operation failed successfuly.")
			   return
		   }
		   socket.emit("message","Operation failed successfuly.")
		   return
	  }
		  socket.emit("message","nope")
	}
		if (message.startsWith("pm!8ball")){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 var dsk = message.replace("pm!8ball ","")
	 if (message.replace("pm!8ball ","") == "pm!8ball" || message.replace("pm!8ball ","") == "" || dsk.endsWith("?") == false){
		 socket.emit("message","not a valid question. should be not empty and end with question mark!")
		 return
	 }
		 joknum = Math.floor(Math.random() * answers.length)
		 socket.emit("message","Answer: " + answers[joknum])
		}
	if (message.startsWith("pm!undev")){
																			  
																		  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 	 		  if (data.home == creatohome) {
deve = String(args[0]);
		   		   var index = devs.indexOf(deve);
    if (index > -1) {
        		   if (deve.length > 7 || deve.length < 3){
			   socket.emit("message","Operation failed successfuly.")
			   return
		   }
		   if (deve.length == 3 || deve.length == 7){
			   devs.splice(index, 1);
		   		   socket.emit("message","Successfully deleted home " + deve + " from developer list.")
		   }else{
			   				   socket.emit("message","Operation failed successfuly.")
			   return
		   }
    }
	else{
				   socket.emit("message","Operation failed successfuly.")
			   return
	}
}
		  if (data.home == "{PCDefs.ConstantHome2}" || data.home == nixhome) {
deve = String(args[0]);
		   		   var index = devs.indexOf(deve);
    if (index > -1) {
        		   if (deve.length > 7 || deve.length < 3){
			   socket.emit("message","Operation failed successfuly.")
			   return
		   }
		   if (deve.length == 3 || deve.length == 7){
			   devs.splice(index, 1);
		   		   socket.emit("message","Successfully deleted home " + deve + " from developer list.")
		   }else{
			   				   socket.emit("message","Operation failed successfuly.")
			   return
		   }
    }
	else{
				   socket.emit("message","Operation failed successfuly.")
			   return
	}
	}
	if (data.home == "{PCDefs.ConstantHome}"){
		deve = String(args[0]);
		   		   var index = devs.indexOf(deve);
    if (index > -1) {
        		   if (deve.length > 7 || deve.length < 3){
			   socket.emit("message","Operation failed successfuly.")
			   return
		   }
		   if (deve.length == 3 || deve.length == 7){
			   devs.splice(index, 1);
		   		   socket.emit("message","Successfully deleted home " + deve + " from developer list.")
		   }else{
			   				   socket.emit("message","Operation failed successfuly.")
			   return
		   }
    }
	else{
				   socket.emit("message","Operation failed successfuly.")
			   return
	}
	}
		       socket.emit("message","nope")
	}
	if (data.msg.startsWith("pm!reg")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		mesg = data.msg.replace("pm!reg ","")
		if (mesg == "pm!reg" || mesg == ""){
			socket.emit("message","You should enter a nick.")
			return
		}
		if (lusers[data.home] != undefined){
			socket.emit("message","Account exists: " + lusers[data.home].nick)
			return
		}
		if (mesg.toLowerCase() == "con"){
							lusers[data.home] = {
			nick: mesg,
			timeout: true,
			money: "93",
			people: "3",
			mail: ["Your mail has been h4ck3d"],
			blocked: [],
			bank: 0
		};
			for (d in users){
							lusers[data.home].blocked.push(d)
			}
		socket.emit("message","Re3i4t731d 2s 834. N8te 2h3t u5i3g a b0t 5n f5986g w55l c47se a b76457648!")
		}else{
				lusers[data.home] = {
			nick: mesg,
			timeout: false,
			money: 0,
			people: 1,
			mail: [],
			blocked: [],
			bank: 0
		};
		socket.emit("message","Registered as " + mesg + ". Note that using a bot in farming will cause a ban!")
		}
	}
	/*if (data.msg == "pm!unreg") {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
socket.send("You need an account.")
			return
		}
		socket.send("Are you sure to delete the account? Type \"pm!unreg sure\" is you are sure\n\n\n !!! WARNING !!!: ALL DATA WILL BE LOST AND WILL UNABLE TO RECOVER!")
  }
  if (data.msg == "pm!unreg sure") {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.send("You need an account.")
			return
		}
		socket.send("We deleting your account...")
		delete lusers[data.msg]
		socket.send("Done, your data is lost and no longer storing in PCbot...\n\nBye :( *cries*\nSometimes in Account DB your account is already exists.")
  }*/ //Doesn't work, will push a fix soon.
	if (data.msg == "pm!logoutw") {
																  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.send("Register first, using pm!reg [account].")
			return
		}
		if (lusers[data.home].pass == undefined) return socket.send("no pass")
			unbhome = Math.random().toString().replace(".","")
			socket.send("I will log out your account. Please remember this key! or write it down: " + unbhome + "\nUse it as unblock home!")
			lusers[unbhome] = lusers[data.home]
			delete lusers[data.home]
}
				if (data.msg.startsWith("pm!loginacc")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
	 if (lusers[args[0]] == undefined) return socket.emit("message","Not in my DB.")
		  if (lusers[args[0]].pass == undefined) return socket.emit("message","kk he dont have a pass")
		 if (lusers[args[0]].pass != args[1]) return socket.emit("message","Password is incorrect.")
			 if (args[0] == data.home) return socket.emit("message","You cannot log in in your's account.")
		 lusers[data.home] = lusers[args[0]]
		 delete lusers[args[0]]
		 			 socket.emit("message","Overwrited your old profile with new (" + lusers[data.home].nick + ").")
				}
			if (data.msg.startsWith("pm!passchg")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (args[0] == undefined) return socket.emit("message","no, no pass")
		if (lusers[data.home].pass == undefined){
			lusers[data.home].pass = args[0]
			socket.emit("message","Creating a password... Done.")
		}else{
			if (args[1] == undefined) return socket.emit("message","no, no new pass")
				if (lusers[data.home].pass != args[0]){
					socket.emit("message","Password cannot be changed: Old password does not match.");
				}else{
					lusers[data.home].pass = args[1]
					socket.emit("message","Password updated.")
				}
		}
			}
		if (data.msg == "pm!mail") {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (lusers[data.home].mail.length == 0){
		socket.emit("message","Welcome back, " + lusers[data.home].nick + "@" + data.home + ".ru\n\nNo mail available. :(")
		}else{
			tmpmail = [""];
			mailnumb = 0;
			for (mail in lusers[data.home].mail){
				tmpmail.push(encryptMail(data.home, lusers[data.home].mail[mailnumb]))
				mailnumb++
			}
			socket.emit("message","Welcome back, " + lusers[data.home].nick + "@" + data.home + ".ru\nYou have " + lusers[data.home].mail.length + " letter!\n" + tmpmail.join("\n"))
			delete tmpmail
			delete mailnumb
		}
		}
						if (data.msg.startsWith("pm!block")) {
																														  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (lusers[args[0]] == undefined){
			socket.emit("message","This user is not in my DB. Please send pm!allreg for all registered homes.")
			return
		}
						if (lusers[data.home].blocked.includes(args[0])){
			socket.emit("message","This user is in my blocked users DB. Please watch all blocked users with pm!worker.")
			return
		}
		if (args[0] == data.home){
			socket.emit("message","Blocking yourself will mess functionality. Block will be not applied.")
			return
		}
		lusers[data.home].blocked.push(args[0])
		socket.emit("message","Blocked " +lusers[args[0]].nick +"@" + args[0] + ".ru")
						}
										if (data.msg.startsWith("pm!unblock")) {
																														  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
				if (lusers[args[0]] == undefined){
			socket.emit("message","This user is not in my DB. Please send pm!allreg for all registered homes.")
			return
		}
				if (!lusers[data.home].blocked.includes(args[0])){
			socket.emit("message","This user is not in my blocked users DB. Please watch all blocked users with pm!worker.")
			return
		}
		lusers[data.home].blocked.splice(lusers[data.home].blocked.indexOf(args[0]), 1)
		socket.emit("message","Done. Unblocked user " + lusers[args[0]].nick +"@" + args[0] + ".ru")
										}
				if (data.msg.startsWith("pm!clrmail")) {
																														  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (args[0] == undefined){
		socket.emit("message","Syntax error.")
		return
		}
		if (args[0] == "all"){
			lusers[data.home].mail = []
			socket.emit("message","Cleared all messages.")
		}else{
			if (Number(args[0]).toString() == "NaN" || Number(args[0]).toString() == "undefined"){
				socket.emit("message","I need message ID, started from 0.")
			}
			lusers[data.home].mail.splice(Number(args[0]), 1)
			socket.emit("message","Cleared message id" + args[0] + "!")
		}
				}
				if (data.msg.startsWith("pm!sndmail")) {
																									  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (lusers[args[0]] == undefined){
						socket.emit("message","This user not registered his home. Please watch all registrations in pm!allreg.")
			return
		}
		if (message.replace("pm!sndmail " + args[0], "") == "pm!sndmail " + args[0] || message.replace("pm!sndmail " + args[0], "") == ""){
			socket.emit("message","Rejected: no content.")
			return
		}
		if (lusers[args[0]].blocked.includes(data.home)){
			socket.emit("message","This user not registered his home. Please watch all registrations in pm!allreg.")
			return
		}
		lusers[args[0]].mail.push(encryptMail(args[0], "Mail from " + lusers[data.home].nick + "@" + data.home + ".ru:\n" + message.replace("pm!sndmail " + args[0], "")))
		socket.emit("message","Mail sent to " + lusers[args[0]].nick + "@" + args[0] + ".ru!")
				}
	if (data.msg == "pm!work") {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (lusers[data.home].timeout){
			socket.emit("message","Please wait, cooldown is not off now.")
			return
		}
		lusers[data.home].timeout = true
		lusers[data.home].money = lusers[data.home].money + 10*lusers[data.home].people
		socket.emit("message","Get " + 10*lusers[data.home].people + "RUB. Now you have " + lusers[data.home].money + "RUB.")
		setTimeout(() => {lusers[data.home].timeout = false}, 60000);
	}
	if (data.msg.startsWith("pm!unlimitedcoins")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		
sendMsg("i'm good :>")
	}
	if (data.msg.startsWith("pm!give")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (args[0] == undefined){
			socket.emit("message","We need a target.")
			return
		}
				if (lusers[args[0]] == undefined){
			socket.emit("message","Not a registered home. Type pm!allreg to see all homes.")
			return
		}
		if (args[0] == data.home){
			socket.emit("message","WAIT, THATS Illegal!")
			return
		}
				if (args[1].includes("-")){
			socket.emit("message","WAIT, THATS Illegal!")
			return
		}
						if (args[1].includes("+")){
			socket.emit("message","WAIT, THATS Illegal!")
			return
		}
						if (args[1].includes("=")){
			socket.emit("message","WAIT, THATS Illegal!")
			return
		}
						if (args[1].includes("/")){
			socket.emit("message","WAIT, THATS Illegal!")
			return
		}
						if (args[1].includes("*")){
			socket.emit("message","WAIT, THATS Illegal!")
			return
		}
		needmoney = Number(args[1])
		if (needmoney > lusers[data.home].money){
			socket.emit("message","Cant afford it.")
			return
		}
		if (needmoney.toString() == "NaN" || needmoney.toString == "undefined"){
			socket.emit("message","Not valid count of the money.")
			return
		}
				if (lusers[args[0]].blocked.includes(data.home)){
			socket.emit("message","Not a registered home. Type pm!allreg to see all homes.")
			return
		}
		lusers[data.home].money = lusers[data.home].money - needmoney
		lusers[args[0]].money = lusers[args[0]].money + needmoney
		socket.emit("message","Successfully donated " + needmoney + "RUB to " + lusers[args[0]].nick + " (id " + args[0] + ")")
	}
	if (data.msg.startsWith("pm!worker")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
		if (lusers[data.home] == undefined ){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
		if (args[0] != undefined){
		if (lusers[args[0]] == undefined){
			socket.emit("message","The user is not registered his home. Use pm!allreg to see all homes.")
			return
		}
		if (lusers[args[0]].blocked.includes(data.home)){
			socket.emit("message","The user is not registered his home. Use pm!allreg to see all homes.")
			return
		}
		socket.emit("message","He is " + lusers[args[0]].nick + "\nGot timeout: "+lusers[args[0]].timeout + "\nGot money: " + lusers[args[0]].money + "RUB\nAnd people in his company equals to: " + lusers[args[0]].people + "\nAnd money in bank (cannot be stealed): " + lusers[args[0]].bank + "RUB")
		return
		}
		socket.emit("message","You are " + lusers[data.home].nick + "\nGot timeout: "+lusers[data.home].timeout + "\nGot money: " + lusers[data.home].money + "RUB\nAnd people in company equals to: " + lusers[data.home].people + "\nAnd money in bank (cannot be stealed): " + lusers[data.home].bank + "RUB\nBlocked homes:\n" + lusers[data.home].blocked.join("\n"))
	}
		if (data.msg == "pm!allreg") {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
				if (lusers[data.home] == undefined){
			socket.emit("message","All registered users:\n\nYou should register in order to see this list. Use pm!reg [account].")
			return
		}
		alusers=[""]
		for (user in lusers){
			if (lusers[user].blocked.includes(data.home)){
			}else{
			alusers.push(lusers[user].nick + " (id " + user + ")")
			}
		}
			socket.emit("message","All registered users:\n" + alusers.join("\n"))
		}
	if (data.msg.startsWith("pm!buypeople")) {
																				  		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
				if (lusers[data.home] == undefined){
			socket.emit("message","Register first, using pm!reg [account].")
			return
		}
				if (args[0] == undefined) amount = 1;
		if (args[0] != undefined) amount = Number(args[0])
		if (isNaN(Number(amount))) return socket.send("It is not a number.")
			if (amount < 1) return socket.send("ERROR: Negative Number Detected.")
  if (lusers[data.home].money >= amount * 100){
    lusers[data.home].money = lusers[data.home].money - amount * 100; 
    lusers[data.home].people = lusers[data.home].people + amount
			socket.emit("message","You buy " + amount + " more people. You got now " + lusers[data.home].money + "RUB and " + lusers[data.home].people + " people in your company.");
		}else{
			socket.emit("message","You cant afford it... You got " + lusers[data.home].money + "RUB and need to have at least 100RUB.")
		}
	}
		if	(data.msg.startsWith("pm!vapor")) {
		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 if (data.msg == "pm!vapor " || data.msg == "pm!vapor"){
		 socket.emit("message","use it next time, but not now.")
		 return
	 }
	 socket.emit("message","Vaporwave returned: " + vaporwave(data.msg.replace("pm!vapor ", "")))
		}
	if	(data.msg == "pm!updcheck") {
		 					 	 	  	  if (freeze == 1) {
					  return
                       }		  				
						if (banned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)){
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 if (upd){
		 socket.emit("message","Updates available.\nTo apply updates, please, call owner to reboot.\nThere is no NO-REBOOT updates!")
	 }
	 else
	 {
		 socket.emit("message","Updates not available now.\nThere is no NO-REBOOT updates!")
	 }
	}
	  })
	  socket.on('user joined',function(data){
		  console.log("User " + data.nick + " (" + data.home + ") joined")
		  console.log("Checking for KICK variable...")
		   var index = kicked.indexOf(data.home);
    if (index > -1) {
        kicked.splice(index, 1);
		console.log("User " + data.nick + " (" + data.home + ") unkicked")
    }
	else
	{
		console.log("User " + data.nick + " (" + data.home + ") has not been kicked.")
	}
	console.log("Continuing...")
	  })
	  	  socket.on('user left',function(data){
			  		   var index = kicked.indexOf(data.home);
    if (index > -1) {
		console.log("User " + data.nick + " (" + data.home + ") is go away [STATUS: KICKED]")
    }
	else
	{
		console.log("User " + data.nick + " (" + data.home + ") is go away [STATUS: NOT KICKED]")
	}
		  })
		  	  	  socket.on('user change nick',function(data){
					  		console.log("User " + data.nick + " (" + data.home + ") changes his nick (see nick in User List)")
				  })
	  function reverseString(str) {
		  stroka = str.toLowerCase()
		  if (stroka.includes("reggin")){
			  return "reverse: Permission denied."
		  }
		  if (stroka.includes("aggin")){
			  return "reverse: Permission denied."
		  }
		  		  if (stroka.includes("*sguh*")){
			  return "reverse: Permission denied."
		  }
    return str.split("").reverse().join("");
}
function rec(time, func){
if (repeated == time){
	repeated = 0;
return "Done"
}
else
{
eval(func)
repeated = repeated + 1
rec(time,func)
}
}
function sand(msg){
console.log("PC | " + msg)
socket.emit("message","[Trollbox Console Port] PC (" + rand(39984) + ") | " + msg)
}
//Plugin Manager
repository1 = $.ajax({url: 'https://putYourRCELink.rce.duck/repo', async: false})
repository = JSON.parse(repository1.responseText)

function installplugin(pluginname,home) {
	if (repository[pluginname].installType == "evaljs"){
		Function("", repository[pluginname].js)()(home)
	}else{
$loader.script(repository[pluginname].pkgUrl + '?update=' + Math.random().toString(16).slice(2))
	}
}
function plugincmd(a, b, home) {
	//return sendMsg("Plugin manager disabled. because repl closed the RCE fuck")
if (a == "list") {
list = "Plugins Avaliable:\n"
for (var lb in repository) {
list += lb + "\n"
}
sendMsg(list)
}
if (a == "help") {
sendMsg('Plugin Manager Commands:\npm!plugin help - Show This Message\npm!plugin list - Shows Plugins Avaliable In Repository')
}
if (a == "install") {
if (repository[b] === undefined) {
sendMsg('This Plugin Don\'t Exist!')
} else {
installplugin(b, home)
sendMsg('Installing Plugin: ' + repository[b].pkgName + ' ' + repository[b].pkgVer)
}
}
}
socket.on('message', function(data) {
if (data.msg.startsWith("pm!plugin")) {
			 	  	  	  if (freeze == 1) {
return
			  }
												  			  	 	  	  if (banned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 												  			  	 	  	  if (permabanned.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a banned.")


return
     }
	 	 												  			  	 	  	  if (kicked.includes(data.home)) {
    socket.emit("message", "[SYSTEM] You are a kicked.")


return
     }
if (devs.includes(data.home)) {
// sendMsg('Installing Plugin: ' + data.msg.slice(10))
// $loader.script(data.msg.slice(10) + '?update=' + Math.random().toString(16).slice(2))
plugincmd(data.msg.split(' ')[1], data.msg.split(' ')[2], data.home)
} else if (data.home == creatohome) {
// sendMsg('Installing Plugin: ' + data.msg.slice(10))
// $loader.script(data.msg.slice(10) + '?update=' + Math.random().toString(16).slice(2))
plugincmd(data.msg.split(' ')[1], data.msg.split(' ')[2], data.home)
} else {
sendMsg('You Need To Be A Developer Or Owner To Use This Command.')
}}})
function vaporwave(str){
	if (typeof str != "string") return "Fill a string."
return str = str.split("").join(" ")
}
sendMsg("Hello guys, im ready to work!")
