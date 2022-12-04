const Users = require('../../db/models/users')

exports.getProfile = async (req, res) => {

    try {
      
        res.render("pages/infoUser", {
            user: req.user,
          });
          res.end();
          
    } catch (err) {
      console.log(err);
    }
  };
  