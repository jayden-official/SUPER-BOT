import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗] ENTER THE NAME OF THE APK YOU WANT TO SEARCH*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let mystic = await translate(`${gPlay.descripcion}`, { to: 'es', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 Result: ${gPlay.title}
🧬 Identifier: ${gPlay.id}
⛓️ Link: ${gPlay.link}
🖼️ Image: ${gPlay.image}
✍️ Developer: ${gPlay.developer}
📜 Description: ${mystic.text}
💲 Currency: ${gPlay.currency}
🎭 Free?: ${gPlay.free}
💸 Price: ${gPlay.price}
📈 Score: ${gPlay.score}`},{quoted:m})
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
