import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
this.tekateki = this.tekateki ? this.tekateki : {}
if (!(id in this.tekateki)) return m.reply('❗𝗧𝗛𝗔𝗧 𝗥𝗜𝗗𝗗𝗟𝗘 𝗜𝗦 𝗢𝗩𝗘𝗥 𝗗𝗜𝗖𝗞 𝗛𝗘𝗔𝗗❗')
if (m.quoted.id == this.tekateki[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tekateki[id][2]
m.reply(`*✅𝗖𝗢𝗥𝗥𝗘𝗖𝗧 𝗔𝗡𝗦𝗪𝗘𝗥✅!*\n+${this.tekateki[id][2]} Exp`)
clearTimeout(this.tekateki[id][3])
delete this.tekateki[id]
} else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`‼️𝗬𝗢𝗨   𝗔𝗟𝗠𝗢𝗦𝗧   𝗗𝗜𝗗 𝗜𝗧 𝗕𝗨𝗗𝗗𝗬‼️!`)
else m.reply('‼️𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧   𝗔𝗡𝗦𝗪𝗘𝗥   𝗕𝗟𝗨𝗗‼️')}
return !0
}
handler.exp = 0
export default handler