import { combineReducers } from 'redux'

const defaultState = {
    articles: []
}

function articleReducer( state = defaultState.articles, action) {
    switch (action.type) {
        case "FETCH_ARTICLES":
            return action.payload
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    articles: articleReducer
})

export default rootReducer