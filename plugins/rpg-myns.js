import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`┏┅━━━━━━━━━━━━ ┅ ━
┃ *𝐒𝐄𝐑𝐈𝐀𝐋 𝐍𝐔𝐌𝐁𝐄𝐑 :* 
┃ ${sn}
┗┅━━━━━━━━━━━━ ┅ ━`.trim())}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler
