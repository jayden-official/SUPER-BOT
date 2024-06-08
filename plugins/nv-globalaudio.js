import { sticker } from '../lib/sticker.js'
let handler = m => m
handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned) {
let join = `*< 𝚄𝙽𝙴 𝚄𝙽 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 />*\n\n*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾/𝙰*\n*𝙿𝙰𝚁𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝚁 𝚄𝙽 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #join 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*�? #join* https://chat.whatsapp.com/FWmPWnVqpiQ4XNpLN98g3G`.trim() 
this.sendButton(m.chat, join, wm, imagen4, [['📮 𝙳𝙾𝙽𝙰𝚁 📮', '#donar']], m)}    
    
if (/^hey|hello|a$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/hayaa hayaa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    

if (/^b$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/surrender.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^c$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/lala.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
   
if (/^d$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Allah.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^e$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/past.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^f$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/faded.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^g$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/redone.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^h$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/monster.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^i$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/breakup.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^j$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/diamondheart.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^k$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/ale ale2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^l$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/uefa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^m|aah$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/say aah.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^n$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/sketchers.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^o$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/sing to sleep.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^p$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/ale ale.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^q$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/perfect.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^r$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/shivers.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^s$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/falls down.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^t$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/dealer.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^u$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/soak city.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^v$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/spectre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^w$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/young dump and broke.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^x$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/7yrs.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^y$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/im the one.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^z$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/hayaa hayaa2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^alive|hi|hello|hey$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/toll_face.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^e|t$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/ozuna.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^s|bro$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/all the above.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}

if (/^bee|bumbebee$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/bumblebee.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}
 
return !0 }
export default handler
