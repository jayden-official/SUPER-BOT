import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'https://github.com/jayden-official ⚠️ *_What do you want me to look for on YouTube?_*'
  let results = await yts(text)
  let tes = results.all
  console.log(tes)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_𝗟𝗶𝗻𝗸 :_* ${v.url}
↳ 🕒 *_𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 :_* ${v.timestamp}
↳ 📥 *_𝗨𝗽𝗹𝗼𝗮𝗱𝗲𝗱 :_* ${v.ago}
↳ 👁 *_𝗩𝗶𝗲𝘄𝘀 :_* ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
export default handler
