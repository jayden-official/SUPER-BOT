import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] Respond to a video or a voice note to be converted to mp3*`
let media = await q.download()
if (!media) throw 'https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] an error occurred, please try again later*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw 'https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] an internal error occurred when converting video/voice note to mp3*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
