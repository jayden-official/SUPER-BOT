import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];
  //const s = seconds: '4556'
  // const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝑇ℎ𝑒 𝑀𝑦𝑠𝑡𝑖𝑐 - 𝐵𝑜𝑡', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
  // const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}
  if (/^bot|Jayde-n|frank|robot|jayden|super$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    await m.reply(`‎https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39 *𝗛𝗘𝗟𝗟𝗢 𝗔𝗠 𝗦𝗨𝗣𝗘𝗥 𝗕𝗢𝗧. 𝗛𝗢𝗪 𝗠𝗔𝗬 𝗜 𝗔𝗦𝗦𝗜𝗦𝗧*`);
    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
  }
  return !0;
};
export default handler;
