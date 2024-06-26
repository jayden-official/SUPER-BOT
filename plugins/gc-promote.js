let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `https://github.com/jayden-official *[❗] APPROPRIATE USE *\n\n*┯┷*\n*┠≽ ${usedPrefix}admin @tag*\n*┠≽ ${usedPrefix} promote -> reply to a message*\n*┷┯*`, m )
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `https://github.com/jayden-official *[ ⚠️ ] The number entered is incorrect, please enter the correct number*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `https://github.com/jayden-official *[ ✅ ] ORDERS RECEIVED*`, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
