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
        // favoriteArticles: [],
        articles: [],
        favoriteArticles: []
    }

    componentDidMount = () => {
        
        fetch("http://localhost:3000/api/v1/articles")
        .then(r => r.json())
        .then(data => {this.setState(prevState => ({
            articles: data
        }))})
    }

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
                // title: article_object.title,
                // category: article_object.category ,
                // author: article_object.author ,
                // description: article_object.description,
                // url: article_object.url ,
                // urlToImage: article_object.urlToImage,
                // content: article_object.content ,
                article_id: article_object.id  ,
                favorite_id: 1,
                review: "dfgsdvwrgv"
                // user_id: article_object.favorite.user_id,
                // name: article_object.favorite.name
            })
        })
        .then(r => r.json())
        .then(newArticleInFav => {
            this.setState({favoriteArticles: [...this.state.favoriteArticles, newArticleInFav]})
            localStorage.setItem('articles',JSON.stringify(this.state.favoriteArticles))
        
        })
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
                        
                    {/* {this.state.current_user !== null ?  */}
                            <Route path="/favorites" render={() => <Favorite favoriteArticles={this.state.favoriteArticles} editReviewHandler={this.editReviewHandler} deleteFavoriteArticletHandler={this.deleteFavoriteArticletHandler}/>} /> 
                        {/* :  */}
                        {/* null */}
                        {/* }     */}
                        {/* <Route path="/aboutus" render={() => <AboutUs />}/> */}
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