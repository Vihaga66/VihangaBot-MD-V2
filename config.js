//SOME ENCRYPTED FILES
//THANKS FOR CHOOSING VIHANGAMD

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	dapa: 'https://dapuhy.xyz'
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7A012A0F7751',
	'https://dapuhy.xyz': 'piceg'
}

//settings
global.welcomeandgoodbye = 'false' //welcome එක off කරන්න ඕනෙ නම් false දාන්න.
global.callblock = 'true' //call block on කරන්න ඕනෙ නම් false කියල තියෙන එක මකල true කියල දාන්න.
global.inboxblock212 = 'true'
global.onlygroup = 'true'
global.group1 = '🤭' //මෙතන grouplink එක.you

//Owner React
global.OWNER_REACT = '🤭' //මෙතනට emoji එකක දාන්න.
global.REACT_NUMBER = 'hi 🤭' //මෙතන number එක.

// Other
global.owner = ['Hi 🤭',''] //මෙතන number එක.
global.premium = ['Hi 🤭',''] //මෙතන number එක.
global.botname = 'VIHANGA BOT' //මෙතන නම.
global.ownername = 'Vihanga BOT' //මෙතන නම.
global.ownername = 'ᴠɪʜͥᴀɴͣɢͫᴀ SITHUM' //මෙතන නම.
global.group2 = 'https://chat.whatsapp.com/GJ9bAPxYpktAnqbXVsnRuf' //මෙතන grouplink එක.
global.packname = 'VIHANGA BOT' //මෙතන නම.
global.cap = '*By ᴠɪʜᴀɢᴀ 𝙱𝙾𝚃*' //මෙතන නම.
global.img = 'https://i.ibb.co/0fg52p7/20220715-162421.jpg' //මෙතන බොට්ගෙ photo එකට ඕන derect link එකක්.
global.ytchannel = 'https://youtube.com/channel/UC3ZwkFVKgeCY9BEA-cdutwA' //මෙතන කැමති ලින්ක් එකක්.
global.monayawal = '100000' //මෙතන මාරු කරන්න එපා.
global.darahawal = '100' //මෙතන මාරු කරන්න එපා.
global.besiAwal = '15' //මෙතන මාරු කරන්න එපා.
global.goldAwal = '10' //මෙතන මාරු කරන්න එපා.
global.emeraldAwal = '5' //මෙතන මාරු කරන්න එපා.
global.umpanAwal = '5' //මෙතන මාරු කරන්න එපා.
global.potionAwal = '1' //මෙතන මාරු කරන්න එපා.
global.dripstyping = false //මෙතන මාරු කරන්න එපා.
global.dripsreadgroup = false //මෙතන මාරු කරන්න එපා. 
global.dripsreadall = false //මෙතන මාරු කරන්න එපා.
global.dripsrecord = false //මෙතන මාරු කරන්න එපා.
global.available = false //මෙතන මාරු කරන්න එපා.
global.unavailable = true //මෙතන මාරු කරන්න එපා.
global.limittot = 100, //මෙතන මාරු කරන්න එපා.
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' //මෙතන මාරු කරන්න එපා.
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' //මෙතන මාරු කරන්න එපා.
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' //මෙතන මාරු කරන්න එපා.
global.f4 = 'application/zip' //මෙතන මාරු කරන්න එපා.
global.f5 = 'application/pdf' //මෙතන මාරු කරන්න එපා.
global.f6 = 'application/vnd.android.package-archive' //මෙතන මාරු කරන්න එපා.
global.author = 'VIHANGA BOT' //මෙතන නම.
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=' //මෙතන මාරු කරන්න එපා.
global.sessionName = 'session' //මෙතන මාරු කරන්න එපා.
global.prefa = ['','!','.','🐦','🐤','🗿'] //මෙතන මාරු කරන්න එපා.
global.sp = '⭔' //මෙතන emoji එකක්.
global.mess = {
    success: '*හරි*',
        ban: '*සමාවන්න, ඔබ තහනම් කර ඇති බව පෙනේ😔😔 ටයිප් කරන්න . හිමිකරු තහනම ඉවත් කිරීමට ඉල්ලීමට හරි*',
    horny: '*nsfw අක්‍රිය කර ඇත කරුණාකර එය සක්‍රීය කරන ලෙස හිමිකරුගෙන් විමසන්න*',
    admin: '*මෙම cmd පරිපාලක සඳහා පමණි, මට ඔබව දැනෙන නමුත් කණගාටුයි*',
    botAdmin: '*නිසි ගෞරවයෙන් ඔබට කරුණාකර bot පරිපාලනය ලබා දිය හැකිද?*',
    owner: '*මෙම විධානය බෝට්ටු හිමිකරු සඳහා පමණි, මට ඔබව දැනෙන නමුත් කණගාටුයි*',
    group: '*මෙම විශේෂාංගය කණ්ඩායම් සඳහා පමණි okay*',
    private: '*මෙම විශේෂාංගය භාවිතා කළ හැක්කේ dm okay හි පමණි*',
    bot: '*පරිශීලක බොට් අංකය සඳහා විශේෂ විශේෂාංග හරි*',
    wait: '*ටිකක් ඉන්න ⏳*',
    endLimit: '*Brothers Daily Limit කල් ඉකුත් වී ඇත, .buy සීමාව මිලදී ගැනීමේ සීමාව ටයිප් කරන්න, සටහන: සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ*',
}
global.limitawal = {
    premium: "Infinity",
    free: 200
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./lib/20220602_094206.png')  
global.bc = fs.readFileSync('./lib/20220602_094206.png')
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
