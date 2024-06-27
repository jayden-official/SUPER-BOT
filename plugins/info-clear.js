/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: 'https://github.com/jayden-official *[❗] Use this command directly in the main number of the Bot*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './SuperSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: 'https://github.com/jayden-official *[❗] No file found that includes the chat ID*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `https://github.com/jayden-official *[❗] Deleted ${filesDeleted} session files*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error reading session folder or files:', err);
    await conn.sendMessage(m.chat, {text: 'https://github.com/jayden-officialhttps://github.com/jayden-official *[❗] An error occurred while deleting session files*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `https://github.com/Khalid-official *👋 Hello! Now do you see me?*\n\n*[❗] If the Bot does not respond to your commands please do a little spam*\n\n*—◉ Example:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(fixmsgespera|ds|clear)$/i;
export default handler;
