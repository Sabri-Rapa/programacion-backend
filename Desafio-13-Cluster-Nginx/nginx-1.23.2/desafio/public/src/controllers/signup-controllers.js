exports.getSignup = (req, res) => {
    try{
        if (req.isAuthenticated()) {
            res.redirect("/home");
          } else {
            res.render("pages/signup");
          }    
    }catch(err){
        console.log(err)
    }
}

exports.signupUser = (req, res) => {
  try {
    const { username } = req.user;
    req.session.username = username;
    res.redirect("/api/home");
    
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};


exports.errorSignup = (req, res) => {
  try {
    res.render("pages/errorSignup");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};