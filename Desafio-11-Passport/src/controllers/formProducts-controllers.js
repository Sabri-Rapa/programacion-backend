exports.getForm = (req, res) => {
    try{

    res.render("pages/formProducts", {});

    }catch(err){
        console.log(err)
    }
}
