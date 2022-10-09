const { normalize, schema } = require("normalizr");

const normMsg = (msgs) => {
  const arr = { id: "mensajes", chats: [] };
  arr.chats = msgs.map(m => {
    return {
      id: m._id,
      author: m.author,
      text: m.text,
    };
  });
  return arr;
};

exports.normalizeMessages = (msj) => {

  const debuggedChat = normMsg(msj);

  const author = new schema.Entity("authors");
  const mensajes = new schema.Entity("mensajes", {
    author: author,
  });
  const chats = new schema.Entity("chats", { chats: [mensajes] });

  const normalizedPosts = normalize(debuggedChat, chats);

  return normalizedPosts;
};