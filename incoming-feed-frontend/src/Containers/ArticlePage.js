import React, { Component } from 'react'
import Favorite from './Favorite'
import ArticleContainer from './ArticleContainer'
import Logo from '../Components/Logo'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import {  Icon, Button, Menu} from 'semantic-ui-react'

class ArticlePage extends Component {

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
                        
                    {/* {this.state.current_user !== null ?  */}
                            <Route path="/favorites" render={() => <Favorite />}/> 
                        {/* :  */}
                        {/* null */}
                        {/* }     */}
                        {/* <Route path="/aboutus" render={() => <AboutUs />}/> */}
                        <Route path="/articles" render={() => <ArticleContainer   />}/>
                </Switch>
            </>
        )
    }
}

// const mapDispatchToprops = dispatch => {
//     return {
        
//     }
// }

export default withRouter(ArticlePage )