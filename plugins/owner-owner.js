function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator);
  async function loading() {
    var hawemod = [
    "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
    "《 ████▒▒▒▒▒▒▒▒》30%",
    "《 ███████▒▒▒▒▒》50%",
    "《 ██████████▒▒》80%",
    "《 ████████████》100%"
    ]
          let { key } = await conn.sendMessage(m.chat, {text: `https://github.com/jayden-official *☠¡¡𝗣𝗟𝗘𝗔𝗦𝗘 𝗪𝗔𝗜𝗧!!☠*`}, {quoted: m})
     for (let i = 0; i < hawemod.length; i++) {
       await new Promise(resolve => setTimeout(resolve, 1000)); 
       await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m}); 
     }
       await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m);
     }
    loading()    
    };

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'padroni', 'fgowner'];
export default handler;
