const handler = async (m, {
  conn, args, participants,
}) => {
  const gruppo = global.db.data.users;
  const utenti = Object.entries(gruppo).map(([key, value]) => {
    return {
      ...value, jid: key,
    };
  });

  const sortedMessaggi = utenti.map(toNumber('messaggi')).sort(sort('messaggi'));
  const utentiMessaggi = sortedMessaggi.map(enumGetKey);
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 20)) : Math.min(20, sortedMessaggi.length);
  const text = `https://github.com/jayden-official 🏆  Classification
Top 20 best users by category

💬 Messages
🥇 ${sortedMessaggi.slice(0, len).map(({jid, messaggi}, i) => `${participants.some((p) => jid === p.jid) ? ` (${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${messaggi}`).join`\n🏅`}

`.trim();
  conn.reply(m.chat, text, m, {
    mentions: [...utentiMessaggi.slice(0, len)].filter((v) => !participants.some((p) => v === p.jid)),
  });
};
handler.command = /^(classification)$/i;
export default handler;
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}
function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {
        ...b[i], [property]: a[property] === undefined ? _default : a[property],
      };
    };
  } else return (a) => a === undefined ? _default : a;
}
function enumGetKey(a) {
  return a.jid;
}
