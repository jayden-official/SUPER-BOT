let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗]REPLY TO THE STICKER OR IMAGE TO WHICH YOU WANT TO ADD A COMMAND OR TEXT*'
if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] YOU CAN ONLY ASSIGN COMMANDS OR TEXTS TO STICKERS AND IMAGES*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] USAGE ERROR, MISSING TEXT*\n\n*CORRECT COMMAND USE:*\n*—◉ ${usedPrefix + command} <text> <respond to sticker or image>*\n\n*EXAMPLE OF CORRECT USE OF THE COMMAND:*\n*—◉ ${usedPrefix + command} <#menu> <respond to sticker or image>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] ONLY THE OWNER CAN MAKE THE MODIFICATION*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] THE TEXT/COMMAND ASSIGNED TO THE STICKER/IMAGE WAS ADDED TO THE DATABASE CORRECTLY*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
