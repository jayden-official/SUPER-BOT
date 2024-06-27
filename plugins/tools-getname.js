const handler = async (m, {conn, command}) => {
  try {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;
    const name = await conn.getName(who);
    m.reply(name);
  } catch {
    try {
      const who = m.quoted ? m.quoted.sender : m.sender;
      const name = await conn.getName(who);
      m.reply(name);
    } catch {
      throw `https://github.com/jayden-official Sorry, I can't try the others⍨`;
    }
  }
};
handler.help = ['getname <@tag/reply>'];
handler.tags = ['owner'];
handler.command = /^(get)?name?a?$/i;
handler.owner = false;
export default handler;
