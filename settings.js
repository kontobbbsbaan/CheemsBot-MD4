//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6283845409710'] //ur owner number
global.ownername = "😈🎭𝞙𝐼𝜦𝑁 𝑀𝞚𝐾𝛴𝛤 〽️🤬" //ur owner name
global.ytname = "YT: Kian" //ur yt chanel name
global.socialm = "GitHub: Kianganz1" //ur github or insta name
global.location = "Indonesian" //ur location

//bot bomdy 
global.owner = ['6283845409710']
global.ownertag = '6283845409710' //ur tag number
global.botname = '༺𝙈 𝙊 𝘿 𝙕 𝘽 𝙊 𝙏 𝙕༻' //ur bot name
global.linkz = "https://saweria.co/Kianganz" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/Kianganz1" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "🤬" //ur menu react emoji
global.themeemoji = "🎭" //ur theme emoji
global.packname = "𝞙𝐼𝜦𝑁 𝑀𝞚𝐾𝛴𝛤 " //ur sticker watermark packname
global.author = "" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/kian.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/kian.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/kian.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/kian.jpg") //ur thumb pic

//damtabase
global.premium = ['6283845409710'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝘿𝙊𝙉𝙀 ✓',
    admin: '𝙏𝙃𝙄𝙎 𝙁𝙀𝘼𝙏𝙐𝙍𝙀 𝙄𝙎 𝙊𝙉𝙇𝙔 𝙁𝙊𝙍 𝘼𝘿𝙈𝙄𝙉!',
    botAdmin: '𝘽𝙊𝙏 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼𝘿𝙈𝙄𝙉 𝙁𝙄𝙍𝙎𝙏!',
    owner: '𝙏𝙃𝙄𝙎 𝙁𝙀𝘼𝙏𝙐𝙍𝙀 𝙄𝙎 𝙊𝙉𝙇𝙔 𝙁𝙊𝙍 𝙊𝙒𝙉𝙀𝙍!',
    group: '𝙁𝙀𝘼𝙏𝙐𝙍𝙀 𝙐𝙎𝙀𝘿 𝙊𝙉𝙇𝙔 𝙁𝙊𝙍 𝙂𝙍𝙊𝙐𝙋𝙎!',
    private: '𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎 𝙐𝙎𝙀𝘿 𝙊𝙉𝙇𝙔 𝙁𝙊𝙍 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏!',
    bot: '𝙏𝙃𝙄𝙎 𝙁𝙀𝘼𝙏𝙐𝙍𝙀 𝙄𝙎 𝙊𝙉𝙇𝙔 𝙁𝙊𝙍 𝘽𝙊𝙏',
    wait: '𝙋𝙍𝙊𝙎𝙀𝙎...',
    linkm: '𝙇𝙄𝙉𝙆 𝙉𝙔𝘼 𝙈𝘼𝙉𝘼?',
    error: '𝙀𝙍𝙊𝙍!!',
    endLimit: '𝙔𝙊𝙐𝙍 𝘿𝘼𝙄𝙇𝙔 𝙇𝙄𝙈𝙄𝙏 𝙃𝘼𝙎 𝙀𝙓𝙋𝙄𝙍𝙀𝘿, 𝙏𝙃𝙀 𝙇𝙄𝙈𝙄𝙏 𝙒𝙄𝙇𝙇 𝘽𝙀 𝙍𝙀𝙎𝙀𝙏 𝙀𝙑𝙀𝙍𝙔 12 𝙃𝙊𝙐𝙍𝙎',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: '𝙩𝙝𝙚 𝙣𝙨𝙛𝙬 𝙛𝙚𝙖𝙩𝙪𝙧𝙚 𝙝𝙖𝙨 𝙣𝙤𝙩 𝙗𝙚𝙚𝙣 𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚𝙙, 𝙥𝙡𝙚𝙖𝙨𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙩𝙝𝙚 𝙖𝙙𝙢𝙞𝙣 𝙩𝙤 𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
