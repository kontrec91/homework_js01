
import { combineReducers } from 'redux';
import jwt_decode from "jwt-decode";
import actionCreators from "./actionCreators";


    let authReducer = (state, action) => {
        if(state === undefined){
            return({});
        }
        if(action.type === 'LOGIN'){
            var data = jwt_decode(action.token);
            localStorage.authToken = action.token;
            // console.log({data : {data}, token: action.token})
            return({data: {data}, token: action.token});
        }
        if(action.type === 'LOGOUT'){
            localStorage.authToken = "";
            return({});
        }
        }


        
            // store.dispatch(actionPending())
            // p.then(data => store.dispatch(actionResolved(data)))
        


        const promiseReducer = (state, action) => {
            if(state === undefined){
                return({});
            }
            if (action.type === 'PROMISE') {
                        //три состояния
                        // const actionPending = (name, Pending) => ({
                        //     name,
                        //     type: "SET_STATUS",
                        //     status: "Pending",
                        //     payload: "null",
                        //     error: "null",
                        //   });
                        //   const actionResolved = (name, Resolved) => ({
                        //     name,
                        //     type: "SET_STATUS",
                        //     status: "Resolved",
                        //     payload: "",
                        //     error: "null",
                        //   });
                        //   const actionRejected = (name, error) => ({
                        //     name,
                        //     type: "SET_STATUS",
                        //     status: "Rejected",
                        //     payload: "null",
                        //     error,
                        //   });

                        //   function actionPromise(promise) {
                        //     return async function (dispatch) {
                        //       dispatch(actionPending());
                        //       try {
                        //         let result = await promise;
                        //         dispatch(actionResolved(result));
                        //         return result; //позволяет получить результат промиса снаружи
                        //       } catch (e) {
                        //         dispatch(actionRejected(e));
                        //       }
                        //     };
                        // }

                    return {status: action.status, payload: action.payload, error: action.error}
                    
            }  
        }



// {           console.log(combineReducers); 
// }
// {debugger}
        const myReducers = combineReducers({
            auth: authReducer,
            promise: promiseReducer
        })
export default myReducers;