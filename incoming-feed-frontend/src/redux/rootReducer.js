import { combineReducers } from 'redux'

const defaultState = {
    articles: [],
    favoriteArticles: [],
    category_choices: [],
    currentUser: {currentUser: null}
}

function articleReducer( state = defaultState.articles, action) {
    switch (action.type) {
        case "FETCH_ARTICLES":
            return action.payload
        default: 
            return state
    }
}

function favoriteArticleReducer( state = defaultState.favoriteArticles, action) {
    switch (action.type) {
        case "FETCH_FAVORITE_ARTICLES":
            return action.payload
        case "ADD_FAVORITE_ARTICLES":
            return [...state, action.payload]
        case "DELETE_FAVORITE_ARTICLES":
            return state.filter(favArt => favArt.id !== action.payload.id)
        case "UPDATE_REVIEW_IN_FAVORITE_ARTICLES":
            let copiedState = [...state]
            let oldObject = copiedState.findIndex(favArticle => favArticle.id === action.payload.id )
            copiedState[oldObject] = action.payload
            return copiedState
        default: 
            return state
    }
}

function categoryChoiceReducer(state = defaultState.category_choices, action){
    switch(action.type){
        case "FETCH_CATEGORY_CHOICES":
            return action.payload
        default:
            return state
    }
}

function currentUserReducer(state = defaultState.currentUser, action) {
    switch(action.type){
        case "USER_LOGGED_IN":
            return action.payload
        case "LOGIN":
            return action.payload
        case "LOGOUT":
            return {currentUser: null}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    articles: articleReducer,
    favoriteArticles: favoriteArticleReducer,
    category_choices: categoryChoiceReducer,
    currentUser: currentUserReducer
})

export default rootReducer