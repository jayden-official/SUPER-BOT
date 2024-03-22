import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import vm from 'node:vm'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] enter a Twitter link, example: ${usedPrefix + command}* https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw` 
try {
let res = await twitterDl(text)
await m.reply(global.wait)
for (let x = 0; x < res.media.length; x++) {
let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : '*here is the video*'
conn.sendFile(m.chat, res.media[x].url, 'error.mp4', caption, m)}
} catch {
try {  
const AA = await savefrom(text)    
conn.sendFile(m.chat, AA.url[0].url, 'error.mp4', '*here is the video*', m)    
} catch {
throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, please try again later*'  
}}}
handler.command = /^((twdl|tw|twt|twitter)(dl)?)$/i
export default handler
async function twitterDl(url) {
let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)?.[1]
if (!id) throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] enter a valid twitter link, example: #twitter* https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw'
let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
if (res.status !== 200) throw res.statusText
let json = await res.json()
if (json.media) {
let media = []
for (let i of json.media) {
if (/video|animated_gif/.test(i.type)) {
let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
vid = vid.variants.pop()
media.push({ url: vid.url, type: i.type })
} else {
media.push({ url: i.url, type: i.type })}}
return {
caption: json.text, media 
}} else throw 'https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, please try again later *' }
async function savefrom(urlL) {
let body = new URLSearchParams({ "sf_url": encodeURI(urlL), "sf_submit": "", "new": 2, "lang": "id", "app": "", "country": "id", "os": "Windows", "browser": "Chrome", "channel": " main", "sf-nomad": 1 });
let { data } = await axios({ "url": "https://worker.sf-tools.com/savefrom.php", "method": "POST", "data": body, "headers": { "content-type": "application/x-www-form-urlencoded", "origin": "https://id.savefrom.net", "referer": "https://id.savefrom.net/", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36" }});
let exec = '[]["filter"]["constructor"](b).call(a);';
data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
let context = { "scriptResult": "", "i": 0 };
vm.createContext(context);
new vm.Script(data).runInContext(context);
return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])}
