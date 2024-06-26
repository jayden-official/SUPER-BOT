const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw 'https://github.com/jayden-official *[ ⚠️ ] THE OWNER HAS RESTRICTED (ENABLE RESTRICT/DISABLE RESTRICT) THE USE OF THIS COMMAND*';
  if (!args[0]) throw 'https://github.com/jayden-official *[❗] ENTER THE NUMBER OF THE USER YOU WANT TO ADD*';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] IT WAS NOT POSSIBLE TO ADD @${jid.split('@')[0]}, THIS MAY HAPPEN BECAUSE THE NUMBER IS INCORRECT, THE PERSON HAS RECENTLY LEFT THE GROUP OR THE PERSON HAS CONFIGURED THEIR GROUP PRIVACY, THE INVITATION TO THE GROUP WAS SENT TO THE USER IN THEIR PROVIDED*`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `*Hey!! Hello, I introduce myself, I am The Super - Bot, and I am a Bot for WhatsApp, a person in the group used the command to add you to the group, but I couldn't add you, so I send you the invitation to add yourself, we are waiting for you!!* `;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw 'https://github.com/jayden-official *[❗𝐈𝐍𝐅𝐎❗] IT IS NOT POSSIBLE TO ADD THE NUMBER THAT YOU ENTERED, THIS MAY OCCUR BECAUSE THE NUMBER IS INCORRECT, THE PERSON HAS RECENTLY LEFT THE GROUP OR THE PERSON HAS CONFIGURED THEIR GROUP PRIVACY, WE ADVISE YOU SEND THE INVITATION MANUALLY!!*';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
