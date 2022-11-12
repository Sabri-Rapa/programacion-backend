const { fork } = require('child_process')
const parseArgs = require("minimist");

exports.getRandom = (req, res) => {
    try{
        const args = parseArgs(process.argv.slice(2));
  
        res.status(200).render("pages/random", {
          port: args !== undefined ? args.PORT : "",
        });
      }catch(err){
        console.log(err)
    }
}

exports.postRandom = (req, res) => {
    try{
        const cant = req.query.cant || 100000;
        const random = fork("./src/utils/random.js");
        random.send({ message: "start", cant: cant });
        random.on("message", (obj) => {
          res.json(obj);
        });
    }catch(err){
        console.log(err)
    }
}