import React from 'react'
import { NavLink } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import {  addingArticleToList} from '../redux/action'

 class Article extends React.Component {

    state = {
        flipped: false
    }

    addToFavoriteHandler = () => {
        // console.log("clicked" )
        this.setState({ flipped: true })
        this.props.favoriteClickHandler(this.props.article)
        // localStorage.setItem('articles',JSON.stringify(this.props.article))
    }

    render(){
        // console.log(this.props.article)
        return (
            <Card>
                <NavLink to={`/articles/${this.props.article.id}`}>
                    <Card>
                        <img className="article-image" src={this.props.article.urlToImage} />
                    </Card>
                </NavLink>

                <Card.Content>
                    <Card.Header>{this.props.article.title}</Card.Header>
 
                    <Card.Meta>
                        <span>{this.props.article.author}</span>
                    </Card.Meta>

                    <Card.Description>
                        {this.props.article.description}
                    </Card.Description>
                </Card.Content>
                <div className="detail"><a href={this.props.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>

                <Button onClick={this.addToFavoriteHandler} color="blue" icon="star" content={this.state.flipped ? "Added!" : "Add to Favs!"} />
            </Card>
        )
    }
}

// I dont think we need this!!!
    // const mapStateToProps = (state) => {
    //     return { articles: state.articles}
    // }

    ///   
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToFavs: (singleObj) => dispatch( addingArticleToList(singleObj))
//     }
// }


// export default connect(null, mapDispatchToProps)(Article);

export default Article;