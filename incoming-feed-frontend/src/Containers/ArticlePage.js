import React, { Component } from 'react'
import Favorite from './Favorite'
import ArticleContainer from './ArticleContainer'
import Logo from '../Components/Logo'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import {  Icon, Button, Menu} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getFavoriteArticleFromApi } from '../redux/action'


class ArticlePage extends Component {

    state = {
        user: {},
        current_user_id: 1
    }

    componentDidMount = () => {
        this.props.fetchFavoriteArticles()
    }
 
    render() {
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
                    <Route path="/favorites" render={() => <Favorite favoriteArticles={this.props.favoriteArticles} editReviewHandler={this.editReviewHandler} deleteFavoriteArticletHandler={this.deleteFavoriteArticletHandler}/>} /> 
                    <Route path="/articles" render={() => <ArticleContainer  favoriteClickHandler={this.favoriteClickHandler} />}/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { favoriteArticles: state.favoriteArticles}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavoriteArticles: () => dispatch(getFavoriteArticleFromApi())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlePage))