let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] USER ${usedPrefix}list${which}  to see the list*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' not registered in message list*`
delete msgs[text]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] successfully delete the message with the name from the message list  '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler