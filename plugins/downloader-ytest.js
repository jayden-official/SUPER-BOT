/* creditos del código a @darlyn1234 */
import YTDL from "../lib/ytdll.js";
import axios from "axios";
import fs from "fs";
import NodeID3 from "node-id3";
import ytdl from "ytdl-core";

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) return m.reply('https://github.com/jayden-official *[❗] enter a YouTube link.*')
  await m.reply(`https://github.com/jayden-official *_⏳𝘄𝗮𝗶𝘁 𝗽𝗮𝘁𝗶𝗲𝗻𝘁𝗹𝘆 𝗮𝗺 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗮𝘂𝗱𝗶𝗼 𝗱𝗼𝗰𝘂𝗺𝗲𝗻𝘁 𝗮𝘀 𝗶𝘁 𝗺𝗮𝘆 𝘁𝗮𝗸𝗲 𝗮 𝘄𝗵𝗶𝗹𝗲...⏳_*`);
  try {
const extract = (await ytdl.getBasicInfo(text)).videoDetails.title;      
      
  await YTDL.mp3(text).then(async (s) => {
  const tags = {
    title: s.meta.title || "-",
    artist: s.meta.channel || "-",
    album: `${s.meta.keywords[0] ? s.meta.keywords[0] : s.meta.channel}`,
    year: s.meta.publicDate || "-",
    genre: s.meta.category || "-",
    comment: {
      language: "spa",
      text: '🤴🏻 Descarga por BrunoSobrino & TheMystic-Bot-MD 🤖',
    },
    unsynchronisedLyrics: {
      language: "spa",
      text: '🤴🏻 Descarga por BrunoSobrino & TheMystic-Bot-MD 🤖',
    },
    image: {
      mime: "image/jpeg",
      type: {
        id: 3,
        name: "front cover",
      },
      description: "YouTube Thumbnail",
      imageBuffer: await axios.get(s.meta.image, {responseType: "arraybuffer"}).then((response) => Buffer.from(response.data, "binary")),
    },
    mimetype: 'image/jpeg',
    copyright: "Copyright Darlyn © 2023",
  };
  await NodeID3.write(tags, s.path);
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./${s.path}`), mimetype: "audio/mpeg", fileName: `${s.meta.title || "-"}.mp3`,}, {quoted: m});
  fs.unlinkSync(`./${s.path}`);
});
  } catch (e) {
    console.log(e);
    m.reply(new Error(e).message);
  }
};
handler.help = ['ytmetadata', 'ytest'].map((v) => v + ' < url >');
handler.tags = ['downloader'];
handler.command = /^(download|ytest)$/i;
export default handler;
