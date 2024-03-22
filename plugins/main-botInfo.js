import { cpus as _cpus, totalmem, freemem } from 'os'
import utility from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
   std: 'JEDEC', // 'YES' (default) | 'IEC' | 'JEDEC'
   decimalPlaces: 2,
   keepTrailingZeroes: false,
   render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
   const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
   const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
   const used = process.memoryUsage()
   const cpus = _cpus().map(cpu => {
     cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
     return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
   }, {
     speed: 0,
     overall: 0,
     times: {
       user: 0,
       nice: 0,
       sys: 0,
       idle: 0,
       irq: 0
     }
   })
   let old = performance.now()
  
   let neww = performance.now()
   let speed = neww - old
  
let infobt = `
≡ *BUMBLEBEE BOT INFO*
  *STATE*
🐝 *${groupsIn.length}* Group Chats
🐝 *${groupsIn.length}* United groups
🐝 *${groupsIn.length - groupsIn.length}* Abandoned groups
🐝 *${chats.length - groupsIn.length}* Private chats
🐝 *${chats.length}* Total Chats

*≡ OWNER*
   KHALID-TECHNOLOGIES
🐝Instagram :
   •https://github.com/Khalid-official
🐝 WhatsApp :
   • (DM ONLY WHEN NECESSARY)
🐝 GitHub :
   • https://github.com/Khalid-official/BUMBLEBEE-BOT
 
  *≡ HELPERS* *CRISS*
🐝 WhatsApp : wa.me/254114098508
   khalid+TECHNOLOGY 
🐝 WhatsApp : wa.me/254736958034

  *≡ S E R V E R*
*🛑RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵FreeRAM:* ${format(freemem())}

*≡ NodeJS Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length )), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
m.reply(infobt)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'git','botinfo']

export default handler