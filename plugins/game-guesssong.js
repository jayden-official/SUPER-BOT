import fetch from 'node-fetch'
import axios from 'axios'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'https://github.com/Khalid-official *‼️There are still unanswered songs in this chat.‼️*', conn.tebaklagu[id][0])
throw false
} //5LTV57azwaid7dXfz5fzJu
let res = await fetchJson(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tebaklagu.json`)
let json = res[Math.floor(Math.random() * res.length)]    
let caption = `https://github.com/Khalid-official 
𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗧𝗜𝗧𝗟𝗘 𝗢𝗙 𝗧𝗛𝗘 𝗦𝗢𝗡𝗚
𝗧𝗶𝗺𝗲⌚ ${(timeout / 1000).toFixed(2)} seconds
𝗪𝗿𝗶𝘁𝗲𝘀✒️  *${usedPrefix}track* to get a track
𝗔𝘄𝗮𝗱𝘀🎗️: ${poin} XP
‼️𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗧𝗛𝗜𝗦 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗪𝗜𝗧𝗛 𝗧𝗛𝗘 𝗔𝗡𝗦𝗪𝗘𝗥𝗦‼️!`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `https://github.com/Khalid-official *Time's up!\nThe answer is* ${json.jawaban}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^guesssong|canción$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
