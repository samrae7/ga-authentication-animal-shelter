var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user')

// In app.js require('./config/passport')(passport) is expecting a function
module.exports = function(passport) {

// Serialize the user.id and save in a cookie in the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
})

// Deserialise the id, and use the id to find a user
passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
}
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));