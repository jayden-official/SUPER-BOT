const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const why = `https://github.com/jayden-official *[❗] 
Incorrect use of the command.*\n\n*—◉ Example of valid use:*\n*◉ ${usedPrefix + command} @${m.sender.split('@')[0]}*\n*◉ ${usedPrefix + command} ${m.sender.split('@')[0]}*\n*◉ ${usedPrefix + command} <message>*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) return conn.reply(m.chat, why, m, {mentions: [m.sender]});
  switch (command) {
    case 'addowner':
      const nuevoNumero = who;
      global.owner.push([nuevoNumero]);
      await conn.reply(m.chat, '*[❗] 
New number successfully added to the owners list.*', m);
      break;
    case 'delowner':
      const numeroAEliminar = who;
      const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
      if (index !== -1) {
        global.owner.splice(index, 1);
        await conn.reply(m.chat, 'https://github.com/jayden-official *[❗]  The number was successfully removed from the owners list.*', m);
      } else {
        await conn.reply(m.chat, 'https://github.com/jayden-official *[❗] The number entered does not exist in the owners list.*', m);
      }
      break;
  }
};
handler.command = /^(addowner|delowner)$/i;
handler.rowner = true;
export default handler;
