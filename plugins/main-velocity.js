import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import { performance } from 'perf_hooks';

let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let old = performance.now()
let neww = performance.now()
let speed =  (neww - old).toFixed(4)
  let { key } = await conn.sendMessage(m.chat, { text: 'https://github.com/jayden-official ══════ •⊰✧⊱• ══════\nAWAIT...\n══════ •⊰✧⊱• ══════' }, { quoted: m });
  const array = [
    "══════ •⊰✧⊱• ══════\n█▒▒▒▒▒▒▒▒▒ 10%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n██▒▒▒▒▒▒▒▒ 20%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n███▒▒▒▒▒▒▒ 30%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n████▒▒▒▒▒▒ 40%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n█████▒▒▒▒▒ 50%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n██████▒▒▒▒ 60%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n███████▒▒▒ 70%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n████████▒▒ 80%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n█████████▒ 90%\n══════ •⊰✧⊱• ══════", "══════ •⊰✧⊱• ══════\n██████████ 100%\n══════ •⊰✧⊱• ══════",
  ];

  for (let item of array) {
    await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 20)); // Delay 5 seconds
  }
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"contactMessage": { displayName: '𝐁𝐢𝐱𝐛𝐲 𝐏𝐢𝐧𝐠 𖣘',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
  return conn.sendMessage(m.chat, { text: `https://github.com/jayden-official 
══════ •⊰✧⊱• ══════
𝐀𝐂𝐓𝐈𝐕𝐄': ${uptime}
𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐘': ${speed} 𝐒𝐄𝐂𝐎𝐍𝐃𝐒
══════ •⊰✧⊱• ══════
`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['infobot', 'speed'];
handler.tags = ['info', 'tools'];
handler.command = /^(velocity|ping|pong)$/i;

export default handler;


function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
