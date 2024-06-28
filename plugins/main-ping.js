import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix}) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const old = performance.now();
  const neww = performance.now();
  const speed = (neww - old).toFixed(5);
  const name = await
  conn.getName(m.sender);
  const prova = {
    'key': {
      'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo',
    }, 'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      }}, 'participant': '0@s.whatsapp.net',
  };
  const gmt = new Date(0).getTime() - new Date('1 January 1970').getTime();
  const battery = ['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89', '88', '87', '86', '85', '84', '83', '82', '81', '80', '79', '78', '77', '76', '75', '74', '73', '72', '71', '70', '69', '68', '67', '66', '65', '64', '63', '62', '61', '60', '59', '58', '57', '56', '55', '54', '53', '52', '51', '50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40', '39', '38', '37', '36', '35', '34', '33', '32', '31', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'][Math.floor(((d * 1) + gmt) / 8460) % 100];
  const info = `https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39
║    ◉— ✳️𝔰𝔲𝔭𝔢𝔯 𝔟𝔬𝔱 𝔭𝔦𝔫𝔤✳️ —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║ 𝔫𝔞𝔪𝔢 : ${name}
║ 𝔲𝔭𝔱𝔦𝔪𝔢 : ${uptime} 
║ 𝔰𝔭𝔢𝔢𝔡 : ${speed} 𝔰𝔢𝔠𝔬𝔫𝔡𝔰


`.trim();
async function loading() {
  var hawemod = [
  "《 ▒▒▒▒▒▒▒▒▒▒▒ ██》10%",
  "《 ▒▒▒▒▒ ████》30%",
  "《 ▒▒▒🧡❤️███████》50%",
  "《 ▒🤣😂  ██████████》80%",
  "《 🤭🤗████████████》100%"
  ]   
        let { key } = await conn.sendMessage(m.chat, {text: `https://github.com/Khalid-official *☠BUMBLE🐝 BEE LOADING☠*`}, {quoted: m})
   for (let i = 0; i < hawemod.length; i++) {
     await new Promise(resolve => setTimeout(resolve, 300)); 
     await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m}); 
    }
    await conn.sendMessage(m.chat, {text: info, edit: key, mentions: conn.parseMention(name)}, {quoted: m});         
   }
  loading()    
  };
handler.help = ['infobot', 'speed'];
handler.tags = ['info', 'tools'];
handler.command = /^(ping|speed|pong)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
