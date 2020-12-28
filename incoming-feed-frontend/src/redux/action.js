import { FETCH_ARTICLES, FETCH_FAVORITE_ARTICLES, ADD_FAVORITE_ARTICLES, DELETE_FAVORITE_ARTICLES, UPDATE_REVIEW_IN_FAVORITE_ARTICLES, FETCH_CATEGORY_CHOICES, FETCH_USERS} from './actionTypes'

export function getArticleFromApi() {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/articles")
        .then(r => r.json())
        .then(data => {
            dispatch({type: FETCH_ARTICLES, payload: data})
        })
    }
}

export function getFavoriteArticleFromApi() {
    return function(dispatch){
        fetch("http://localhost:3000/api/v1/favorite_articles")
        .then(r => r.json())
        .then(data => {
            dispatch({type: FETCH_FAVORITE_ARTICLES, payload: data})
        })
    }
}

export function addingFavoriteArticle(favArticleObj) {
    return function(dispatch) {
        fetch("http://localhost:3000/api/v1/favorite_articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                article_id: favArticleObj.id  ,
                favorite_id: 1,
                review: ""
            })
        })
        .then(r => r.json())
        .then(singleObj => dispatch({ type: ADD_FAVORITE_ARTICLES, payload: singleObj}))
    }
}

export function deleteFavoriteArticle (favArt) {
    // const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/favorite_articles/${favArt.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((deletetedFavArticle) => {
            dispatch({ type:DELETE_FAVORITE_ARTICLES , payload: deletetedFavArticle})
        })
    }
}

export function updateReview (review, id) {
    return function(dispatch) {
        fetch(`http://localhost:3000/api/v1/favorite_articles/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ review: review })
        })
        .then(r => r.json())
        .then(updatedReview => dispatch({type: UPDATE_REVIEW_IN_FAVORITE_ARTICLES, payload: updatedReview}))
    }
}

export function fetchCategoryChoice () {
    return function(dispatch) {
        fetch("http://localhost:3000/api/v1/category_choices")
        .then(r => r.json())
        .then(data => { dispatch({type: FETCH_CATEGORY_CHOICES, payload: data}) })
    }
}

export function fetchUsers() {
    return function(dispatch) {
        fetch("http://localhost:3000/api/v1/users")
        .then(r => r.json())
        .then(data => { dispatch({type: FETCH_USERS, payload: data}) })
    }
}