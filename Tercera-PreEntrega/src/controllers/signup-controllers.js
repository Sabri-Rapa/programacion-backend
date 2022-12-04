const {sendEmailRegistro} = require('../utils/sendEmails')

exports.getSignup = (req, res) => {
    try{
        if (req.isAuthenticated()) {
            res.redirect("/api/home");
          } else {
            res.render("pages/signup");
          }    
    }catch(err){
        console.log(err)
    }
}

exports.signupUser = async (req, res) => {
  try {
    const { username } = req.user;
    req.session.username = username;
    await sendEmailRegistro(req.user);
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