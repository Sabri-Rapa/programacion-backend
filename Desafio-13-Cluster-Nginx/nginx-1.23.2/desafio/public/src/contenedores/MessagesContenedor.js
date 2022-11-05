class MessagesContenedor {
    constructor(options, model){
        this.conectionDB = options;
        this.model = model
    }

    async save(message){
        try{
            let timestamp = new Date();
            message.timestamp = timestamp;      
            this.model.create(message)
            return message;            
        }catch(err){
            console.log(err)
        }
    }

    async getAll(){
        try{
            let messages = await this.model.find({});
            return messages;

        }catch(err){
            console.log(err)
        }
    }
}

module.exports = MessagesContenedor;