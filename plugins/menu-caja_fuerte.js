let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 ${taguser} 💖彡*

ㅤㅤㅤㅤ *🗳️<𝕊𝔸𝔽𝔼/>🔐*

- HERE YOU CAN SAVE MESSAGES YOU WANT TO SEE LATER

*<𝔸𝔻𝔻 𝕋𝕆 𝕋ℍ𝔼 𝕃𝕀𝕊𝕋/>*

° ඬ⃟🗳️ _${usedPrefix}agregarmsg *<text/command/keyword>* (responds to a text)_
° ඬ⃟🗳️ _${usedPrefix}addvn *<text/command/keyword>* (responds to a voice memo)_
° ඬ⃟🗳️ _${usedPrefix}addvideo *<text/command/keyword>* (responds to a video)_
° ඬ⃟🗳️ _${usedPrefix}addaudio *<text/command/keyword>* (responds to an audio)_
° ඬ⃟🗳️ _${usedPrefix}agregarimg *<text/command/keyword>* (responds to an image)_
° ඬ⃟🗳️ _${usedPrefix}addsticker *<text/command/keyword>* (responds to a sticker)_

*<ℂ𝕆𝕄𝕄𝔸ℕ𝔻 𝕃𝕀𝕊𝕋/>*

° ඬ⃟🗳️ _${usedPrefix}listamsg_
° ඬ⃟🗳️ _${usedPrefix}listavn_
° ඬ⃟🗳️ _${usedPrefix}listavideo_
° ඬ⃟🗳️ _${usedPrefix}listaaudio_
° ඬ⃟🗳️ _${usedPrefix}listaimg_
° ඬ⃟🗳️ _${usedPrefix}listasticker_

*<𝕊𝔼𝔼 𝕋𝔼𝕏𝕋𝕊 𝕆ℝ 𝔽𝕀𝕃𝔼𝕊/>*

° ඬ⃟🗳️ _${usedPrefix}vermsg *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}vervn *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}vervideo *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}veraudio *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}verimg *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}versticker *<text/command/keyword>*_

*<𝔼𝕃𝕀𝕄𝕀ℕ𝔸𝕋𝔼/>*

° ඬ⃟🗳️ _${usedPrefix}eliminarmsg *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}deletevn *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}deletevideo *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}removeaudio *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}deleterimg *<text/command/keyword>*_
° ඬ⃟🗳️ _${usedPrefix}removesticker *<texto/comando/palabra clave>*_`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
