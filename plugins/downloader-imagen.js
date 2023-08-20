import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
   if (!text) throw `✳️ Enter the image you want to search for \n\n📌 Example: *${usedPrefix + command}* Billie Eilish`
   let res = await fg.googleImage(text)
   conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Result of : *${text}*`.trim(), m)
}
handler.help = ['image']
handler.tags = ['img']
handler.command = /^(img|image|gimage|image)$/i
handler.diamond = true

export default handler