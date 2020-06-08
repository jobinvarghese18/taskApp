import Axios from '../config/axios'

//Login User

export const setUser = (data)=>{
    return {type:'POST_USER',payload:data}
}

export const startGetUsers = (data,redirect)=>{
    return (dispatch)=>{
        Axios.post(`/user/login`,data)
        .then((response)=>{
            console.log(response)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
            }
            else{
                const auth = response.data.token
                console.log(auth)
                localStorage.setItem('auth',auth)
                Axios.get(`/user/account`,{
                    headers:{
                        "Authorization":auth
                    }
                })
                .then((response)=>{
                    console.log(response)
                const data = response.data
                alert('Sucessfully logged')
                redirect()
                dispatch(setUser(data))
                })
                .catch((err)=>{
                    console.log(err)
                })
                

            }
            
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Register User
export const postUser = (data)=>{
    // return {type:'POST_USER',payload:data}
}
export const startPostUsers = (data,redirect)=>{
    return(dispatch)=>{
        Axios.post(`/user/register`,data)
        .then((response)=>{
            console.log(response)
            const data = response.data
            if(data.hasOwnProperty('errors')){
                alert(data.message)
            }
            else{
                alert('Succesfully Registered')
                redirect()
                dispatch(postUser(data))
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
}

//Logout 
export const resetUser =  (data)=>{
    return { type:'RESET_USER',payload:data}
}

export const startLogout = ()=>{
    return(dispatch)=>{
        localStorage.removeItem('auth')
        dispatch(resetUser({}))
        window.location.href ='/users/login'
        
    }
}