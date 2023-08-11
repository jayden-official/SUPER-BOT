let handler = async(m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
let text = `*—◉
> Tutorial: https://youtu.be/eC9TfKICpcY
> Official Website: https://boxmineworld.com
> Dashboard: https://dash.boxmineworld.com/home
> Panel: https://panel.boxmineworld.com
> Support: https://discord.gg/84qsr4v

------------------------------------
—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻-𝚃𝙴𝚁𝙼𝚄𝚇
> https://youtu.be/yRS4m36Zwkw

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> Commands:
-cd && termux-setup-storage
- apt-get update -y && apt-get upgrade -y
-pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
- git clone https://github.com/BrunoSobrino/TheMystic-Bot-MD.git && cd TheMystic-Bot-MD
-npm start

------------------------------------

—◉ ✔️ ACTIVATE IN CASE OF STOP IN TERMUX ✔️
TYPE THE FOLLOWING COMMANDS ONE BY ONE:
> cd TheMystic-Bot-MD
>npm start

------------------------------------

—◉ 👽 GET ANOTHER QR CODE IN TERMUX 👽
TYPE THE FOLLOWING COMMANDS ONE BY ONE:
> cd TheMystic-Bot-MD
> rm -rf MysticSession
> npm start`.trim()
let buttonMessage= {
'document': { url: `https://github.com/Khalid-niccur` },
'mimetype': `application/${document}`,
'fileName': `「 𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Khalid-niccurD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ',
'body': wm,
'thumbnail': image1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
//{buttonId: `${usedPrefix}donate`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = ['installbot','installbot']
export default handler