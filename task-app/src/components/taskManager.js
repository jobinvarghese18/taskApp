import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment/min/moment-with-locales';

import {startGetTasks,startPostTask, startDeleteTask, startUpdateTask} from '../actions/taskAction'

class TaskManager extends React.Component{
    constructor(){
        super()
        this.state = {
           tasks:[],
            filter:''
        }
    }
    handleCheckBox = (id,status)=>{
        console.log(status)
        const data = {
            completed:!status
        }
        this.props.dispatch(startUpdateTask(id,data))
    }
    handleFilter = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
   
    handleRemove = (id)=>{
        const confirm = window.confirm("Are you sure?")
     if(confirm){
        this.props.dispatch(startDeleteTask(id))
     }
     
    }
    componentDidMount(){
      this.props.dispatch(startGetTasks())
    }
    render(){
        console.log()
        return(
            <div>
                <input type="text" name="filter" value={this.state.filter} onChange={this.handleFilter} placeholder="Search"/>
               {this.props.tasks?<TableFormat tasks={this.state.filter.length>0?this.props.tasks.filter(tsk=>{
            return tsk.title.toLowerCase().includes(this.state.filter.toLowerCase())
        }):this.props.tasks} handleRemove={this.handleRemove} handleCheckBox={this.handleCheckBox}/>:''} 
            </div>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        tasks:state.tasks
    }
}
export default connect(mapStateToProps)(TaskManager)

function TableFormat(props){
    return(
        <div>
            <div>{props.tasks?
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>TItle</th>
                            <th>Created on</th>
                            <th>DueDate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                               props.tasks.map(ele=>{
                                    return(
                                        <tr key={ele._id}>
                                            <td><input type="checkbox"  checked={ele.completed} onClick={()=>{props.handleCheckBox(ele._id,ele.completed)}}/></td>
                                            <td>{ele.title}</td>
                                            <td>{moment(ele.createdOn).format('YYYY-MM-DD')}</td>
                                            <td>{moment(ele.dueDate).format('YYYY-MM-DD')}</td>
                                            <td><button className='myButton'
                                            onClick={()=>{props.handleRemove(ele._id)}}>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        
                    </tbody>
                 </table>
            </div>:''}
        </div>
        </div>
    )
}