const handler = async (m, {conn, text}) => {
  let [namagc, partici] = text.split('|');
  const name = conn.getName(conn.user.jid);
  const petik = '```';
  if (!namagc) throw 'https://github.com/jayden-official [*NAME OF THE GRP??*]!!!';
  if (!partici) partici = `@${m.sender.split('@')[0]}`;
  if (!namagc) namagc = text;
  const ha = await conn.groupCreate(namagc, conn.parseMention(partici));
  m.reply(`${petik}Group Telah Dibuat @${m.sender.replace(/@.+/, '')}${petik}\n\n*Link GC : https://chat.whatsapp.com/${await conn.groupInviteCode(ha.gid)}*`);
};
handler.help = ['buatgrup'];
handler.tags = ['owner', 'premium'];
handler.command = /^(buatgrup|creategroup|creategc|creagruppo)$/i;
handler.premium = true;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;
handler.fail = null;

export default handler;
