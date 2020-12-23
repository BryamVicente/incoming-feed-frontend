import React, { Component } from 'react'
import FavoriteArticle from '../Components/FavoriteArticle'
import { connect } from 'react-redux'

class Favorite extends Component {

    renderFavoriteArticles = () => { 
        return this.props.favoriteArticles.map(favArt => <FavoriteArticle key={favArt.id} editReviewHandler={this.props.editReviewHandler} favArt={favArt} deleteFavoriteArticletHandler={this.props.deleteFavoriteArticletHandler} />)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2 className="favorite-header"> Favorites</h2>
                {this.renderFavoriteArticles()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { favoriteArticles: state.favoriteArticles}
}


export default connect(mapStateToProps)(Favorite)