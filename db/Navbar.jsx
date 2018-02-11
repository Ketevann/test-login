// import React, {Component} from 'react'
// import axios from 'axios'
// import {signup, login, logout} from '../reducers/auth.jsx'
// import { connect} from 'react-redux'
// import { Link } from "react-router";

// class Navbar extends Component {
//   constructor(props){
//     super(props)
//     this.signupUser = this.signupUser.bind(this)
//     this.loginUser = this.loginUser.bind(this)

//   }
//   signupUser(evt, email, name, password){
//     evt.preventDefault()
//     console.log(evt.target.name.value, evt.target.email.value, evt.target.password.value,  evt.target.passwordconfirm.value,'blaa')
//     const info = {name: evt.target.name.value, email:evt.target.email.value, password:evt.target.password.value,
//     passowrd_confirm: evt.target.passwordconfirm.value}
//    this.props.signup(info)
//   }

//    loginUser(evt, email, name, password){
//      evt.preventDefault()
//     console.log( evt.target.email.value, evt.target.password.value, 'loginUser')
//     const info = {email:evt.target.email.value, password:evt.target.password.value,
//    }
//     this.props.login(info)

//   }

//   render(){
// {console.log(this.props, 'props')}
//     return (
//       <div>
//          {this.props.user?
//            <div>
//            <h4>{this.props.user.name}</h4><span><button onClick={() => this.props.logout()}>Logout</button></span>
//            </div>

//         :
//         <div>
//         <form onSubmit={(evt) => this.loginUser(evt)}>
//         <input name="email" placeholder="name" />
//         <input name="password" type="password"  placeholder="password" />
//         <input type="submit" name="Login" />
//         </form>
//        <form onSubmit={(evt) => this.signupUser(evt)

//         }>
//         <input name="name" placeholder="name" />
//         <input name="email" placeholder="email" />
//         <input name="password" type="password" placeholder="password" />
//         <input name="passwordconfirm" type="password" placeholder="password" />
//         <input type="submit" name="Sign Up" />
//         </form>
//         </div>
//          }
//          <Link to="/login">LOGGGG</Link>
//       </div>
//     )
//   }
// }


// export default connect(
//   ({ user }) => ({ user: user }),
//   {login, signup, logout },
// )(Navbar)
