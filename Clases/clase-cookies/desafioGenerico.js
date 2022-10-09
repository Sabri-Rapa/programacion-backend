const { Router } = require("express");

const router = Router()

router.post("/", (req, res) => {
  const { key, value, age } = req.body;
  try {
    if (key && value) {
      if (age) {
        res
          .status(200)
          .cookie(key, value, { maxAge: age })
          .send({ proceso: "ok" });
      } else {
        res.status(200).cookie(key, value).send({ proceso: "ok" });
      }
    } else {
      res.status(400).send({ error: "falta nombre o valor" });
    }
  } catch (err) {
    res.status(500).send("Error en el servidor");
  }
});

router.get('/', (req, res) =>{
    try{
    res.status(200).send(req.cookies)
    }catch(err){
        res.status(500).send("Error en el servidor");
    }
})


router.delete("/:key", (req, res) => {
    const { key } = req.params;
    try {
      if (key) {
          res
            .status(200)
            .clearCookie(key)
            .send({ proceso: "ok" });
      } else {
        res.status(400).send({ error: "falta nombre" });
      }
    } catch (err) {
      res.status(500).send("Error en el servidor");
    }  
});

module.exports = router;