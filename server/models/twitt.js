const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twittSchema = new Schema({
  twitt: String,
  username:String,
  image:String,
},{
  timestamps: true
})

const Twitt = mongoose.model('Twitts', twittSchema);
module.exports = Twitt;
