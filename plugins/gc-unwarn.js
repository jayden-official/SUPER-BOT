let handler = async(m, { conn, args, groupMetadata}) => {
         let who
         if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
         else who = m.chat
         if (!who) throw `https://github.com/jayden-official ✳️ Tag or mention someone`
         if (!(who in global.db.data.users)) throw `https://github.com/jayden-official ✳️ The user is not found in my database`
        let warn = global.db.data.users[who].warn
        if (warn > 0) {
          global.db.data.users[who].warn -= 1
          m.reply(`https://github.com/jayden-official ⚠️ *DELWARN*
          
 Warnings: *-1*
 Total Warns: *${warn - 1}*`)
          m.reply(`✳️ An admin lowered his warning, now you have *${warn - 1}*`, who)
          } else if (warn == 0) {
             m.reply('https://github.com/jayden-official ✳️ The user has no warning')
         }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
