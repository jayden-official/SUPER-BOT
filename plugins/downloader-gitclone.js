import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] PUT A GIRHUB REPO LINK, EXAMPLE: ${usedPrefix + command} https://github.com/Khalid-niccur/DYLUX-BOT*`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗]LINK INCORRECT!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] WAIT A MOMENT WHILE I SEND YOUR FILE, IF IT IS NOT SENT IT MAY BE BECAUSE THE REPOSITORY IS MUCH HEAVY*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
export default handler
