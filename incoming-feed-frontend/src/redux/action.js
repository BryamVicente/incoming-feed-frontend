import { FETCH_ARTICLES, FETCH_FAVORITE_ARTICLES, ADD_FAVORITE_ARTICLES, DELETE_FAVORITE_ARTICLES, UPDATE_REVIEW_IN_FAVORITE_ARTICLES, FETCH_CATEGORY_CHOICES, FETCH_USERS, LOGIN, LOGOUT, USER_LOGGED_IN} from './actionTypes'

export function getArticleFromApi() {
    return function(dispatch){

        const token = localStorage.getItem('token')

        fetch("http://localhost:3000/api/v1/articles", {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: FETCH_ARTICLES, payload: data})
        })
    }
}

export function getFavoriteArticleFromApi() {
    return function(dispatch){

        const token = localStorage.getItem('token')

        fetch("http://localhost:3000/api/v1/favorite_articles", {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: FETCH_FAVORITE_ARTICLES, payload: data})
        })
    }
}

export function addingFavoriteArticle(articleObj) {
    return function(dispatch) {

        const token = localStorage.getItem('token')

        fetch("http://localhost:3000/api/v1/favorite_articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                article_id: articleObj.id  ,
                favorite_id: 1,
                review: ""
            })
        })
        .then(r => r.json())
        .then(singleObj => dispatch({ type: ADD_FAVORITE_ARTICLES, payload: singleObj}))
    }
}

export function deleteFavoriteArticle (favArt) {
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/api/v1/favorite_articles/${favArt.id}`, {
            method: "DELETE",
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(r => r.json())
        .then((deletetedFavArticle) => {
            dispatch({ type:DELETE_FAVORITE_ARTICLES , payload: deletetedFavArticle})
        })
    }
}

export function updateReview (review, id) {
    return function(dispatch) {

        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/api/v1/favorite_articles/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ review: review })
        })
        .then(r => r.json())
        .then(updatedReview => dispatch({type: UPDATE_REVIEW_IN_FAVORITE_ARTICLES, payload: updatedReview}))
    }
}

export function fetchCategoryChoice () {
    return function(dispatch) {

        const token = localStorage.getItem('token')

        fetch("http://localhost:3000/api/v1/category_choices", {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}`}
        })
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

export function loginAction(userInfo){
    // debugger
    return function(dispatch) {
      fetch("http://localhost:3000/api/v1/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password
        })
      })
      .then(r=>r.json())
      .then(data => {
        // debugger
          if (data.message){
            alert("Username and/or password is incorrect")
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch({type: LOGIN, payload: data.user})
          }
    })
    }
  }

  export const logoutAction = ()=>{
    return {type: LOGOUT}
  }


  export const userLoggedIn = () =>{
    return (dispatch) =>{
      const token = localStorage.getItem('token')
      
      fetch("http://localhost:3000/api/v1/profile", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`}
      })
      .then(r=>r.json())
      .then(data => {
        // debugger
          if(data.user){
            dispatch({type: USER_LOGGED_IN, payload: data.user})
          }
        console.log(data.user)
      })
    }
  }