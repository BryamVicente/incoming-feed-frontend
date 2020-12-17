import React, { Component } from 'react'
import FavoriteArticle from '../Components/FavoriteArticle'

class Favorite extends Component {

    renderFavoriteArticles = () => { 
        return this.props.favoriteArticles.map(favArt => <FavoriteArticle key={favArt.id} editReviewHandler={this.props.editReviewHandler} favArt={favArt} deleteFavoriteArticletHandler={this.props.deleteFavoriteArticletHandler} />)
    }

    render() {
        console.log(this.props.favoriteArticles,  "this.props.favoriteArticles")
        return (
            <div>
                <h2> I'm the favorite list</h2>
                {this.renderFavoriteArticles()}
            </div>
        )
    }
}


export default Favorite;