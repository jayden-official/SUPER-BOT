let handler = async(m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += ` \n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? 'NON-PARTICIPANT' : 'PARTICIPANT'}]\n\n`
m.reply(`*LIST OF GROUPS THE BOT IS IN:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|grouplist|groupslist|grouplist)$/i
export default handler