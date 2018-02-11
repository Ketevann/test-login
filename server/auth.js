const passport = require('passport')


passport.serializeUser((user, done) => {
 // debug('will serialize user=%s', user)
  done(null, user.id)
})


passport.deserializeUser(
  (id, done) => {
    // debug('will deserialize user.id=%d', id)
    User.findById(id)
      .then(user => {
        if (!user) throw new Error("no user")
        // debug('deserialize retrieved null user for id=%d', id)
        else
        //debug('deserialize did ok user.id=%d', id)
        done(null, user)
      })
      .catch(err => {
       // debug('deserialize did fail err=%s', err)
        done(err)
      })
  }
)



const User = require('../db/user.js')
module.exports = require('express').Router()
.get('/whoami', (req, res) => {
  console.log(req.user, 'req.USAAAA')
  res.send(req.user)})

.post('/signup', (req, res, next) =>{
  console.log(req.body, 'req.body', req.body.passowrd_confirm)
  User.findOne({where:{
    email: req.body.email
  }})
  .then((user)=>{
    if(user!==null) res.end()
    else{
     User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password_confirmation: req.body.passowrd_confirm
           }
        )
    .then(user => {
        return req.logIn(user, (err) => {
          if (err) {console.log(err)
             return next(err) }
          else
          console.log("logging in")
        })
      })
      .then(() => res.redirect('/'))
       .catch(console.error())
    }
  })

})
.post('/login', (req, res, next) =>{
const { email, password } = req.body;
console.log(req.body, 'req.body login ')
  User.findOne({
    where: { email },
    attributes: { include: ['password_digest'] }
  })
     .then(user => {
       console.log(user, 'user')
       if (!user) {
      //  debug('authenticate user(email: "%s") did fail: no such user', email)
        throw new Error('one')
      }

      return user.authenticate(password).then(ok => {
        console.log(ok,'ok')
       if (!ok) {

         throw new Error('two')
        }
    //     debug('authenticate user(email: "%s") did ok: user.id=%d', email, user.id)
       return req.logIn(user, (err) =>{
         console.log("login")
         if (err) { throw next( err) }
         else{console.log('logged in', req.user)
          return res.redirect('/')}
        })
      })
     })
    .catch(next)
   // next()
})

.post('/logout', (req, res) => {
  console.log('in logout')
  req.logout()
  res.redirect('/auth/whoami')
})
// .post('/login/local', () => {
//   console.log("redirecting and authenticating")
//   return passport.authenticate('local', { successRedirect: '/home' })
// })



12
24
48
96
144
