import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!text) throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] TIKTOK LINK MISSING, PLEASE ENTER A LINK OF SOME TIKTOK VIDEO*\n\n*—◉ EXAMPLE:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMYWFhKt2/`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗]  INCORRECT TIKTOK LINK, PLEASE ENTER LINK OF SOME TIKTOK VIDEO*\n\n*—◉ Example:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`;
  const texto = `https://github.com/jayden-official *[❗] @${m.sender.split`@`[0]}  WAIT A MOMENT AS I SEND YOUR TIKTOK VIDEO*`;
  // let buttons = [{ buttonText: { displayText: '♫ 𝙰𝚄𝙳𝙸𝙾 ♫' }, buttonId: `${usedPrefix}tomp3` }]
  try {
    const aa = {quoted: m, userJid: conn.user.jid};
    const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: '*THE SUPER-BOT*', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/jayden-official'}, mentionedJid: [m.sender]}}}, aa);
    await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataF = await tiktok.v1(args[0]);
    // let desc1 =  `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${dataF.nickname || 'Indefinido'}`
    const desc1 = `https://github.com/jayden-official *Hello! 🌟*\n*📽️ Here is your TikTok video.*\n\n*Remember that if you want to convert the video to audio, you can easily do so by replying to the video with the command #tomp3 🎧.*`;
    await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: desc1}, {quoted: m});
  } catch (e1) {
    try {
      const tTiktok = await tiktokdlF(args[0]);
      // let desc2 = `🔗 *Url:* ${tTiktok.video}`
      const desc2 = `https://github.com/jayden-official *Hello! 🌟*\n*📽️ Here is your TikTok video.*\n\n*Remember that if you want to convert the video to audio, you can easily do so by replying to the video with the command #tomp3 🎧.*`;
      await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: desc2}, {quoted: m});
    } catch (e2) {
      try {
        const p = await fg.tiktok(args[0]);
        // let te = `*𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${p.author || 'Indefinido'}`
        const te = `https://github.com/jayden-official *¡Hello! 🌟*\n*📽️ Here is your TikTok video.*\n\n*Remember that if you want to convert the video to audio, you can easily do so by replying to the video with the command #tomp3 🎧.*`;
        await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: te}, {quoted: m});
      } catch (e3) {
        try {
          const {author: {nickname}, video, description} = await tiktokdl(args[0]);
          const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
          // let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
          const cap = `https://github.com/jayden-official *¡Hello! 🌟*\n*📽️ Here is your TikTok video.*\n\n*Remember that if you want to convert the video to audio, you can easily do so by replying to the video with the command #tomp3 🎧.*`;
          await conn.sendMessage(m.chat, {video: {url: url}, caption: cap}, {quoted: m});
        } catch {
          throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] I'M SORRY, AN ERROR OCCURRED WHEN DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*`;
        }
      }
    }
  }
};
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i;
export default handler;

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return 'Enlace incorrecto';
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}
