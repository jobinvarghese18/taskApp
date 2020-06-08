import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import AddTask from './addTask'
import TaskManager from './taskManager'

function Home(props){
    
        return(
          
            <div>
                <h1>Task Manager</h1>
                 <TaskManager/> 
                 <AddTask/>
            </div>
        )
    
}
const mapStateToProps = (state)=>{
    return {
        tasks:state.tasks,
        user:state.users
    }
}
export default connect(mapStateToProps)(Home)