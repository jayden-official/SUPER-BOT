const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*Option:* ✨ | WELCOME
*Command:* ${usedPrefix + command} welcome
*Description:* Activates or deactivates the welcome in the group.

--------------------------------

*Option:* 🌎 | PUBLIC MODE
*Command:* ${usedPrefix + command} public
*Description:* The Bot becomes for public and/or private use.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* 🥵 | HORNY MODE
*Command:* ${usedPrefix + command} hornymode
*Description:* Activates or deactivates the +18 commands in the group.

--------------------------------

*Option:* 🔗 | ANTI-LINK
*Command:* ${usedPrefix + command} antilink
*Description:* Activate or deactivate the anti-links of WhatsApp.
*Note:* You need to have the restrict active.

--------------------------------

*Option:* 🔗 | ANTI-LINK 2
*Command:* ${usedPrefix + command} antilink2
*Description:* Enables or disables anti-links starting at HTTPS.
*Note:* You need to have the restrict active.

--------------------------------

*Option:* 🔎 | DETECT
*Command:* ${usedPrefix + command} detect
*Description:* Activate or deactivate notifications of changes in the group.

--------------------------------

*Option:* 🔎 | DETECT 2
*Command:* ${usedPrefix + command} detect2
*Description:* Detects changes in the group and maintains better management.

--------------------------------

*Option:* ❗ | RESTRICTED
*Command:* ${usedPrefix + command} restrict
*Description:* Turn Bot restrictions on or off, such as removing or adding people to a group.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* ☑️ | AUTOREAD
*Command:* ${usedPrefix + command} autoread
*Description:* Automatically mark messages and statuses as read.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* 🔊 | SOUNDS
*Command:* ${usedPrefix + command} audios
*Description:* Activates or deactivates the audio commands without prefixes, in the group.

--------------------------------

*Option:* 👾 | AUTOSTICKER
*Command:* ${usedPrefix + command} autosticker
*Description:* All images or videos sent in the group become stickers.

--------------------------------

*Option:* 💬 | PCONLY
*Command:* ${usedPrefix + command} pconly
*Description:* The Bot will only respond to commands if it is a private chat.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* 🏢 | GCONLY
*Command:* ${usedPrefix + command} gconly
*Description:* The Bot will only respond to commands if it is a group.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* ❌ | ANTIVIEW ONCE
*Command:* ${usedPrefix + command} antiviewonce
*Description:* The images sent to see only once, are resent normally by the Bot.

--------------------------------

*Option:* 📵 | ANTI-CALLS
*Command:* ${usedPrefix + command} anticall
*Description:* The Bot will block people who call the Bot.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* 💬 | ANTI-PRIVATE
*Command:* ${usedPrefix + command} antiprivate
*Description:* The Bot will block people who write to the Bot's private message.
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* 🤬 | ANTITOXIC
*Command:* ${usedPrefix + command} antitoxic
*Description:* Detects bad words and warns the group participant, before being eliminated.
*Note:* You need to have the restrict active.

--------------------------------

*Option:* 🕸️ | ANTI-JAM
*Command:* ${usedPrefix + command} anti-jam
*Description:* The Bot detects long texts that could be viruses and cause chat lag and deletes the user.
*Note:* You need to have the restrict active.

--------------------------------

*Option:* 👎 | ANTI-ARAB
*Command:* ${usedPrefix + command} anti-arab
*Description:* If an Arabic number joins the group, the Bot automatically removes it.
*Note:* You need to have the welcome and the restrict active.

--------------------------------

*Option:* 👎 | ANTI-ARAB 2
*Command:* ${usedPrefix + command} antiarabes2
*Description:* If an Arabic number writes in the group, the Bot automatically deletes it.
*Note:* You need to have the restrict active.

--------------------------------

*Option:* 🤖 | MODEJADIBOT
*Command:* ${usedPrefix + command} modejadibot
*Description:* Enables or disables the use of the command for sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot).
*Note:* This command can only be used by Bot owners.

--------------------------------

*Option:* 👑 | ADMIN MODE
*Command:* ${usedPrefix + command} adminmode
*Description:* The Bot will only respond to group admins.

--------------------------------

*Option:* 😃 | SIMSIMI
*Command:* ${usedPrefix + command} simsimi
*Description:* The Bot will start responding to messages using SimSimi's AI.

--------------------------------

*Option:* ⏳ | ANTISPAM
*Command:* ${usedPrefix + command} antispam
*Description:* The Bot detects when a user spams the command and bans them for 5 seconds and warns them.
*Note:* This command can only be used by Botowners.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = !isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️𝐎𝐏𝐓𝐈𝐎𝐍: ${type}\n🎚️ 𝐒𝐓𝐀𝐓𝐄: ${isEnable ? 'ON' : 'OFF'}\n📣 𝐅𝐎𝐑: ${isAll ? 'THIS BOT' : isUser ? '' : 'THIS CHAT'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;