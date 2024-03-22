let handler = async (m, { command, text }) => m.reply(`https://github.com/Khalid-official 
*⁉️ 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦 ⁉️*
  
*Questions:* ${text}
*Response:* ${['Yes', 'Maybe yes', 'Possibly', 'Probably not', 'No', 'Impossible', 'I dont know', 'can never be'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^question|preguntas|apakah$/i
export default handler
