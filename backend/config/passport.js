const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../model/User');
require('dotenv/config')

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

module.exports = passport => {
    passport.use(
        new JWTStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload._id)
                .then(user => {
                    if (user) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        })
    )
}