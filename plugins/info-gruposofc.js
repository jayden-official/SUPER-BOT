let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*➤ 𝐛𝐨𝐭 𝐥𝐢𝐧𝐤𝐬:*
*1.-* https://twitter.com/Khalid_niccur

*2.-* https://github.com/Khalid-niccur

*3.-* https://t.co/3frSXMbUH2
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/Khalid-niccur` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Khalid-niccur',
'mediaType': 2,
'previewType': 'pdf',
'title': '𝑻𝒓𝒂𝒏𝒔𝒇𝒐𝒓𝒎𝒆𝒓𝒔 𝒂𝒓𝒊𝒔𝒆 𝒂𝒏𝒅 𝒔𝒉𝒊𝒏𝒆⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://t.co/3frSXMbUH2' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = ['linkgc','grupos']
export default handler



//`.trim()
//await conn.sendFile(m.chat, media, 'mystic.jpg', str)}
//handler.command = /^linkgc|grupos$/i
//export default handler*/

/*
let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 𝚃𝙷𝙴 𝚂𝙷𝙰𝙳𝙾𝚆 𝙱𝚁𝙾𝙺𝙴𝚁𝚂 - 𝚃𝙴𝙰𝙼 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/FWmPWnVqpiQ4XNpLN98g3G

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs

*3.-* https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F

*4.-* https://chat.whatsapp.com/CjexkGVr37J6GuSdDVAHzC

*5.-* https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
*/
