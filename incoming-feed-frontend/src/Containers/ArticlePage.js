import React, { Component } from 'react'
import Favorite from './Favorite'
import ArticleContainer from './ArticleContainer'
import Logo from '../Components/Logo'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import Weather from '../Components/Weather'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import {  Icon, Button, Menu} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getFavoriteArticleFromApi, userLoggedIn } from '../redux/action'
import Profile from '../Containers/Profile'


class ArticlePage extends Component {

    // state = {
    //     user: {},
    //     current_user_id: 1
    // }

    componentDidMount = () => {
        this.props.fetchFavoriteArticles()
        this.props.getTheProfile()
    }

    logOutHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        this.setState(prevState => ({ currentUser: null }), () => this.props.history.push('/login'))
    }
 
    render() {
        console.log(this.props.currentUser)
        return (
            <>
                <Logo/>    
                    <Menu className="nav-links" pointing secondary>
                        <Menu.Menu position='right'>
                            <Menu.Item children={ <NavLink to="/weather" className="weather-link">Weather</NavLink>}/>
                        </Menu.Menu>

                        <Menu.Menu position='right'>
                            {localStorage.getItem('token') ?
                            <>
                                <Menu.Item children={<button className='logout' onClick={this.logOutHandler}>Log Out</button>} />
                                <Menu.Item children={ <NavLink to="/articles" className="articles-link">Home</NavLink>}/>
                                <Menu.Item children={ <NavLink to="/profile" className="profile-link">Profile</NavLink>}/>
                                <Menu.Item children={ <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>}/>
                            </>
                            :
                            <>
                                <Menu.Item children={ <NavLink to="/login" className="login-link">Log In</NavLink> } />
                                <Menu.Item children={ <NavLink to="/signup" className="signup-link">Sign up</NavLink>} />
                            </>
                        }

                        </Menu.Menu>
                    </Menu>

                <Switch>
                    <Route path="/signup" render={()=> <Signup   />} />
                    <Route path="/login" render={()=> <Login />} />
                    <Route path="/favorites" render={() => <Favorite />} /> 
                    <Route path="/articles" render={() => <ArticleContainer />}/>
                    <Route path="/weather" render={() => <Weather />} />
                    <Route path="/profile" render={() => <Profile />} />
                </Switch>
              
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFavoriteArticles: () => dispatch(getFavoriteArticleFromApi()),
        getTheProfile: () => dispatch(userLoggedIn())
    }
}

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlePage))