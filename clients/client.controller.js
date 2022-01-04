const Client = require('./client.model')

async function addClient(req,res) {
    try {
        const client =  await Client.create(req.body)
        console.log(req.body)
        res.status(200).send(client)
    } catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}

async function  getClient(req , res) {
    try {
        const clientList = await Client.find({})
        return res.status(200).json(clientList)
    } catch (err){
        return res.status(400).send(err)
    }
}


async function deleteClient(req , res ) {
    try {
        const id = req.params.id
        await Client.findByIdAndDelete(id)
        return res.status(200).json('Malumot o\'chirib yuborildi')
    } catch (err){
        return res.status(400).send(err)
    }
}

async function updateClient(req , res ) {
    try {
        const id = req.params.id
        await Client.findByIdAndUpdate(id , req.body)
        return res.status(200).json('Malumot yangilandi yuborildi')
    } catch (err){
        return res.status(400).send(err)
    }
}



module.exports = {
    addClient,
    getClient,
    deleteClient,
    updateClient
}

