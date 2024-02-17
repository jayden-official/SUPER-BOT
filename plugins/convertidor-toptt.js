import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] reply video/audio you want to convert to voice note/vn with caption .toptt*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] An internal error occurred. Please try again later *'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] Error occurred. Please try again later*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] An error occurred when converting the audio or a note. Please try again later *'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] Error occurred when converting the video. Please try again later *'
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler