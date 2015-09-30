var mongoose = require ('mongoose')
var animalSchema = new mongoose.Schema({
   name: String,
   breed: String,
   dob: Date,
   gender: String,
   family: String,
   status: String
})

animalSchema.methods.sayHello = function() {
  return 'Hello ' + this.Name;
}

animalSchema.methods.formatDate = function() {
  date = new Date(this.dob);
  return date.toDateString();
}

animalSchema.methods.linkName = function() {
  if (this.status==='orphan') {
  return 'adopt';
  } else if (this.status==='adopted') {
  return 'abandon';
  }
}

var Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal;