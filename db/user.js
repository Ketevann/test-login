const Sequelize = require('sequelize');
const dbConnection= require('./_db')
//const db = new Sequelize('postgres://localhost:5432/pass');
var bcrypt = require('bcrypt');



 var User = dbConnection.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // notEmpty: true,
      len: [1 - 50]
    }

  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      // notEmpty: true,
      len: [1 - 255]
    }

  },


  password_digest: {
    type: Sequelize.STRING,
    validate: {
      // notEmpty: true
    }
  },
  password: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    validate: {
      // notEmpty: true
    },
  },
    password_confirmation: {
      type: Sequelize.VIRTUAL
    }



}, {
    freezeTableName: true,
    indexes: [{ unique: true, fields: ['email'] }],
        hooks: {
    beforeCreate: secure,
    beforeUpdate: secure,
  },
  defaultScope: {
    attributes: {exclude: ['password_digest']}
  },
  // instanceMethods: {
  //   // This method is a Promisified bcrypt.compare
  //  authenticate: function(plaintext) {
  //     console.log("authenticale")
  //     return bcrypt.compare(plaintext, this.password_digest)
  //   }
  // }
  })
User.prototype.authenticate = function (plaintext) {
      console.log("authenticale", plaintext)
      console.log(bcrypt.compare(plaintext, this.password_digest))
      return bcrypt.compare(plaintext, this.password_digest)
    }
  // var hasSecurePassword = function(user, options, callback) {
  //  // console.log(user.password,  user.password_confirmation, 'password CONFIRM', user)
	// if (user.password != user.password_confirmation) {
	// 	throw new Error("Password confirmation doesn't match Password");
	// }

//     return bcrypt.hash(user.get('password'), 10)
//       .then(hash => user.set('password_digest', hash))
// }



// function setEmailAndPassword(user) {
//   user.email = user.email && user.email.toLowerCase()
//   if (!user.password) return Promise.resolve(user)

//   return bcrypt.hash(user.get('password'), 10)
//       .then(hash => user.set('password_digest', hash))
// }

function secure (user, options, callback) {
  	user.email = user.email.toLowerCase();
	if (user.password){
    if (user.password != user.password_confirmation) {
		throw new Error("Password confirmation doesn't match Password");
	}
  else{
return bcrypt.hash(user.get('password'), 10)
    .then(hash =>{
      console.log("cryptinnnng")
     return user.set('password_digest', hash)})
     .then(user =>{
      // console.log(user, 'user')
     })

}}	else
		return Promise.resolve(user)
}


module.exports = User;
console.log("USER")

