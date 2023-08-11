async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '👉 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n')
const replyMessage = (message.length === 0) ? "*NO SUB BOTS AVAILABLE. CHECK LATER.*" : message
await m.reply( '*—◉ HERE IS THE LIST OF ACTIVE SUBBOTS (SERBOT/JADIBOT) 🤖️*\n\n*◉ YOU CAN CONTACT THEM TO ASK THEM TO JOIN YOUR GROUP, BE RESPECTFUL!!*\n\n*[❗] THE SHADOW BROKERS- TEAM DISCLAIMS ALL LIABILITY OR EVENTS OCCURRED WITH REGARD TO THE BOT OR SUBBOTS*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
