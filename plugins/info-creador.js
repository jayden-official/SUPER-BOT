let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `*—◉ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙾𝚁  wa.me/254736958034*

*—◉ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙾𝚁  wa.me/254114098508*`.trim()   
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
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title':   '  𝖙𝖗𝖆𝖓𝖘𝖋𝖔𝖗𝖒𝖊𝖗𝖘 𝖗𝖎𝖘𝖊⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://github.com/Khalid-niccur' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler