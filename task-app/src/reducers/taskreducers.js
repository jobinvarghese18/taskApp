const initialState = []
const taskReducer = (state =initialState,action)=>{
    switch(action.type){
        case 'GET_TASK':{
            return [].concat(action.payload)
        }
        case 'POST_TASK':{
            return state.concat(action.payload)
        }
        case 'DELETE_TASK':{
            return  [].concat(state.filter(ele=>ele._id !== action.payload._id))
        }
        case 'UPDATE_TASK':{
            return state.map(ele=>{
                if(ele._id === action.payload._id){
                   return Object.assign({},ele,action.payload)
                }
                else{
                    return Object.assign({},ele)
                }
            })
        }
        default :{
            return [].concat(state)
        }
    }
}
export default taskReducer