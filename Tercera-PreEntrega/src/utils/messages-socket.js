const MessagesContenedor = require('../contenedores/MessagesContenedor')
const dbMongoAtlasConection = require('../../db/mongoAtlas')
const MessageSchema = require('../../db/models/messages')
const { normalizeMessages } = require('../normalizr/messages')

const msgCont = new MessagesContenedor(dbMongoAtlasConection, MessageSchema)

const socketConnection = (io) =>{
    console.log('mensajes')
    io.on('connection', async (socket) =>{
        console.log('New connection: ' + socket.id);

        let allMessages = await msgCont.getAll()

        io.sockets.emit('chat', normalizeMessages(allMessages))

        socket.on('newMessage', async(msg) => {
            let newMsg = JSON.parse(msg)
            await msgCont.save(newMsg)
            let allMsg = await msgCont.getAll()

            io.sockets.emit('chat', normalizeMessages(allMsg))
        })

    })

}

module.exports = socketConnection;