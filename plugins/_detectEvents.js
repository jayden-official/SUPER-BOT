// Code credits to @Gatito-kw //

/* GitHub: https://github.com/Kitten-kw */

/* Bot: https://github.com/Kitten-kw/nekobot-md */

import { WAMessageStubType } from '@adiwajshing/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants }) {
if (!m.messageStubType || !m.isGroup) return !0
    let groupName = (await conn.groupMetadata(m.chat)).subject
    let groupAdmins = participants.filter(p => p.admin)
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => global.image1)
    let img = await (await fetch(pp)).buffer()
    let chat = global.db.data.chats[m.chat]
    const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]
    const mentionsContentM = [m.sender, m.messageStubParameters[0]]
    let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message ": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@ ')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp. net" }
   
    if (chat.detect2 && m.messageStubType == 29) {
       let txt1 = `*A member was recently promoted to admin.*\n\n`
          txt1 += `*◦ Group:* ${groupName}\n`
          txt1 += `*◦ New admin:* @${m.messageStubParameters[0].split`@`[0]}\n`
          txt1 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: img, caption: txt1, mentions: mentionsString }, { quoted: fkontak2 })
}
    
    if (chat.detect2 && m.messageStubType == 30) {
       let txt2 = `*An administrator was recently demoted to a member.*\n\n`
          txt2 += `*◦ Group:* ${groupName}\n`
          txt2 += `*◦ Removed to:* @${m.messageStubParameters[0].split`@`[0]}\n`
          txt2 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: img, caption: txt2, mentions: mentionsString }, { quoted: fkontak2 })
}

    if (chat.detect2 && m.messageStubType == 27) {
       let txt3 = `*A new member recently joined the group.*\n\n`
          txt3 += `*◦ Group:* ${groupName}\n`
      if (!m.sender.endsWith('@g.us')) {
          txt3 += `*◦ Added to:* @${m.messageStubParameters[0].split`@`[0]}\n`
          txt3 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
    } else {
          txt3 += `*◦ Added:* @${m.messageStubParameters[0].split`@`[0]}\n`
    }
await conn.sendMessage(m.chat, { image: img, caption: txt3, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
    if (chat.detect2 && m.messageStubType == 28) {
       let txt4 = `*A group member was recently removed.*\n\n`
          txt4 += `*◦ Group:* ${groupName}\n`
      if (!m.sender.endsWith('@g.us')) {
          txt4 += `*◦ Removed to:* @${m.messageStubParameters[0].split`@`[0]}\n`
          txt4 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
    } else {
          txt4 += `*◦ Removed to:* @${m.messageStubParameters[0].split`@`[0]}\n`
    }
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt4, mentions: mentionsContentM }, { quoted: fkontak2 })
}
       
    if (chat.detect2 && m.messageStubType == 32) {
       let ax
     if (m.messageStubParameters[0] === m.sender) {
     ax = 'exited'
     } else {
     ax = 'deleted'
     }
       let txt5 = `*Recently ${ax} was a group member.*\n\n`
          txt5 += `*◦ Group:* ${groupName}\n`
      if (ax === 'deleted') {
          txt5 += `*◦ Removed to:* @${m.messageStubParameters[0].split`@`[0]}\n`
          txt5 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
    } else {
          txt5 += `*◦ Exited:* @${m.messageStubParameters[0].split`@`[0]}\n`
    }
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt5, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
    if (chat.detect2 && m.messageStubType == 26) {
       let action
     if (m.messageStubParameters[0].split`@`[0] === 'on') {
       action = 'closed'
       } else {
       action = 'open'
       }
       let txt6 = `*Group settings have recently been changed.*\n\n`
         txt6 += `*◦ Group:* ${groupName}\n`
         txt6 += `*◦ Group has:* ${'```' + action + '```'}\n`
         txt6 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt6, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
    if (chat.detect2 && m.messageStubType == 21) {
       let txt7 = `*The group name was recently changed.*\n\n`
          txt7 += `*◦ New name:* ${'```' + groupName + '```'}\n`
          txt7 += `*◦ Executed by:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt7, mentions: mentionsContentM }, { quoted: fkontak2 })
}

} /* Close the command */