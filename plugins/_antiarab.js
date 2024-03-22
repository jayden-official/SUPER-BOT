let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {

if (m.sender.startsWith('92' || '92')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
 
if (m.sender.startsWith('+1' || '+1')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('33' || '33')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('243' || '243')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('966' || '966')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('44' || '44')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('48' || '48')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('1' || '1')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('211' || '211')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}   

if (m.sender.startsWith('994' || '994')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
} 
  
if (m.sender.startsWith('62' || '62')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('94' || '94')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('234' || '234')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('256' || '256')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
		
if (m.sender.startsWith('255' || '255')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('212' || '212')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
   
if (m.sender.startsWith('263' || '263')) {
m.reply(`*[❗] Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 
   
if (m.sender.startsWith('265' || '265')) {
m.reply(`*[❗] Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 
	
if (m.sender.startsWith('91' || '91')) {
m.reply(`*[❗]Arabic or psuedos numbers are not allowed in this group, so you will be removed from the group*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 	
   
}}
export default handler
