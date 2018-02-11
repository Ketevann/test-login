import axios from 'axios'

const AUTHENTICATE = 'AUTHENTICATE'

const authenticateUser = (user) => ({type: AUTHENTICATE, user})
const authenticateSignUp = (user) => ({type: AUTHENTICATE, user})
const initialState = {user : null}

const authReducer = (user=initialState, action) =>{
  switch(action.type){
    case AUTHENTICATE:
    console.log("user", action.user)
      return {user: action.user}
  }
  return user
}

export const login = (info) =>
  dispatch =>
    axios.post('/auth/login',info)

    .then(() => dispatch(whoami()))
    .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const signup = (info) =>
  dispatch =>
    axios.post('/auth/signup',info)
    .then(() => dispatch(whoami()))
    .catch(() => dispatch(whoami()))


export const whoami = () =>
  dispatch =>
    axios.get('/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticateSignUp(user))


      })
      .catch(failed => dispatch(authenticateSignUp(null)))

 export default authReducer

// export const signup = () =>
//   dispatch =>
//   axios.post('/api/nodemailer')
//     .then((res) => (console.log("aaaadid a thing!!!!", res.data)))
//     .catch(console.error())
