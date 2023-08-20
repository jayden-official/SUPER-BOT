import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '⚠️️ Respond to an image or video.'
if (!text) throw '⚠️️ Enter the new weight of the image/video.'
   if (isNaN(text)) throw ' 🔢 numbers only'
if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw `⚠️️ Unsupported format`
let img = await q.download()
let url = await uploadImage(img)

if (/image\/(jpe?g|png)/.test(mime)) {
conn.sendMessage(m.chat, { image: {url: url}, caption: `💛𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚎𝚍 𝚋𝚢 𝚋𝚞𝚖𝚋𝚕𝚎🐝𝚋𝚎𝚎 𝚋𝚘𝚝💛`, fileLength: `${text}`, mentions: [m.sender] }, { ephemeralExpiration: 24*3600, quoted :m})
} else if (/video/.test(mime)) {
return conn.sendMessage(m.chat, { video: {url: url}, caption: `Here you go`, fileLength: `${text}`, mentions: [m.sender] }, { ephemeralExpiration: 24*3600, quoted: m })}
}
handler.tags = ['tools']
handler.help = ['size <quantity>']
handler.command = /^(length|filelength|editsize|tosize|size)$/i
export default handler