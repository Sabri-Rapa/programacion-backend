exports.isLoginActiv = (req, res, next) => {
    try {
      if (!req.isAuthenticated()) {
        res.redirect("/api/login");
        } 
        next()
    } catch (err) {
      console.log(err)
      return res.status(500).send({ error: err.response });
    }
  };
