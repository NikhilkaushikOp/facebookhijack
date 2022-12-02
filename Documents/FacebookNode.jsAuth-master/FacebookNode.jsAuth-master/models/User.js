const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.u54yhk8.mongodb.net/facebookauth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var userSchema = mongoose.Schema({
    uid: String,
    token: String,
    email: String,
    name: String,
    gender: String,
    pic: String
});

module.exports = mongoose.model('User', userSchema);
