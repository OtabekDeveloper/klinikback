const mongoose = require('mongoose')
const clientSchema = mongoose.Schema({
        clientName:String,
        clientSureName: String,
        clientAddress :String,
        clientTel : String,
        serviceType: String,
        servicePrice: String,
        date: {
            type: Date,
            default: Date.now()
        }
})
module.exports = mongoose.model('Client' , clientSchema)