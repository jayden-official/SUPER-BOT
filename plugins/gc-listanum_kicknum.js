/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`https://github.com/jayden-official *[❗] ENTER THE PREFIX OF SOME COUNTRY TO SEARCH FOR NUMBERS IN THIS GROUP OF THAT COUNTRY, EXAMPLE:${usedPrefix + command} 254*`) 
if (isNaN(args[0])) return m.reply(`https://github.com/jayden-official *[❗] ENTER THE PREFIX OF SOME COUNTRY TO SEARCH FOR NUMBERS IN THIS GROUP OF THAT COUNTRY, EXAMPLE:: ${usedPrefix + command} 52*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`https://github.com/jayden-official *[❗] IN THIS GROUP THERE IS NO NUMBER WITH THE PREFIX +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `https://github.com/jayden-official *LIST OF NUMBERS WITH THE PREFIX +${lol} WHO ARE IN THIS GROUP:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] THE OWNER OF THE BOT DOES NOT HAVE THE RESTRICTIONS ENABLED (#ENABLE RESTRICT) CONTACT HIM TO ENABLE IT*') 
if (!isBotAdmin) return m.reply('https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] THE BOT IS NOT AN ADMIN, IT CANNOT EXTERMINATE PEOPLE*')          
conn.reply(m.chat, `https://github.com/jayden-official *[❗] INCLUDING DELETION OF NUMBERS WITH THE PREFIX +${lol}, EVERY 10 SECONDS A USER WILL BE ELIMINATED*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `https://github.com/Khalid-official @${user.split("@")[0]} HAS ALREADY BEEN ELIMINATED OR HAS LEFT THE GROUP*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('https://github.com/jayden-official *[❗] 𝙴𝚁𝚁𝙾𝚁*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
