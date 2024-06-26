let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`https://github.com/jayden-official *${toM(a)}, 💔 have divorced💔 ${toM(b)},  tell us why😭 the two of you have split up💔*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['divorce','formarparejas']
handler.group = true
export default handler
