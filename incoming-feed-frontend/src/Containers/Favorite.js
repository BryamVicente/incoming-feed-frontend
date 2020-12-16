import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getFavoriteArticleFromApi } from '../redux/action'
import FavoriteArticle from '../Components/FavoriteArticle'

class Favorite extends Component {

   
   
   

    renderFavoriteArticles = () => {
        return this.props.favoriteArticles.map(favArt => <FavoriteArticle key={favArt.id} editReviewHandler={this.props.editReviewHandler} favArt={favArt} deleteFavoriteArticletHandler={this.props.deleteFavoriteArticletHandler} /> )
    }


    render() {
        console.log(this.props.favoriteArticles)
        return (
            <div>
                <h2> I'm the favorite list</h2>
                {this.renderFavoriteArticles()}
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchFavoriteArticle: () => dispatch(getFavoriteArticleFromApi())
//     }
// }

// const mapStateToProps = (state) => {
//     return {favoriteArticles: state.favoriteArticles}
// }

//   export default connect(mapStateToProps, mapDispatchToProps)(Favorite)

export default Favorite;