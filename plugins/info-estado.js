
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let pp = imagen4
  
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`╭────[ *𝐁𝐮𝐦𝐛𝐥𝐞🐝𝐛𝐞𝐞 𝐛𝐨𝐭* ]
│🏮💛Bot active duration💛🏮 
│🐝 𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝐤𝐡𝐚𝐥𝐢𝐝 𝐭𝐞𝐜𝐡*
│🐝𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐍𝐔𝐌𝐁𝐄𝐑= WA.ME/254736958034
│🐝𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌=https://t.co/3frSXMbUH2
│🐝𝐆𝐈𝐓𝐇𝐔𝐁 https://github.com/Khalid-niccur
╰────────────────\n\n${muptime}`) 
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}