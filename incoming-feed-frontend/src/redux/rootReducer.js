// import { combineReducers } from 'redux'

// const defaultState = {
//     articles: [],
//     favoriteArticles: []
// }

// function articleReducer( state = defaultState.articles, action) {
//     switch (action.type) {
//         case "FETCH_ARTICLES":
//             return action.payload
            
//         default: 
//             return state
//     }
// }

// function favoriteArticleReducer( state = defaultState.favoriteArticles, action) {
//     switch (action.type) {
//         case "FETCH_FAVORITE_ARTICLES":
//             return action.payload
//         case "ADD_ARTICLES_TO_FAVS":
//             return [...state, action.payload]
//         default: 
//             return state
//     }
// }

// const rootReducer = combineReducers({
//     articles: articleReducer,
//     favoriteArticles: favoriteArticleReducer
// })

// export default rootReducer