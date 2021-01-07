import React, { Component } from 'react'
import Favorite from './Favorite'
import ArticleContainer from './ArticleContainer'
import Logo from '../Components/Logo'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getFavoriteArticleFromApi, userLoggedIn } from '../redux/action'
import Profile from '../Containers/Profile'

class ArticlePage extends Component {

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
        const navLinks = {
            
            alignItems: "center",
            justifyContent: "center",
            fontSize: "calc(5px + 2vmin)",
            background: "#101821"
    
          }
        return (
            <>
                {/* <Logo/>     */}
                <Menu className="nav-links" pointing 
                // style={{"background":"#101821"}}
                style={navLinks}
                >

                    <Menu.Menu 
                    // position='right'
                    >
                        <img alt="logo"className="nice-logo" src="./Logo.png"/>
                        {/* <Image floated='left' src="./Logo.png" /> */}
                        {localStorage.getItem('token') ?
                            <>
                                <Menu.Item children={ <NavLink to="/articles" className="articles-link">Home</NavLink>}/>
                                <Menu.Item children={ <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>}/>
                                <Menu.Item children={ <NavLink to="/profile" className="profile-link">Profile</NavLink>}/>
                                <Menu.Item children={<button className='logout' onClick={this.logOutHandler}>Log Out</button>} />
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