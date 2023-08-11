/*By https://github.com/ALBERTO9883 */
import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
try {  
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
if (!text) throw `*[❗] ENTER THE NAME OF THE PACKAGE YOU WANT TO SEARCH*`
let json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
let res = jsons.result.map((v, index) => `*🪴 • Result:* ${1 + index}\n*🌵 • Name:* ${v.title}\n*🍂 • Url:* ${v.url}`).join` \n\n───\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*[❗] ERROR, PLEASE TRY AGAIN*')}}
handler.tags = ['sticker', 'search']
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
