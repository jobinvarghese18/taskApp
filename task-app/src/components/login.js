import React from 'react'
import {startGetUsers} from '../actions/usersAction'
import {connect} from 'react-redux'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
    handleInputChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        const formData = {
            email:this.state.email,
            password:this.state.password
        }
        const redirect = ()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startGetUsers(formData,redirect))
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='e-mail'>E-mail</label>
                    <input type="text" name='email' id='email'
                    value={this.state.email} onChange={this.handleInputChange}/>
                    <br/>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' id='password'
                    vlaue={this.state.password} onChange={this.handleInputChange}/>
                    <br/>
                    <input type='submit' className='myButton'/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (props,state)=>{
    return {

    }
}
export default connect(mapStateToProps)(Login)