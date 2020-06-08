import React from 'react'
import { connect } from 'react-redux'
import {startPostTask} from '../actions/taskAction'
class AddTask extends React.Component{
    constructor(){
        super()
        this.state = {
            title:'',
            dueDate:''
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            title:this.state.title,
            dueDate:this.state.dueDate
        }
        this.props.dispatch(startPostTask(data))
    }
    render(){
        return(
            <div>
                 <h2>Add Task</h2>
                 <form onSubmit={this.handleSubmit}>
                  <label>Title</label>
                  <input type="text" name='title' id='title'
                  value={this.state.title} onChange={this.handleChange}/><br/>
                  <label>Due Date</label>
                  <input type="Date" name='dueDate' onChange={this.handleChange}/><br/>
                  <input type="submit" className='myButton'/>
                 </form>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {

    }
}
export default connect(mapStateToProps)(AddTask)