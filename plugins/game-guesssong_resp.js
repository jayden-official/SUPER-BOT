import similarity from 'similarity'
const threshold = 0.72
let handler = {
async before(m) {
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !*/GUESS THE TITLE OF THE SONG*/i.test(m.quoted.text)) return !0
this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
if (!(id in this.tebaklagu)) return m.reply('*The game is over*')
if (m.quoted.id == this.tebaklagu[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]))
if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tebaklagu[id][2]
m.reply(`https://github.com/Khalid-official ✅*CORRECT💯*!\n+${this.tebaklagu[id][2]} XP`)
clearTimeout(this.tebaklagu[id][3])
delete this.tebaklagu[id]
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`Cashiers!`)
else m.reply(`https://github.com/Khalid-official ❌*INCORRECT*!`)
}
return !0
},
exp: 0
}
export default handler
