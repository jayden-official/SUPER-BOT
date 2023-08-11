export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('STONE') || m.text.includes('PAPER') || m.text.includes('SCISSORS') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*[❗] Hello @${m.sender.split`@`[0]}, it is forbidden to talk to the bot's private message, so you will be blocked*`, false, { mentions: [m.sender] })
await this.updateBlockStatus(m.chat, 'block')}
return !1
}
