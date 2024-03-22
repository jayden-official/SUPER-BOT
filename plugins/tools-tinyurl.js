import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] ENTER A LINK/URL WHICH YOU WANT TO FRAME*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `https://github.com/Khalid-official *[❗] ERROR, CHECK THAT THE TEXT YOU ENTERED IS A TEXT AND ENTER IT AGAIN*`
let done = `*LINK SUCCESSFULLY SHORTENED!!*\n\n*OLD LINK:*\n${text}\n*SHORTENED LINK:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
