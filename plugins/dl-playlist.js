import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

if (!text) throw `✳ Enter a song title\n\n📌Example ${usedPrefix + command} Lil Peep hate my life`
let res = await yts(text)
let vid = res.videos[0]
if (!vid) throw `✳ Video/Audio not found`
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
//const url = 'https://www.youtube.com/watch?v=' + videoId
m.react('🎧')
let play = `
≡ FG MUSIC
┌──────────────
▢ 📌 Title : ${title}
▢ 📆 Posted: ${ago}
▢ ⌚ Duration: ${timestamp}
▢ 👀 Views: ${views}
▢ 🖇 Url: ${url}
└──────────────`
  await m.reply(play)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = true

export default handler
