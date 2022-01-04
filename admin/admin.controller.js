async function addAdmin(req, res){
    try{
        if(req.body.password == "admin" && req.body.login == "admin"){
            res.status(200).send(true)
        } else {
            res.status(401).send(false)
        }
    }catch(err){
        res.status(401).send(err)
    }
}

module.exports = {
    addAdmin
}

