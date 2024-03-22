let handler = async (m, { conn, args, usedPrefix, command }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn. user.jid)
let teks = `https://github.com/Khalid-official 🐝 *PREMIUM USERS*\n─────────────\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'listpremium']

export default handler