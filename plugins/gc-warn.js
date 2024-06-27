const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = ' *😏STUPIDITY😏*';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `https://github.com/jayden-official *[❗] TAG A PERSON OR RESPOND TO THE MESSAGE YOU WANT THE PERSON TO BE WARNED*\n\n*—◉ EXAMPLE:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } 𝗬𝗢𝗨 𝗛𝗔𝗩𝗘 𝗥𝗘𝗖𝗜𝗘𝗩𝗘𝗗 𝗔 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣, 𝗥𝗘𝗠𝗘𝗠𝗕𝗘𝗥 𝗜𝗙 𝗜𝗧 𝗦𝗨𝗥𝗣𝗔𝗦𝗦𝗘𝗦 2 𝗬𝗢𝗨 𝗪𝗜𝗟𝗟 𝗕𝗘 𝗪𝗜𝗣𝗘𝗗 𝗢𝗨𝗧 𝗖𝗢𝗠𝗥𝗔𝗗𝗘!\nREASON: ${sdms}\n* 𝗪𝗔𝗥𝗡𝗜𝗡𝗚𝗦 ${
        user.warn
      }/2*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 2) {
    if (!bot.restrict) {
      return m.reply(
          'https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗]The owner of the bot does not have the restrictions enabled (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) contact him to enable it*',
      );
    }
    user.warn = 0;
    await m.reply(
        `https://github.com/Khalid-official  YOU WILL NOTICE ITS VARIANCE!!\n*@${
          who.split`@`[0]
        }*𝗬𝗢𝗨 𝗣𝗔𝗦𝗦𝗘𝗗* *2* *𝗪𝗔𝗥𝗡𝗜𝗡𝗚𝗦, 𝗬𝗢𝗨 𝗪𝗜𝗟𝗟 𝗕𝗘 𝗪𝗜𝗣𝗣𝗘𝗗 𝗢𝗨𝗧 𝗖𝗢𝗠𝗥𝗔𝗗𝗘* 👽`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
