let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] RESPOND TO A TEXT, MESSAGE, IMAGE, ETC. YANADE A TEXT AS KEYWORD*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] USE *${usedPrefix}list${which}* TO SEE LIST OF MESSAGES`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' YOU HAVE REGISTERED IN THE MESSAGE LIST`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ADDED MESSAGE SUCCESS LIST LIKE '${text}'*\n*LOG IN WITH${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler