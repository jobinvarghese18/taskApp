const initailState = []

const userReducer = (state = initailState,action)=>{
    switch(action.type){
        case 'POST_USER':{
            return [].concat(action.payload)
        }
        case 'RESET_USER':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export  default userReducer