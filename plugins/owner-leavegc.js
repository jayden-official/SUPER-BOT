let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*Goodbye everyone, the Bot says goodbye! (≧ω≦)ゞ*')
await conn.groupLeave(id)}
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
