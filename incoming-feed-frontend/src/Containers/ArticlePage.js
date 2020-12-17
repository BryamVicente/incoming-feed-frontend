import React, { Component } from 'react'
import Favorite from './Favorite'
import ArticleContainer from './ArticleContainer'
import Logo from '../Components/Logo'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import {  Icon, Button, Menu} from 'semantic-ui-react'
// import { connect } from 'react-redux'

class ArticlePage extends Component {

    state = {
        
        articles: [],
        favoriteArticles: [],
        favorites: [],
        user: {},
        current_user_id: 1
    }

    componentDidMount = () => {
        
        fetch("http://localhost:3000/api/v1/articles")
        .then(r => r.json())
        .then(data => {this.setState(prevState => ({
            articles: data
        }))})
        fetch("http://localhost:3000/api/v1/favorites")
        .then(r => r.json())
        .then(singleFav => {this.setState({ favorites: singleFav[0] })})
        fetch("http://localhost:3000/api/v1/favorite_articles")
        .then(r => r.json())
        .then(data => {
            // let thisUserArticles = data.filter(dataObj => dataObj.favorite.user_id === this.state.current_user_id )
            this.setState({ favoriteArticles: data })
        })
    }

    // showingFavorites = () => {
    //     return this.state.favorites.map(favorite =)
    // }

   

    // componentDidMount = () => {
    //     fetch("http://localhost:3000/api/v1/users")
    //     .then(r => r.json())
    //     .then(data => {
    //         this.setState({ users:data})
    //     })
    // }

    editReviewHandler = (review, id) => {
        fetch(`http://localhost:3000/api/v1/favorite_articles/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ review: review })
        })
        .then(r => r.json())
        .then(updatedReview => {
            let copiedArray = [...this.state.favoriteArticles]
            let oldObject = copiedArray.findIndex(favArticle => favArticle.id === updatedReview.id )
            copiedArray[oldObject] = updatedReview
            this.setState({ favoriteArticles: copiedArray})
        })
        console.log("editing: ", review, id)
    }
   
    favoriteClickHandler = (article_object) => {
        // this.setState({ favorites: [...this.state.favorites, article_object]})
        console.log("adding", article_object)
        fetch("http://localhost:3000/api/v1/favorite_articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
              
                article_id: article_object.id  ,
                favorite_id: 2,
                review: ""
            })
        })
        .then(r => r.json())
        .then(newArticleInFav => 
            this.setState(() => ({favoriteArticles: [...this.state.favoriteArticles, newArticleInFav]})))
            // localStorage.setItem('articles',JSON.stringify(this.state.favoriteArticles))
       
    }

    deleteFavoriteArticletHandler = (object) => {
        // const token = localStorage.getItem('token')
        console.log("deleting", object.id)
        fetch(`http://localhost:3000/api/v1/favorite_articles/${object.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            let copiedArray = [...this.state.favoriteArticles]
            let newList = copiedArray.filter(favoriteArt => favoriteArt.id !== object.id)
            this.setState({ favoriteArticles: newList})
        })
        .catch(console.log)
    }
    
    render() {
        // debugger
        console.log(this.state.favorites, "this.state.favorites")
        console.log(this.state.favoriteArticles,  "this.state.favoriteArticles")
        return (
            <>
                <Logo/>    
                    <Menu className="nav-links" pointing secondary>
                        <Menu.Menu position='right'>
                            
                            <Menu.Item children={ <NavLink to="/login" className="login-link">Log In</NavLink> } />
                            <Menu.Item children={ <NavLink to="/signup" className="signup-link">Sign up</NavLink>} />
                            <Menu.Item children={ <NavLink to="/articles" className="articles-link">Home</NavLink>}/>
                            <Menu.Item children={ <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>}/>
                        
                        </Menu.Menu>
                    </Menu>

                <Switch>
                    <Route path="/signup" render={()=> <Signup   />} />
                    <Route path="/login" render={()=> <Login />} />
                    <Route path="/favorites" render={() => <Favorite  favorites={this.state.favorites} favoriteArticles={this.state.favoriteArticles} editReviewHandler={this.editReviewHandler} deleteFavoriteArticletHandler={this.deleteFavoriteArticletHandler}/>} /> 
                    <Route path="/articles" render={() => <ArticleContainer  articles={this.state.articles} favoriteClickHandler={this.favoriteClickHandler} />}/>
                </Switch>
            </>
        )
    }
}

// const mapDispatchToprops = dispatch => {
//     return {
        
//     }
// }

// const mapStateToProps = (state) => {
//     return { favoriteArticles: state.favoriteArticles}
// }


export default withRouter((ArticlePage) )