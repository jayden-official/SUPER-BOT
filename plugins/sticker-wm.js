import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗]  RESPOND TO THE STICKER YOU WANT TO ADD A PACKAGE AND A NAME*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] REPLY TO THE STICKER WHO WANTS TO ADD A PACKAGE AND A NAME*'
let img = await m.quoted.download()
if (!img) throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗]  RESPOND TO THE STICKER YOU WANT TO ADD A PACKAGE AND A NAME*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] SORRY, SOMETHING WRONG. CHECK THAT YOU HAVE RESPONDED TO A STICKER AND ADDED A PACKAGE NAME AND A USER NAME*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|steal|wm$/i
export default handler
