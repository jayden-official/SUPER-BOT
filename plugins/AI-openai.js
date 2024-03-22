/* -------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */
/*                                                       */
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*     ◉ Número: wa.me/51993966345                       */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/* -------------------------------------------------------*/
import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!text) throw `https://github.com/Khalid-official *[❗] HI THERE I'M BUMBLEBEE BOT CREATED BY 𒁂⃝ᰲ𝐊𝐇𝐀𝐋𝐈𝐃©_🇨🇺⃝𝐌𝚯𝐃͢𝐙™ ͟͞*\n\n*—◉ SAMPLE OF AI REQUESTS*\n*◉ ${usedPrefix + command}AI when did world war three begin?*\n*◉ ${usedPrefix + command} AI compose a sample of a CV*`;
  try {
        conn.sendPresenceUpdate('composing', m.chat);
        //let sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());
        let sistema1 = `You will act as a WhatsApp Bot which was created by Khalid-techs, you will be The BUMBLEBEE Bot-md.`;
        async function getOpenAIChatCompletion(texto) {
        const openaiAPIKey = global.openai_key;
        let chgptdb = global.chatgpt.data.users[m.sender];
        chgptdb.push({ role: 'user', content: texto });
        const url = "https://api.openai.com/v1/chat/completions";
        const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
        const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
        const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
        const result = await response.json();
        const finalResponse = result.choices[0].message.content;
        return finalResponse;
        };
        let respuesta = await getOpenAIChatCompletion(text);
        if (respuesta == 'error' || respuesta == '' || !respuesta) return XD; // causar error undefined para usar otra api
        m.reply(`${respuesta}`.trim());
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
        if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
        m.reply(botIA222.data.choices[0].text.trim());
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const syms1 = `You will act as a WhatsApp Bot which was created by Khalid-techs, you will be The BUMBLEBEE Bot-md.`;
        const Empireapi1 = await fetch(`https://api.cafirexos.com/api/chatgpt?text=${text}&name=${m.name}&prompt=${syms1}`);
        const empireApijson1 = await Empireapi1.json();
        if (empireApijson1.resultado == 'error' || empireApijson1.resultado == '' || !empireApijson1.resultado) return XD; // causar error undefined para lanzar msg de error
        m.reply(`${empireApijson1.resultado}`.trim());
    } catch {
      throw `https://github.com/Khalid-official *[❗] ERROR OCCURRED, TRY AGAIN LATER*`;
    }
   }
 }
};
handler.command = /^(openai|chatgpt|ai|robot|ploy|bee|ia2|robot2|Mystic|gpt)$/i;
export default handler;