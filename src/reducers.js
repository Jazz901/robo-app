import { CHANGE_SEARCH_FIELD, ROBOTS_REQUEST_PENDING, ROBOTS_REQUEST_SUCCESS, ROBOTS_REQUEST_FAILED } from './constants.js'


const initialStateSearch = {
    searchField: ''
}

const initialStateRobots = {
    isPending: false, 
    robots: [], 
    error: ''
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default: 
         return state;
    }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case ROBOTS_REQUEST_PENDING:
            return Object.assign({}, state, {isPending: true})
        case ROBOTS_REQUEST_SUCCESS: 
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case ROBOTS_REQUEST_FAILED: 
            return Object.assign(state, {error: action.payload, isPending: false})
        default: 
            return state; 
    }
}