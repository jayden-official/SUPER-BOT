import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`https://github.com/Khalid-official *[❗] No puedes apagar el Bot principal.*`)
   m.reply(`https://github.com/Khalid-official *[❗] Dejarás de ser un Sub Bot en 5 segundos...*`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stopbot', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
export default handler; 
