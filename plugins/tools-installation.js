import fs from 'fs';
const handler = async (m, {conn, command, args, usedPrefix, DevMode}) => {
  const text = `
`.trim();

  conn.reply(m.chat, text, m, {
  });
};
handler.command = /^(installation)/i;
export default handler;