import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
//let vn = './media/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭══〘✯✯✯✯✯✯✯✯✯〙══╮
║    ◉— *𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄🐝𝐁𝐎𝐓* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* Khalid-techs
║➤ *Numero:* wa.me/254736958034
║➤ *Bot ofc:* wa.me/923470027813
║➤ *TELEGRAM:* https://t.co/3frSXMbUH2
║➤ *Date:* ${date}
║➤ *Uptime:* ${uptime}
║➤ *Users:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━━
┃ *< 🐔 LIFE🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Level:* ${level}
┣ *🧰 Experience:* ${exp}
┣ *⚓ Rank:* ${role}
┣ *💎 Diamonds:* ${limit}
┣ *👾 MysticCoins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''} ''}
┗━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━━
┃ *< THIS IS THE ONE🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ${(conn.user.jid == global.conn.user.jid ? '' : `From: https://wa.me/${global.conn.user.jid.split`@`[0 ]}`) || '*This is the official Bot*'}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< 🐼 FAMILY🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 💟 _${usedPrefix}termsandconditions_
┣ ⃟ 💟 _${usedPrefix}groups_
┣ ⃟ 💟 _${usedPrefix}state_
┣ ⃟ 💟 _${usedPrefix}infobot_
┣ ⃟ 💟 _${usedPrefix}biblia_
┣ ⃬⃟ 💟 _${usedPrefix}animes_
┣ ┣⃟ 💟 _${usedPrefix}speedtest_
┣ ⃟ 💟 _${usedPrefix}donar_
┣ ⃟ 💟 _${usedPrefix}grouplist_
┣ ⃟ 💟 _${usedPrefix}owner_
┣ ⃟ 💟 _${usedPrefix}script_
┣ ⃟ 💟 _${usedPrefix}listprem_
┣ ඬ⃟ 💟 _Bot_ (Updates)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< THIS IS YOUR TIME🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 👽 _${usedPrefix}join *<link/link/url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< FASHION - FASHION🐝/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🤖 _${usedPrefix}servot_
┣ ⃟ 🤖 _${usedPrefix}stop_
┣ ⃟ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< THIS🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🎖️ _${usedPrefix}mates *<noob/easy/medium/hard/extreme/impossible/impossible2>*_
┣ ⃟ 🎖️ _${usedPrefix}ppt *<paper / scissors /stone>*_
┣ ⃟ 🎖️ _${usedPrefix}prostitute *<name / @tag>*_
┣ ⃟ 🎖️ _${usedPrefix}prostitute *<name / @tag>*_
┣ ⃟ 🎖️ _${usedPrefix}gay2 *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}lesbian *<name/@tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajero *<name/@tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}witch *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}puto *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}whore *<name / @tag>*_
┣ ⃟ 🎖️ _${usedPrefix}without *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}missing *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}rat *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}love *<name / @tag>*_
┣ ⃟ 🎖️ _${usedPrefix}doxear *<name/@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}question *<text>*_
┣ ⃟ 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣ ⃟ 🎖️ _${usedPrefix}slot *<bet>*_
┣ ⃟ 🎖️ _${usedPrefix}ttt *<room name>*_
┣ ⃟ 🎖️ _${usedPrefix}delttt_
┣ ⃟ 🎖️ _${usedPrefix}accurate_
┣ ඬ⃟ 🎖️ _${usedPrefix}word *<text>*_
┣ ⃟ 🎖️ _${usedPrefix}top *<text>*_
┣ ⃟ 🎖️ _${usedPrefix}topgays_
┣ ⃟ 🎖️ _${usedPrefix}topotakus_
┣ ⃟ 🎖️ _${usedPrefix}formpair_
┣ ⃟ 🎖️ _${usedPrefix}true_
┣ ⃟ 🎖️ _${usedPrefix}challenge_
┣ ⃟ 🎖️ _${usedPrefix}song_
┣ ⃟ 🎖️ _${usedPrefix}track_
┣ ⃟ 🎖️ _${usedPrefix}akinator_
┣ ⃟ 🎖️ _${usedPrefix}wordfind_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄 𝐎𝐑 𝐃𝐈𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ *< 🐝𝐑𝐄𝐏𝐎𝐑𝐓 𝐄𝐑𝐑𝐎𝐑𝐒🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}twitter *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}fb *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}videodoc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}dapk2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}play *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pla3 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}soundcloud *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pinterest *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}igstory *<nombre de usuario>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐆𝐑𝐎𝐔𝐏𝐒🐝 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick2 *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listanum *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}kicknum *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}infogroup_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}invocar *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<audio>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<video>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<imagen>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┣ ඬ⃟ 💎 _${usedPrefix}destraba_
┣ ඬ⃟ 💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑🐝𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}toanime *<image>*_
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<voice note>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tour *<video / image / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts is *<text>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐄𝐅𝐅𝐄𝐂𝐓𝐒 𝐀𝐍𝐃 𝐋𝐎𝐆𝐎𝐒🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}phmaker *<option> <image>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<effect> <text>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<text>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}heartlogo *<text>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<text>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelate_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐏𝐇𝐑𝐀𝐒𝐄𝐒 𝐀𝐍𝐃 𝐓𝐄𝐗𝐓𝐒🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}compliment_
┣ ඬ⃟ 🥀 _${usedPrefix}tip_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🥀 _${usedPrefix}romantichistory_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 🐝𝐑𝐀𝐍𝐃𝐎𝐌🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 👾 _${usedPrefix}messi_
┣ ඬ⃟ 👾 _${usedPrefix}cat_
┣ ඬ⃟ 👾 _${usedPrefix}dog_
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}itzy_
┣ ඬ⃟ 👾 _${usedPrefix}blackpink_
┣ ඬ⃟ 👾 _${usedPrefix}lolivid_
┣ ඬ⃟ 👾 _${usedPrefix}loli_
┣ ඬ⃟ 👾 _${usedPrefix}christmas_
┣ ඬ⃟ 👾 _${usedPrefix}ppcouple_
┣ ඬ⃟ 👾 _${usedPrefix}wpmountain_
┣ ඬ⃟ 👾 _${usedPrefix}pubg_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 👾 _${usedPrefix}wprandom_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehicle_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}pentol_
┣ ඬ⃟ 👾 _${usedPrefix}caricature_
┣ ඬ⃟ 👾 _${usedPrefix}cyberspace_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planet_
┣ ඬ⃟ 👾 _${usedPrefix}randomprofile_
┣ ඬ⃟ 👾 _${usedPrefix}neko_
┣ ඬ⃟ 👾 _${usedPrefix}waifu_
┣ ඬ⃟ 👾 _${usedPrefix}akira_
┣ ඬ⃟ 👾 _${usedPrefix}akiyama_
┣ ඬ⃟ 👾 _${usedPrefix}anna_
┣ ඬ⃟ 👾 _${usedPrefix}asuna_
┣ ඬ⃟ 👾 _${usedPrefix}ayuzawa_
┣ ඬ⃟ 👾 _${usedPrefix}boruto_
┣ ඬ⃟ 👾 _${usedPrefix}chiho_
┣ ඬ⃟ 👾 _${usedPrefix}chitoge_
┣ ඬ⃟ 👾 _${usedPrefix}deidara_
┣ ඬ⃟ 👾 _${usedPrefix}erza_
┣ ඬ⃟ 👾 _${usedPrefix}elaina_
┣ ඬ⃟ 👾 _${usedPrefix}eba_
┣ ඬ⃟ 👾 _${usedPrefix}emilia_
┣ ඬ⃟ 👾 _${usedPrefix}hestia_
┣ ඬ⃟ 👾 _${usedPrefix}hinata_
┣ ඬ⃟ 👾 _${usedPrefix}inori_
┣ ඬ⃟ 👾 _${usedPrefix}isuzu_
┣ ඬ⃟ 👾 _${usedPrefix}itachi_
┣ ඬ⃟ 👾 _${usedPrefix}itori_
┣ ඬ⃟ 👾 _${usedPrefix}kaga_
┣ ඬ⃟ 👾 _${usedPrefix}kagura_
┣ ඬ⃟ 👾 _${usedPrefix}kaori_
┣ ඬ⃟ 👾 _${usedPrefix}keneki_
┣ ඬ⃟ 👾 _${usedPrefix}kotori_
┣ ඬ⃟ 👾 _${usedPrefix}kurumi_
┣ ඬ⃟ 👾 _${usedPrefix}madara_
┣ ඬ⃟ 👾 _${usedPrefix}mikasa_
┣ ඬ⃟ 👾 _${usedPrefix}miku_
┣ ඬ⃟ 👾 _${usedPrefix}minato_
┣ ඬ⃟ 👾 _${usedPrefix}naruto_
┣ ඬ⃟ 👾 _${usedPrefix}nezuko_
┣ ඬ⃟ 👾 _${usedPrefix}sagiri_
┣ ඬ⃟ 👾 _${usedPrefix}sasuke_
┣ ඬ⃟ 👾 _${usedPrefix}sakura_
┣ ඬ⃟ 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< FASHION +THE🐝/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🔞 _${usedPrefix}pack_
┣ ⃟ 🔞 _${usedPrefix}pack2_
┣ ⃟ 🔞 _${usedPrefix}pack3_
┣ ⃟ 🔞 _${usedPrefix}videoxxx_
┣ ⃟ 🔞 _${usedPrefix}videolesbixxx_
┣ ⃟ 🔞 _${usedPrefix}boobs_
┣ ⃟ 🔞 _${usedPrefix}booty_
┣ ⃟ 🔞 _${usedPrefix}ecchi_
┣ ⃟ 🔞 _${usedPrefix}furro_
┣ ⃟ 🔞 _${usedPrefix}imagelesbians_
┣ ⃟ 🔞 _${usedPrefix}panties_
┣ ⃟ 🔞 _${usedPrefix}pene_
┣ ⃟ 🔞 _${usedPrefix}porn_
┣ ⃟ 🔞 _${usedPrefix}randomxxx_
┣ ⃟ 🔞 _${usedPrefix}breasts_
┣ ⃟ 🔞 _${usedPrefix}yaoi_
┣ ⃟ 🔞 _${usedPrefix}yaoi2_
┣ ⃟ 🔞 _${usedPrefix}yuri_
┣ ⃟ 🔞 _${usedPrefix}yuri2_
┣ ⃟ 🔞 _${usedPrefix}trapito_
┣ ⃟ 🔞 _${usedPrefix}hentai_
┣ ⃟ 🔞 _${usedPrefix}nsfwloli_
┣ ⃟ 🔞 _${usedPrefix}nsfworgy_
┣ ⃟ 🔞 _${usedPrefix}nsfwfoot_
┣ ⃟ 🔞 _${usedPrefix}nsfwass_
┣ ⃟ 🔞 _${usedPrefix}nsfwbdsm_
┣ ⃟ 🔞 _${usedPrefix}nsfwcum_
┣ ⃟ 🔞 _${usedPrefix}nsfwero_
┣ ⃟ 🔞 _${usedPrefix}nsfwfemdom_
┣ ⃟ 🔞 _${usedPrefix}nsfwglass_
┣ ⃟ 🔞 _${usedPrefix}hentaipdf *<text>*_
┣ ⃟ 🔞 _${usedPrefix}hentaisearch *<text>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< FASHION YOU ARE🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- Happy Birthday to you*
┣ ⃟ 🎤 _${usedPrefix}bass_
┣ ⃟ 🎤 _${usedPrefix}blown_
┣ ⃟ 🎤 _${usedPrefix}deep_
┣ ⃟ 🎤 _${usedPrefix}earrape_
┣ ⃟ 🎤 _${usedPrefix}fast_
┣ ⃟ 🎤 _${usedPrefix}fat_
┣ ⃟ 🎤 _${usedPrefix}nightcore_
┣ ⃟ 🎤 _${usedPrefix}reverse_
┣ ⃟ 🎤 _${usedPrefix}robot_
┣ S⃟ 🎤 _${usedPrefix}slow_
┣ ⃟ 🎤 _${usedPrefix}smooth_
┣ ⃟ 🎤 _${usedPrefix}whoever_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< THIS IS YOUR TIME🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 📳 _${usedPrefix}start_
┣ ⃟ 📳 _${usedPrefix}next_
┣ ⃟ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< FASHION🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🔍 _${usedPrefix}cave *<text>*_
┣ ⃟ 🔍 _${usedPrefix}movieplus *<text>*_
┣ ⃟ 🔍 _${usedPrefix} modapk *<text>*_
┣ ⃟ 🔍 _${usedPrefix}stickersearch *<text>*_
┣ ⃟ 🔍 _${usedPrefix}stickersearch2 *<text>*_
┣ ⃟ 🔍 _${usedPrefix}xnxxsearch *<text>*_
┣ ⃟ 🔍 _${usedPrefix}animeinfo *<text>*_
┣ ⃟ 🔍 _${usedPrefix}google *<text>*_
┣ ⃟ 🔍 _${usedPrefix}character *<text>*_
┣ ⃟ 🔍 _${usedPrefix}wikipedia *<text>*_
┣ ⃟ 🔍 _${usedPrefix}ytsearch *<text>*_
┣ ⃟ 🔍 _${usedPrefix}playstore *<text>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< 🐼🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ *- WRITE THE FOLLOWING WORDS OR PHRASES WITHOUT ANY PREFIX (#, /, *, .)*
┃ _- (USE WITHOUT PREFIX)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _Who is your little brother 7w7_
┣ ඬ⃟ 🔊 _I diagnose you with gay_
┣ ඬ⃟ 🔊 _No one cares_
┣ ඬ⃟ 🔊 _Admin's Party_
┣ ඬ⃟ 🔊 _Administrator's Party_
┣ ඬ⃟ 🔊 _Long live the bride and groom_
┣ ඬ⃟ 🔊 _Happy Birthday_
┣ ඬ⃟ 🔊 _Night of Peace_
┣ ඬ⃟ 🔊 _Good morning_
┣ ඬ⃟ 🔊 _Good afternoon_
┣ ඬ⃟ 🔊 _Good night_
┣ ඬ⃟ 🔊 _Audio hentai_
┣ ඬ⃟ 🔊 _Girl giant_
┣ ඬ⃟ 🔊 _Merry Christmas_
┣ ඬ⃟ 🔊 _Go to vrg_
┣ ඬ⃟ 🔊 _Pass pack Bot_
┣ ඬ⃟ 🔊 _Attention group_
┣ ඬ⃟ 🔊 _Marica who_
┣ ඬ⃟ 🔊 _I killed the group_
┣ ඬ⃟ 🔊 _Oh I'm coming_
┣ ඬ⃟ 🔊 _rich uncle_
┣ ඬ⃟ 🔊 _Friday_
┣ ඬ⃟ 🔊 _Bathed_
┣ Sex 🔊 _Sex_
┣ ඬ⃟ 🔊 _Hello_
┣ ඬ⃟ 🔊 _A duck_
┣ ඬ⃟ 🔊 _About_
┣ ඬ⃟ 🔊 _I love you_
┣ ඬ⃟ 🔊 _Yamete_
┣ ඬ⃟ 🔊 _Bath_
┣ ඬ⃟ 🔊 _It's fucking_
┣ ඬ⃟ 🔊 _The bible_
┣ ඬ⃟ 🔊 _Onichan_
┣ ඬ⃟ 🔊 _Bot Shit_
┣ ඬ⃟ 🔊 _Siuuu_
┣ ඬ⃟ 🔊 _Epic_
┣ ඬ⃟ 🔊 _Shitpost_
┣ ඬ⃟ 🔊 _Rawr_
┣ ඬ⃟ 🔊 _UwU_
┣ ඬ⃟ 🔊 _:c_
┣ ඬ⃟ 🔊 _a_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< 🐺🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 🛠️ _${usedPrefix}chatgpt *<text>*_
┣ ⃟ 🛠️ _${usedPrefix}chatgpt2 *<text>*_
┣ ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ⃟ 🛠️ _${usedPrefix} from *<text>*_
┣ ⃟ 🛠️ _${usedPrefix}spam *<number|text|amount>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}size *<quantity> <image/video>*_
┣ ⃟ 🛠️ _${usedPrefix}readviewonce *<image/video>*_
┣ ⃟ 🛠️ _${usedPrefix}climate *<country> <city>*_
┣ ⃟ 🛠️ _${usedPrefix}survey *<text1|text2...>*_
┣ ⃟ 🛠️ _${usedPrefix}afk *<reason>*_
┣ ⃟ 🛠️ _${usedPrefix}ocr *<responds to image>*_
┣ ⃟ 🛠️ _${usedPrefix}hd *<responds to image>*_
┣ ⃟ 🛠️ _${usedPrefix} shorten *<link/link/url>*_
┣ ⃟ 🛠️ _${usedPrefix}calc *<math operation>*_
┣ ⃟ 🛠️ _${usedPrefix} of *<message>*_
┣ ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ⃟ 🛠️ _${usedPrefix}readqr *<image (QR)>*_
┣ ⃟ 🛠️ _${usedPrefix}qrcode *<text>*_
┣ ⃟ 🛠️ _${usedPrefix}readmore *<text1| text2>*_
┣ ⃟ 🛠️ _${usedPrefix}styletext *<text>*_
┣ ⃟ 🛠️ _${usedPrefix}translate *<text>*_
┣ ⃟ 🛠️ _${usedPrefix}nowa *<number>*_
┣ Se⃟ 🛠️ _${usedPrefix}covid *<country>*_
┣ ⃟ 🛠️ _${usedPrefix}schedule_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< THIS - THIS - THIS🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 💵 _${usedPrefix}adventure_
┣ ⃟ 💵 _${usedPrefix}hunting_
┣ ⃟ 💵 _${usedPrefix}box_
┣ ┣ ⃟ 💵 _${usedPrefix}balance_
┣ ⃟ 💵 _${usedPrefix}claim_
┣ ⃟ 💵 _${usedPrefix}heal_
┣ ⃟ 💵 _${usedPrefix}lb_
┣ ⃟ 💵 _${usedPrefix}levelup_
┣ ⃟ 💵 _${usedPrefix}myns_
┣ ⃟ 💵 _${usedPrefix}profile_
┣ ⃟ 💵 _${usedPrefix}work_
┣ ⃟ 💵 _${usedPrefix}minar_
┣ ⃟ 💵 _${usedPrefix}minar2_
┣ ⃟ 💵 _${usedPrefix}buy_
┣ ⃟ 💵 _${usedPrefix}buyall_
┣ ⃟ 💵 _${usedPrefix}verify_
┣ ⃟ 💵 _${usedPrefix}steal *<quantity> <@tag>*_
┣ ⃟ 💵 _${usedPrefix}transfer *<type> <quantity> <@tag>*_
┣ ⃟ 💵 _${usedPrefix}unreg *<serial number>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< FASHION🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<respond to image or video>*_
┣ ⃟ 👽 _${usedPrefix}sticker *<link/link/url>*_
┣ ⃟ 👽 _${usedPrefix}sticker2 *<respond to image or video>*_
┣ ⃟ 👽 _${usedPrefix}sticker2 *<link/link/url>*_
┣ ⃟ 👽 _${usedPrefix}s *<respond to image or video>*_
┣ ⃟ 👽 _${usedPrefix}s *<link/link/url>*_
┣ ⃟ 👽 _${usedPrefix}s2 *<respond to image or video>*_
┣ ⃟ 👽 _${usedPrefix}s2 *<link/link/url>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ⃟ 👽 _${usedPrefix}scircle *<image>*_
┣ ⃟ 👽 _${usedPrefix}sremovebg *<image>*_
┣ ⃟ 👽 _${usedPrefix}emoji *<type> <emoji>*_
┣ ⃟ 👽 _${usedPrefix}attp *<text>*_
┣ ⃟ 👽 _${usedPrefix}attp2 *<text>*_
┣ ⃟ 👽 _${usedPrefix}attp3 *<text>*_
┣ ⃟ 👽 _${usedPrefix}ttp *<text>*_
┣ ⃟ 👽 _${usedPrefix}ttp2 *<text>*_
┣ ⃟ 👽 _${usedPrefix}ttp3 *<text>*_
┣ ⃟ 👽 _${usedPrefix}ttp4 *<text>*_
┣ ⃟ 👽 _${usedPrefix}ttp5 *<text>*_
┣ ⃟ 👽 _${usedPrefix}pat *<@tag>*_
┣ ⃟ 👽 _${usedPrefix}slap *<@tag>*_
┣ ⃟ 👽 _${usedPrefix}kiss *<@tag>*_
┣ ⃟ 👽 _${usedPrefix}given_
┣ ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ⃟ 👽 _${usedPrefix}stickermark *<effect> <image>*_
┣ ⃟ 👽 _${usedPrefix}stickerfilter *<effect> <image>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━
┃ *< THIS IS YOUR LIFE🐝 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⃟ 👑 > *<function>*
┣ ⃟ 👑 => *<function>*
┣ ⃟ 👑 $ *<function>*
┣ ⃟ 👑 _${usedPrefix}setprefix *<prefix>*_
┣ ⃟ 👑 _${usedPrefix} disabled *<number>*_
┣ ⃟ 👑 _${usedPrefix}resetprefix_
┣ ⃟ 👑 _${usedPrefix}autoadmin_
┣ ⃟ 👑 _${usedPrefix}leavegc_
┣ ⃟ 👑 _${usedPrefix}safe_
┣ ⃟ 👑 _${usedPrefix}blocklist_
┣ ⃟ 👑 _${usedPrefix}block *<@tag/number>*_
┣ ⃟ 👑 _${usedPrefix}unblock *<@tag/number>*_
┣ ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ⃟ 👑 _${usedPrefix}enable *public*_
┣ ⃟ 👑 _${usedPrefix}disable *public*_
┣ ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ⃟ 👑 _${usedPrefix}enable *anti-private*_
┣ ⃟ 👑 _${usedPrefix}disable *anti-private*_
┣ ⃟ 👑 _${usedPrefix}enable *modejadibot*_
┣ ⃟ 👑 _${usedPrefix}disable *modejadibot*_
┣ ⃟ 👑 _${usedPrefix}msg *<text>*_
┣ ⃟ 👑 _${usedPrefix}banchat_
┣ ⃟ 👑 _${usedPrefix}unbanchat_
┣ ⃟ 👑 _${usedPrefix}user *<@tag>*_
┣ ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ⃟ 👑 _${usedPrefix}dardialovers *<@tag>*_
┣ ⃟ 👑 _${usedPrefix}addxp *<@tag>*_
┣ ⃟ 👑 _${usedPrefix}user *<@tag>*_
┣ ⃟ 👑 _${usedPrefix}bc *<text>*_
┣ ⃟ 👑 _${usedPrefix}bcchats *<text>*_
┣ ⃟ 👑 _${usedPrefix}bcgc *<text>*_
┣ ⃟ 👑 _${usedPrefix}bcgc2 *<audio>*_
┣ ⃟ 👑 _${usedPrefix}bcgc2 *<video>*_
┣ ⃟ 👑 _${usedPrefix}bcgc2 *<image>*_
┣ ⃟ 👑 _${usedPrefix}bcbot *<text>*_
┣ ⃟ 👑 _${usedPrefix}cleartpm_
┣ ⃟ 👑 _${usedPrefix}restart_
┣ ⃟ 👑 _${usedPrefix}update_
┣ ⃟ 👑 _${usedPrefix}banlist_
┣ ⃟ 👑 _${usedPrefix}addprem *<@tag> <time>*_
┣ ⃟ 👑 _${usedPrefix}addprem2 *<@tag> <time>*_
┣ ⃟ 👑 _${usedPrefix}addprem3 *<@tag> <time>*_
┣ ⃟ 👑 _${usedPrefix}addprem4 *<@tag> <time>*_
┣ ⃟ 👑 _${usedPrefix}before *<@tag>*_
┣ ⃟ 👑 _${usedPrefix}listcmd_
┣ ⃟ 👑 _${usedPrefix}setppbot *<respond to image>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<text> <respond to sticker/image>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<respond to sticker/image with assigned command or text>*_
┗━━━━━━━━━━━━━━━━┛`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗]THE MENU HAS AN ERROR AND IT IS NOT POSSIBLE TO SEND IT REPORT IT TO THE OWNER OF THE BOT*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄🐝𝐁𝐎𝐓👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
