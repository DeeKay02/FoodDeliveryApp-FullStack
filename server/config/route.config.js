// Libraries
import JwtPassport from "passport-jwt";

// Database Models
import { UserModel } from "../database/user";

const JWTStratergy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoAPP",
};

export default (passport) => {
  passport.use(
    new JWTStratergy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = UserModel.findById(jwt__payload.user);
        if (!doesUserExist) return done(null, false);

        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};