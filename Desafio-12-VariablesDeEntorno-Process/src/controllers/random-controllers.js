const { fork } = require('child_process')

exports.getRandom = (req, res) => {
    try{
        const { cant } = req.query
        console.log('CANTIDAD', cant)
        const random = fork('./src/utils/random.js')

        random.on("message", (obj) => {
            res.json(obj);
          });  
        
        let numeros = random.send({ message: "start", cant: cant || 100000000});


        res.render('pages/random', numeros)
    }catch(err){
        console.log(err)
    }
}

exports.postRandom = (req, res) => {
    try{

    }catch(err){
        console.log(err)
    }
}