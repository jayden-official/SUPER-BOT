let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
if (name == 'undefined') name = 'Undefined'
let a = []
let b = text.split('|')
if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] use format ${usedPrefix + command} Question? |Option1|Option2...*`
if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] use format ${usedPrefix + command} Question? |Option1|Option2...*`
for (let c = 1; c < b.length; c++) { a.push([b[c]])}
let caption = `*quest by:*\n${name}\n*question:*\n${text.split('|')[0]}`
return conn.sendPoll(m.chat, caption, a, m)}
handler.help = ['poll question|option|option']
handler.tags = ['group']
handler.command = ['poll', 'poll']
export default handler