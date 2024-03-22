const toxicRegex = /fuckyou|fuck|fala|stupid|imbecile|pussy|silly|mafi|umbwa|matako|dinywa|malaya|balls|mjinga/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 2)) await m.reply(`${user.warn == 1 ? `Hello *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, saying the word (${isToxic}) is prohibited in this bot *${user.warn}/2* warning`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 2) {
       user.warn = 0
       await m.reply(`‼️𝗛𝗘𝗟𝗟𝗢 *@${m.sender.split`@`[0]}*, 𝗬𝗢𝗨 𝗘𝗫𝗘𝗘𝗗𝗘𝗗 2 𝗪𝗔𝗥𝗡𝗜𝗡𝗚𝗦 𝗕𝗘𝗖𝗔𝗨𝗦𝗘 𝗢𝗙 𝗨𝗦𝗜𝗡𝗚 𝗕𝗔𝗗 𝗟𝗔𝗡𝗚𝗨𝗔𝗚𝗘 𝗜𝗡 𝗧𝗛𝗘 𝗚𝗥𝗢𝗨𝗣, 𝗦𝗢𝗥𝗥𝗬 𝗬𝗢𝗨 𝗪𝗜𝗟𝗟 𝗕𝗘 𝗕𝗟𝗢𝗖𝗞𝗘𝗗 𝗔𝗡𝗗 𝗥𝗘𝗠𝗢𝗩𝗘𝗗 𝗙𝗥𝗢𝗠 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣‼️`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
