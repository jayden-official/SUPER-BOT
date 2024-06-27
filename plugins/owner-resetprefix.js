const handler = async (m, {conn, text}) => {
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`https://github.com/jayden-official [❗𝐈𝐍𝐅𝐎❗] Il original prefixes has been reset.`);
};
handler.help = ['resetprefix'];
handler.tags = ['owner'];
handler.customPrefix = /resetprefix/i
handler.command = new RegExp
export default handler;
