import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, participants, isPrems }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `https://github.com/jayden-official  The user you are mentioning is not registered in my database`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {
} finally {
let { name, limit, lastclaim, registered, regTime, age, premiumTime } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split `@` [0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*🔖𝐍𝐀𝐌𝐄 :* ${username} ${registered ? '(' + name + ') ': ''}
*📱𝐍𝐔𝐌𝐁𝐄𝐑 :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*🔗𝐋𝐈𝐍𝐊:* wa.me/${who.split`@`[0]}${registered ? '\n*⬆️ 𝐀𝐆𝐄:* ' + age + ' years' : ''}
*🏆𝐋𝐈𝐌𝐈𝐓:* ${limit} APPLICATIONS
*📇𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃:* ${registered ? 'Yeah': 'No'}
*⭐𝐏𝐑𝐄𝐌𝐈𝐔𝐌:* ${premiumTime > 0 ? 'Yeah' : (isPrems ? 'Yeah' : 'No') || ''}
*💫𝐒𝐄𝐑𝐈𝐀𝐋 𝐍𝐔𝐌𝐁𝐄𝐑 :* 
${sn}`
conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: m })
//conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
