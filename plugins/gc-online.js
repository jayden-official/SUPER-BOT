let handler = async (m, { conn, args, usedPrefix }) => {
    const { chats: data } = conn;

    const filteredParticipants = Object.values(data)
      .filter(({ jid, presence }) => jid && presence === 'composing' && jid.endsWith('@s.whatsapp.net') && jid !== conn.user.jid)
      .map(({ jid, name }) => ({ jid, name }));

    if (filteredParticipants.length === 0) {
        return conn.reply(m.chat, 'https://github.com/jayden-official No users online at the moment.', m);
    }

    const formattedText = filteredParticipants.map(({ jid, name }, index) => (
      `*${index + 1}.* ${name}\n*Tag:* @${jid.split('@')[0]}\n`
    )).join('\n');

    await conn.sendMessage(m.chat, { text: formattedText, mentions: filteredParticipants.map(({ jid }) => jid) });
}

handler.help = ['online']
handler.tags = ['utility']
handler.command = /^online$/i
export default handler
