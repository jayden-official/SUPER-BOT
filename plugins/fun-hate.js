let handler = async (m, { conn, command, text }) => {
let love = `*😡😡️ HATE METER 😡😡*
*The hate for ${text} For you it is* *${Math.floor(Math.random() * 100)}%* *of a 100%*
*You should ask him/her the reasom for the hate*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(hate)$/i
export default handler