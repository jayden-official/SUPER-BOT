const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] enter the name of an instagram user*\n\n*EXAMPLE :*\n*${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('https://github.com/jayden-official *[❗]  invalid user or no history*');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('https://github.com/jayden-official *[❗]  invalid user or no history*');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('https://github.com/jayden-official *[❗] invalid user or no history*');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
