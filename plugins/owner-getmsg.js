let handler = async (m, { conn, command, usedPrefix, text }) => {
let which = command.replace(/ver/i, '')
if (!text) throw `https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] user *${usedPrefix}list${which}* kindly select from the list*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝙽𝙾 registered messages found on the list*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler