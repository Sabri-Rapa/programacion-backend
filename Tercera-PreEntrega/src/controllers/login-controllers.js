exports.getLogin = (req, res) => {
    try{
        if (req.isAuthenticated()) {
            res.redirect("/api/home");
          } else {
            res.render("pages/login");
          }    
    }catch(err){
        console.log(err)
    }
}

exports.authenticatedUser = (req, res) => {
  try {
    const { username } = req.body;
    req.session.username = username;

    res.redirect("/api/home");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

exports.errorLogin = (req, res) => {
  try {
    res.render("pages/errorLogin");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};