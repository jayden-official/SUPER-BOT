const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `chi? tagga qualcuno`;
  if (!m.mentionedJid[0] && !m.quoted) return;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  let duration = 0;

  // Verifica se la durata è specificata nel comando
  const durationMatch = command.match(/\d+/);
  if (durationMatch) {
    duration = parseInt(durationMatch[0]);
  } else {
    m.reply('Specify a valid duration. For example: .mute @user for 5 min');
    return;
  }

  // Converte la durata da minuti a millisecondi
  const durationMs = duration * 60000;

  users[who].muto = true;
  m.reply(`*Mutated* SUCCESSFULLY ✓ *all messages sent to you will be deleted. suffer.* Duration: ${duration} min`);

  // Imposta il timer in base alla durata specificata
  setTimeout(() => {
    users[who].muto = false;
    conn.reply(m.chat, 'You started talking again after the timer expired.', m);
  }, durationMs);
};

handler.command = /^mute$/i;
handler.admin = true;
export default handler;