//import db from '../lib/database.js'

let handler = async(m, { conn }) => {

   let hasil = Math.floor(Math.random() * 5000)
   let time = global.db.data.users[m.sender].lastmiming + 14400000
   if (new Date - global.db.data.users[m.sender].lastmiming < 14400000) throw `⏳ _Wait_ *${msToTime(time - new Date())}* _to return to mine_`
   global.db.data.users[m.sender].exp += hasil
   m.reply(`
🎉 Great! you mined *${hasil} XP*`)
   global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['mine']
handler.tags = ['econ']
handler.command = ['mining', 'miming', 'mine']

export default handler

function msToTime(duration) {
   var milliseconds = parseInt((duration % 1000) / 100),
     seconds = Math.floor((duration / 1000) % 60),
     minutes = Math.floor((duration / (1000 * 60)) % 60),
     hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

   hours = (hours < 10) ? "0" + hours : hours
   minutes = (minutes < 10) ? "0" + minutes : minutes
   seconds = (seconds < 10) ? "0" + seconds : seconds

   return hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s)"
}