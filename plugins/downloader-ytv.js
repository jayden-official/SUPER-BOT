import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw 'https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] 𝗜𝗻𝘀𝗲𝗿𝘁 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘄𝗶𝘁𝗵 𝗮 𝘆𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸*';
  await m.reply(`https://github.com/jayden-official *_⏳𝘄𝗮𝗶𝘁 𝗮𝗺 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝘃𝗶𝗱𝗲𝗼..⏳_*\n\n*◉ 𝘁𝗼 𝘀𝗲𝗿𝗰𝗵 𝗳𝗼𝗿 𝗱𝗼𝗰𝘂𝗺𝗲𝗻𝘁 𝘃𝗶𝗱𝗲𝗼 𝘂𝘀𝗲 #playdoc ᴏ #play.2 ᴏ #video ◉*`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `https://github.com/jayden-official *◉-⌈📥𝗦𝗨𝗣𝗘𝗥 𝗗𝗢𝗖 📥⌋-◉*\n❏ *𝗧𝗶𝘁𝗹𝗲:* ${ttl}\n❏ *𝗦𝗶𝘇𝗲:* ${size}`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `https://github.com/jayden-official *◉-⌈📥 𝗦𝗨𝗣𝗘𝗥 𝗗𝗢𝗖 📥⌋-◉*\n❏ *𝗧𝗶𝘁𝗹𝗲:* ${n}\n❏ *𝘀𝗶𝘇𝗲:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] Error no possible video found*', m);
    }
  }
};
handler.command = /^ytmp4doc|video|ytmp4.2|ytv.2$/i;
export default handler;
