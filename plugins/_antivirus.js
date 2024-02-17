const handler = (m) => m;

handler.all = async function(m, {isBotAdmin}) {
  // ah ah ah
  if (m.messageStubType === 68) {
    const log = {
      key: m.key,
      content: m.msg,
      sender: m.sender,
    };
    await this.modifyChat(m.chat, 'remove', {
      includeStarred: false,
    }).catch(console.log);
  }
};

export default handler;
