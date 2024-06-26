//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
const handler = async (m, {conn, text, isPrems}) => {
const date = global.db.data.users[m.sender].juegos + 21600000; //21600000 = 6 hs 
if (new Date - global.db.data.users[m.sender].juegos < 21600000) throw `https://github.com/jayden-official 『⏰』*WAIT*: ${msToTime(date - new Date())} *TO PLAY AGAIN*`
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000)
const exp = Math.floor(Math.random() * 10000)
const diamond = Math.floor(Math.random() * 300)
const money = Math.floor(Math.random() * 10000)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`https://github.com/jayden-official 😺 *WHAT A GOOD SUPPLY* 🐞🍀\n*GOOD:* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`https://github.com/jayden-official 😿 *NOO YOU ARE UNLUCKY YOU JUST LOST* : ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`https://github.com/jayden-official 😹 *_YOU ARE BAD THAT I TOOK OFF THE POWER NOW YOU ARE NO LONGER ADMIN‼️ FUCK YOU‼️_* 😹😹😹`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`https://github.com/jayden-official 😼 *_THIS IS GOOD😉, NOW YOU ARE AN ADMINSTRATOR, THE ONE WHO REMOVES ADMINS IS A PORN-HUB FAN_* 😂`)) 
if (ruleta === 'text5') return m.reply(`https://github.com/jayden-official *WOOW, SIR, YOU'RE IN LUCK, GO PLAY CASIONO*🎰\n*YOU WIN:* ${diamond} 💎`).catch(global.db.data.users[m.sender].diamond += diamond) 
if (ruleta === 'text6') return m.reply(`https://github.com/jayden-official 👑 *WOW THIS IS GOOD LUCK TO WIN TO BE PREMIUM FOR: 1 HOUR*⏰`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['game'];
handler.tags = ['xp'];
handler.command = /^(tryluck)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hour(s) " + minutes + " Minute(s)"}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
