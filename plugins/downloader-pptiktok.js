import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] enter the name or the username of the tiktok*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ]  here is the profile photo of${text}*`, m, false)}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
export default handler
