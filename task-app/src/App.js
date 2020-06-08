import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './components/home'
import Register from './components/register'
import Login from './components/login'
import {connect} from 'react-redux'
import {startLogout} from './actions/usersAction'


function App(props) {
  const handleLogout  = ()=>{
    props.dispatch(startLogout())
  }
  return (
   <BrowserRouter>
    <div>
      {
        
        Object.keys(props.users).length !==0?(
          <div><Link to='/'>Home</Link>
          <Link to='#' onClick={handleLogout}>logout</Link>
          </div>
        ):(
          <div>
            <Link to='/users/register'>Register</Link>
           <Link to='/users/login'>Login</Link>
          </div>
        )
      }
      
      
      
        <Route path='/' exact={true}component={Home}/> 
        <Route path='/users/register' component = {Register}/>
        <Route path='/users/login' component = {Login}/>
      
    </div>
   </BrowserRouter>
  )
}
const mapStateToProps = (state,props)=>{
  return {
    users:state.users
  }
}
export default connect(mapStateToProps)(App)
