exports.loginController = (req, res) => {
  try {
    const { username } = req.body;
    req.session.username = username;

    res.redirect("/api/home");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

exports.viewPageLogin = (req, res) => {
  try {
    res.render("pages/login");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

exports.isLoginActiv = (req, res) => {
  try {
    if (req.session && req.session.username) {
      res.render("pages/home", {nombre: req.session.username});
    } else {
      res.redirect("/api/sesion/login");
    }
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};


exports.logoutController = (req, res) =>{
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