const yargs = require('yargs/yargs')(process.argv.slice(2))


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
    };

    res.render('pages/info', info)

    }catch(err){
        console.log(err)
    }
}
