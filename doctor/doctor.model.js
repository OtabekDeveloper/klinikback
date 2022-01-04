const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
  fullname_doc: {
    type: String,
    require: true,
  },
  servise_type: {
    type: String,
    require: true,
  },
  servise_price: {
    type: String,
    require: true,
  },
  doctor_login: {
    type: String,
    require: true,
  },
  doctor_parol: {
    type: String,
    require: true,
  },
  doctor_sourname: {
    type: String,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
