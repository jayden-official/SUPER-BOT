import { tmpdir } from 'os';
import path, { join } from 'path';
import fs from 'fs';
import { readdirSync, unlinkSync, rmSync } from 'fs';

let handler = async(m, { conn, __dirname, args }) => {

   m.reply(`✅ Cleaned *tmp + sessions* folder`);
   m.react(done);
   // -- remove temporary files ---
   const tmpDirs = [tmpdir(), join(__dirname, '../tmp')];
   const tmpFiles = [];
   tmpDirs.forEach((dir) => readdirSync(dir).forEach((file) => tmpFiles.push(join(dir, file))));
   tmpFiles.forEach((file) => unlinkSync(file));

   // -- kill bot sessions ---
   const Sessions = "./sessions";
   readdirSync(Sessions).forEach((file) => {
     if (file !== 'creds.json') {
       unlinkSync(`${Sessions}/${file}`, { recursive: true, force: true });
     }
   });

// -- kill bot sessions ---
/*const bbtSessions = "./bebots";
readdirSync(bbtSessions, { withFileTypes: true }).forEach((file) => {
   const filePath = `${bbtSessions}/${file.name}`;
   if (file.isDirectory()) {
     readdirSync(filePath, { withFileTypes: true }).forEach((subFile) => {
       const subFilePath = `${filePath}/${subFile.name}`;
       if (subFile.isFile() && subFile.name !== "creds.json") {
         unlinkSync(subFilePath);
       }
     });
     // -- check if the folder is empty ---
     if (readdirSync(filePath).length === 0) {
       fs.rmdirSync(filePath);
     }
   } else if (file.isFile() && file.name !== "creds.json") {
     unlinkSync(filePath);
   }
});*/


//--
};
handler.help = ['cleartmp'];
handler. tags = ['owner'];
handler.command = /^(cleartmp)$/i;
handler.owner = true;

export default handler;