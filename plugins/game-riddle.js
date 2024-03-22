import fs from 'fs'
let timeout = 60000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, 'https://github.com/Khalid-official *‼️THERE ARE STILL UNANSWERED RIDDLES IN THE CHAT‼️*', conn.tekateki[id][0])
throw false
}
let tekateki = JSON.parse(fs.readFileSync(`./src/game/riddle.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `https://github.com/Khalid-official 
ⷮ *${json.question}*
*• TIME⌚:* ${(timeout / 1000).toFixed(2)} seconds 
*• BONUS🎗️:* +${poin} Exp
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `https://github.com/Khalid-official *TIME IS OVER BLUD*😑!\n*Answer:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(riddle|acert|pregunta|adivinanza|tekateki)$/i
export default handler
