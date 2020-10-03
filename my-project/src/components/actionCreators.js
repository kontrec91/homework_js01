/////////////////////////////////
// function actionLogIn(token) {
//   return {
//     type: 'LOGIN',
//     'token': token
//   }
// }

//  function actionLogOut() {
//   return {
//     type: 'LOGOUT'
//   };
// }

//  function actionPending(){
//   return{
//       status:'pending',
//       payload:null,
//       error:null,
//       type:'PROMISE'
//   }
// }

//  function  actionResolved(payload){
//   return{
//       status:'resolved',
//       type:'PROMISE',
//       payload:payload,
//       error:null
//   }
// }
//  function actionRejected(error){
//   return{
//       status:'rejected',
//       type:'PROMISE',
//       error: error,
//       payload:null
//   }
// }

//  function  actionFetch (queryUser){
// const getGQL = (url, headers={}) =>
//   (query="", variables={}) =>
//       fetch(url,
//                     {method: 'POST',
//                           headers: {
//                             'Accept': 'application/json',
//                             'Content-Type': 'application/json',
//                             ...headers
//                           },
//                          body: JSON.stringify({query,variables})
//                         })
//       .then(res => res.json())
//       const originalFetch = fetch;
//       fetch = (url, params={headers:{}}) => {
//             params.headers.Authorization = "Bearer " + localStorage.authToken
//             return originalFetch(url, params)
//       }
// const gql = getGQL('/graphql',{Authorization : "Bearer " + localStorage.authToken})
// // const promise = gql(queryUser)
// return async function (dispatch){
//   dispatch(actionPending())
//   try {
//       dispatch(actionResolved(await gql(queryUser)))
//   }
//   catch (e) {
//       dispatch(actionRejected(e))
//   }
// }
// }

//////////////////////////////////////////
export default () => {
// const actionCreators = () => {
  const actionPending = (name) => ({
    name,
    type: "PROMISE",
    status: "PENDING",
    payload: undefined,
    error: undefined
  });
  const actionResolved = (name, payload) => ({
    name,
    type: "PROMISE",
    status: "RESOLVED",
    payload,
    error: undefined
  });
  const actionRejected = (name, error) => ({
    name,
    type: "PROMISE",
    status: "REJECTED",
    payload: undefined,
    error
  });

  //   store.dispatch(actionPending())
  //   p.then(data => store.dispatch(actionResolved(data)))

  function actionPromise(name, promise) {
    return async function (dispatch) {
      dispatch(actionPending(name));
      try {
        let result = await promise;
        dispatch(actionResolved(name, result));
        return result; //позволяет получить результат промиса снаружи
      } catch (e) {
        dispatch(actionRejected(name, e));
      }
    };
  }
};
// export default actionCreators;