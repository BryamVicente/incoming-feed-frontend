// import { FETCH_ARTICLES, ADD_ARTICLES_TO_FAVS, FETCH_FAVORITE_ARTICLES } from './actionTypes'


// export function getArticleFromApi() {
//     return function(dispatch){
//         fetch("http://localhost:3000/api/v1/articles")
//         .then(r => r.json())
//         .then(data => {
//             dispatch({type: FETCH_ARTICLES, payload: data})
//         })
//     }
// }

// export function getFavoriteArticleFromApi() {
//     return function(dispatch){
//         fetch("http://localhost:3000/api/v1/favorite_articles")
//         .then(r => r.json())
//         .then(data => {
//             dispatch({type: FETCH_FAVORITE_ARTICLES, payload: data})
//         })
//     }
// }

// export function addingArticleToList(favArticleObj) {
//     console.log("In addingDogtoapi: ",favArticleObj)
//     return function(dispatch) {
//         fetch("http://localhost:3000/api/v1/favorite_articles", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({
//                 // article_id: favArticleObj.id ,
//                 // favorite_id: favArticleObj.id ,
//                 // review: favArticleObj.review
//             })
//         })
//         .then(r => r.json())
//         .then(singleObj => dispatch({ type: ADD_ARTICLES_TO_FAVS, payload: singleObj}))
//         // .then(console.log)
//     }
// }

