import axios from "axios"
let handler = async(m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/+18-${command}.json`)).data
let haha = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 NEXT 🔄', `${usedPrefix + command}`]], m)
}
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', ' yuri2', 'yaoi', 'yaoi2', 'panties', 'tits', 'booty', 'ecchi', 'furro', 'hentai', 'rag', 'imageneslesbians', 'penis', 'porn' , 'randomxxx', 'breasts']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', ' yuri2', 'yaoi', 'yaoi2', 'panties', 'tits', 'booty', 'ecchi', 'furro', 'hentai', 'rag', 'imageneslesbians', 'penis', 'porn' , 'randomxxx', 'breasts']
handler.tags = ['anime']
export default handler