const yargs = require('yargs/yargs')(process.argv.slice(2))
const os = require("os");
const { errorLogger } = require("../utils/loggers");

exports.getInfoProcess = (req, res) =>{
    try{
    const args = yargs.argv   
    console.log(args)   
    console.log(JSON.stringify(args))   

    const info = {
      argumentos: args,
      pathDeEjecucion: process.execPath,
      sistemaOperativo: process.platform,
      idProceso: process.pid,
      versionNode: process.version,
      carpetaProyecto: process.cwd(),
      memoria: process.memoryUsage(),
      processNum: os.cpus().length,
    };

    res.render('pages/info', info)

    }catch(error){
      errorLogger.error({
        URmethodL: req.originalUrl,
        method: req.method,
        error: error.message,
      });
      return res.status(500).send({ error: error });
      }
}
