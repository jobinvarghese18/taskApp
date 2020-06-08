import axios from '../config/axios'
//Get data 
export const getTask =  (data)=>{
    return { type:'GET_TASK',payload:data}
}
export const startGetTasks = ()=>{
    return(dispatch)=>{
        const auth = localStorage.getItem('auth')
        console.log(auth)
        axios.get('/tasks',{
            headers:{
                "Authorization":auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(getTask(data))
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
}


//Post Task
export const postTask = (data)=>{
    return { type:'POST_TASK',payload:data}
}
export const startPostTask = (data)=>{
    return(dispatch)=>{
        const auth = localStorage.getItem('auth')
        axios.post(`/tasks`,data,{
            headers:{
             "Authorization":auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(postTask(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Delete Task 
export const deleteTask = (data)=>{
    return { type:'DELETE_TASK',payload:data}
}
export const startDeleteTask = (id)=>{
    return(dispatch)=>{
        const auth = localStorage.getItem('auth')
        axios.delete(`/tasks/${id}`,{
            headers:{
             "Authorization":auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data  = response.data
            dispatch(deleteTask(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Update task
export const updateTask = (data)=>{
    return{ type:"UPDATE_TASK",payload:data}
}
export const startUpdateTask = (id,data)=>{
    return(dispatch)=>{
        const auth = localStorage.getItem('auth')
        axios.put(`/tasks/${id}`,data,{
            headers:{
             "Authorization":auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(updateTask(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}