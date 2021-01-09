import { CHANGE_SEARCH_FIELD, ROBOTS_REQUEST_PENDING, ROBOTS_REQUEST_SUCCESS, ROBOTS_REQUEST_FAILED } from './constants.js'


export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD, 
        payload: text
})


// from app.js mapDispatchToProps
//returns a function
export const requestRobots = () => (dispatch) =>{
    dispatch({type: ROBOTS_REQUEST_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(resp => resp.json())
     .then(data => dispatch({type: ROBOTS_REQUEST_SUCCESS, payload: data}))
     .catch(err => dispatch({type: ROBOTS_REQUEST_FAILED, payload: err}))
}