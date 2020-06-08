import React from 'react'
import {startPostUsers} from '../actions/usersAction'
import {connect} from 'react-redux'


class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'' ,
            email:'',
            password:''
        }
    }
    handleInputChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const form = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect = ()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startPostUsers(form,redirect))
    }
    render(){
        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>User Name</label>
                <input type="text" name="username" id='username'
                value={this.state.username}onChange={this.handleInputChange}/><br/>
                <label htmlFor='e-mail'>E-mail</label>
                <input type="text" name="email" id="email"
                value={this.state.email} onChange={this.handleInputChange}/>
                <br/>
                <label htmlFor='password'>Password</label>
                <input type="text" name="password" id="password"
                value={this.state.password} onChange={this.handleInputChange}/>
                <br/>
                <input type="submit" className='myButton'/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return{

    }
}
export default connect(mapStateToProps)(Register)