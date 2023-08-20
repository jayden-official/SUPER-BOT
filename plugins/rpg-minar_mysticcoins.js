let handler = async (m, { conn, isPrems}) => { //lastmiming
let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['What pro 😎 have you mined',
'🌟✨ Brilliant!! you get',
'WOW!! you are a great Miner ⛏️ You get',
'You have mined!!',
'😲 You managed to Mine the amount of',
'Your income will rise thanks to the fact that you mined',
'⛏️⛏️⛏️⛏️⛏️ mining',
'🤩 YES!!! NOW YOU HAVE',
'The minaria is on your side, thats why you get',
'😻The luck of Minar',
'♻️ Your Mission has been accomplished, you managed to mine',
'⛏️ Mining has benefited you with',
'🛣️ You have found a place and by mining said place you get',
'👾 Thanks to the fact that you have undermined your income add up',
'Congratulations!! Now you have','⛏️⛏️⛏️ You get'])}`
let pp = 'https://movieposterhd.com/wp-content/uploads/2018/12/Bumblebee-2018-Poster-HD-.jpg'
let aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1
let aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1
let rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1
let rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1
let pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1
let pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1
const recompensas = { aqua: premium ? aquapremium : aqua, rock: premium ? rockpremium : rock, pancingan: premium ? pancinganpremium : pancingan }
let money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
let moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1
let time = user.lastcoins + 600000 // 10 min
if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️FLY IN ${msToTime(time - new Date())} TO CONTINUE MINING ${global.rpgshopp.emoticon('money')}⛏️*`,  m)
user.money += premium ? moneypremium : money  
let texto = ''
for (let reward of Object.keys(recompensas)) {
if (!(reward in user)) continue
user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}
let text = `*${premium ? '🎟️Premium Reward' : '🆓 Free Reward'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*\n\n🍁 𝐁 𝐎 𝐍 𝐃\n${texto}\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`
await conn.sendFile(m.chat, pp, 'mystic.jpg', text)
/*conn.sendButton(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*`, `🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, [
['𝙼𝙸𝙽𝙰𝚁 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 💎', `#minar`],
['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 ☘️', `#menu`]
], m,)*/
user.lastcoins = new Date * 1 
}
handler.help = ['minar2']
handler.tags = ['gata']
handler.command = ['minar2', 'miming2', 'mine2', 'minarmysticcoins', 'minarcoins', 'minarmystic'] 
handler.fail = null
handler.exp = 0
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " m y " + seconds + " s " }  
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
