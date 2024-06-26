/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] Reply to a video that you want to convert into a gif with audio*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `https://github.com/jayden-official *[❗]  the file type ${mime}  is not correct, please reply to a video that you want to convert into a gif with audio*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*here is the results*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
