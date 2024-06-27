let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*MESSENGER:* ${pesan}`
let teks = `*https://github.com/jayden-official âº€Ì·TÌ·RÌ·AÌ·NÌ·SÌ·FÌ·OÌ·RÌ·MÌ·EÌ·RÌ·SÌ·ðŸÌ·GÌ·RÌ·OÌ·UÌ·Pâº€*\n\nâ? ${oi}\n\nâ? *HANG TAGS:*\n`
for (let mem of participants) {
teks += `â”£âž¥ @${mem.id.split('@')[0]}\n`}
teks += `*â”?* ðð˜ ðð”ðŒðð‹ð„ðð„ð„ðŸððŽð“ \n\n*â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘â•‘â–Œâ•‘â–Œâ•‘â–Œâ•‘â–ˆ*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciÃ³n)$/i
handler.admin = true
handler.group = true
export default handler
