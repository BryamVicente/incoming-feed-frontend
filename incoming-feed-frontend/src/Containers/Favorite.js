import React, { Component } from 'react'
import FavoriteArticle from '../Components/FavoriteArticle'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

class Favorite extends Component {

    // This function iterates through the favoriteArticles array and renders whatever is there!
    renderFavoriteArticles = () => { 
        return this.props.favoriteArticles.map(favArt => <FavoriteArticle key={favArt.id} editReviewHandler={this.props.editReviewHandler} favArt={favArt} deleteFavoriteArticletHandler={this.props.deleteFavoriteArticletHandler} />)
    }

    // This render function shows the articles that I favorited and can only view of the user is signed in!
    render() {
        console.log(this.props)
        return (
            <>
                <Switch>
                    <Route path="/favorites" render={() => {
                        return (
                            <>
                                {localStorage.getItem('token') ? 

                                    <div> 
                                        <br></br>
                                        <h2 className="favorite-header"> Favorites</h2>
                                        <br></br>
                                        {this.renderFavoriteArticles()}
                                    </div>
                                :
                                    <>
                                        <Redirect to='/login' />
                                    </>
                                }
                            </>
                        )
                    }}/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { favoriteArticles: state.favoriteArticles}
}

export default connect(mapStateToProps)(Favorite)