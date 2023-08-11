const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000;

async function deleteInactiveUserData(m) {
   const user = global.chatgpt.data.users[m.sender];
   if (!user) return; // If the user does not exist, do nothing

   const lastUpdateTime = user.lastUpdate || 0;
   const currentTime = new Date().getTime();

   if (currentTime - lastUpdateTime > INACTIVITY_TIMEOUT_MS) {
     delete global.chatgpt.data.users[m.sender];
     //console.log(`Data for user ${m.sender} deleted after ${INACTIVITY_TIMEOUT_MS / 1000 / 60} minutes of inactivity.`);
   }
}

export async function all(m) {
   let user = global.chatgpt.data.users[m.sender];

   if (user) {
     user.lastUpdate = new Date().getTime();
     global.chatgpt.data.users[m.sender] = user;
   } else {
     return; // If the user does not exist, do nothing
   }

   setTimeout(() => deleteInactiveUserData(m), INACTIVITY_TIMEOUT_MS);
}

/*const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000;

async function deleteInactiveUserData(m) {
   const user = global.chatgpt.data.users[m.sender];
   const lastUpdateTime = user?.lastUpdate || 0;
   const currentTime = new Date().getTime();

   if (currentTime - lastUpdateTime > INACTIVITY_TIMEOUT_MS) {
     delete global.chatgpt.data.users[m.sender];
     //console.log(`Data for user ${m.sender} deleted after ${INACTIVITY_TIMEOUT_MS / 1000 / 60} minutes of inactivity.`);
   }
}

export async function all(m) {
   let user = global.chatgpt.data.users[m.sender];

   if (user) {
     user.lastUpdate = new Date().getTime();
     global.chatgpt.data.users[m.sender] = user;
   }

   setTimeout(() => deleteInactiveUserData(m), INACTIVITY_TIMEOUT_MS);
  
}*/