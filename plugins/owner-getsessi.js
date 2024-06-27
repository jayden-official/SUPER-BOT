import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('https://github.com/jayden-official *[❗] Please wait, Downloading the bot session file*')
    let sesi = await fs.readFileSync('./SuperSession/creds.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

export default handler
