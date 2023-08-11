let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'open': 'not_announcement',
'closed': 'announcement',
'open': 'not_announcement',
'close': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] 𝐖𝐑𝐎𝐍𝐆 𝐅𝐎𝐑𝐌𝐀𝐓!!*

*┏━━━❲ ✨𝐄𝐗𝐀𝐌𝐏𝐋𝐄✨ ❳━━━┓*
*┠┉↯ ${usedPrefix + command} open*
*┠┉↯ ${usedPrefix + command} close*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐄𝐃 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐋𝐘*')}
}
handler.help = ['group open / close', 'group open / close']
handler.tags = ['group']
handler.command = /^(group|group)$/i
handler.admin = true
handler.botAdmin = true
export default handler