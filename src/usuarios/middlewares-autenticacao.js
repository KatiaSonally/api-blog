const passport = require('passport');

module.exports {
    local: (req, res, next) => {
        passport.authenticate('local', 
        { session: false }, 
        (erro, usuario, info) => {
            

            req.user = usuario;
            return next();
        }
      )(req, res, next)   ;
  }
};
