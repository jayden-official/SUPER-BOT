// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw 'https://github.com/jayden-official *What size width do I put?*' if (!toheight) throw '*How long do I put?*'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `https://github.com/jayden-official ⚠️ *_Remember to tag an image._*\n*📌 Example:* ${usedPrefix + command} 400 400`

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `https://github.com/jayden-official ⚠️ *The file ${mime} is not supported._*`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*🌿 RESIZE COMPRESSION 🌿*

*🌺 | BEFORE* ❏ Width : ${size.before.width} ❏ Height : ${size.before.height} * | AFTER* ❏ Width : ${size.after.width} ❏ Height : ${size.after.height} *🔗 | LINK* ❏ Original: ${link} ❏ Compressed : ${linkcompres}`, m)
}
handler.help = ['resize *<width> <height> <photo>*']
handler.tags = ['tools']
handler.command = /^(resize)$/i

export default handler
