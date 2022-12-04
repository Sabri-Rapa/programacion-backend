exports.getLogout = (req, res) =>{
    try{
    let username = req.session.username;
    req.session.destroy((err) => {
      if (err) {
        return res.json({ status: "Logout ERROR", body: err });
      }
      res.render("pages/logout", { name: username });
    });
  
  }catch{
    return res.status(500).send({ error: err });
  }
  }