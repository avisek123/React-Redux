const { redux, createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require('axios');
// initial state define

const intitialState={
    loading:false,
    user:[],
    error:''
}
// action 

const USER_REQ='USER_REQ';
const USER_SUCCESS='USER_SUCCESS';
const USER_ERR='USER_ERR';

//action creator

function userReq(){
    return{
        type:USER_REQ
    }
}
function userSuc(users){
    return{
        type:USER_SUCCESS,
        payload:users
    }
}
function userErr(error){
    return{
        type:USER_ERR,
        payload:error
    }
}
// creat reducer

const reducer=(state=intitialState,action)=>{
    switch(action.type){
        case 'USER_REQ':
            return{
                ...state,
                loading:true
            }
            case 'USER_SUCCESS':
                return{
                    loading:false,
                    users:action.payload,
                    error:''
                } 
                case 'USER_ERR':
                    return{
                        loading:false,
                        users:[],
                        error:action.payload
                    }        
    }
}
const fetchUser=()=>{
    return function(dispatch){
        dispatch(userReq())
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
            // response.data
            const users=response.data.map(users=>user.name)
            dispatch(userSuc(users))
        })
        .catch(error=>{
            // error.messsage
            dispatch(userErr(error.message))
        })

    }
}
// store
const store=createStore(reducer, applyMiddleware(thunkMiddleware));
 // subscribe
 store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());