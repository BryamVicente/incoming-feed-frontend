import { combineReducers } from 'redux'

const defaultState = {
    api: []
}

function apiReducer( state = defaultState.api, action) {
    switch (action.type) {
        case "FETCH_ARTICLES":
            return action.payload
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    api: apiReducer
})

export default rootReducer