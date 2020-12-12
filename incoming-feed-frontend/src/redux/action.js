import { FETCH_ARTICLES } from './actionTypes'


export function getArticleFromApi() {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/articles")
        .then(r => r.json())
        .then(data => {
            dispatch({type: FETCH_ARTICLES, payload: data})
        })
    }
}

