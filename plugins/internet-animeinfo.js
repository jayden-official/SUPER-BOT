import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ENTER THE NAME OF SOME ANIME TO SEARCH*`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `
🎀 • *Title:* ${result.title}
🎋 • *Format:* ${result.type}
📈 • *Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *Total episodes:* ${result.episodes}
🎈 • *Duration: ${result.duration}*
✨ • *Based on:* ${result.source.toUpperCase()}
💫 • *Premiered:* ${result.aired.from}
🎗 • *Finished:* ${result.aired.to}
🎐 • *Popularity:* ${result.popularity}
🎏 • *Favorites:* ${result.favorites}
🎇 • *Rating:* ${result.rating}
🏅 • *Rank:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${results.text}
❄ • *Ringkasan:* ${results2.text}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*[❗] ERROR, TRY AGAIN*`  
}}
handler.command = /^(anime|animeinfo)$/i
export default handler 
