
import fg from 'api-dylux';
const handler = async (m, {conn, text}) => {
  const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
  if (!teks) throw `✳️ *[❗] Enter name of the song and the artist*`;
  try {
    const res = await fg.lyrics(text);
    const mes = `▢ *${res.title}*
▢ *${res.artist}*

▢ ${res.lyrics}`;
    conn.sendFile(m.chat, res.thumb, 'img.png', mes, m);
  } catch (e) {
    m.react(error);
  }
};
handler.help = ['lyrics'];
handler.tags = ['tools'];
handler.command = ['testo', 'lyrics', 'letras'];

export default handler;
