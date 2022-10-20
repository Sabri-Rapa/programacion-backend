exports.getLogin = (req, res) => {
    try{
        if (req.session && req.session.username) {
            res.redirect("/home");
          } else {
            res.render("pages/login");
          }    
    }catch(err){
        console.log(err)
    }
}

exports.registerUser = (req, res) => {
  try {
    const { username } = req.body;
    req.session.username = username;

    res.redirect("/api/home");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};