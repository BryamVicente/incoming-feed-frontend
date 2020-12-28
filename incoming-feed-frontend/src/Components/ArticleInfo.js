import React, { Component } from 'react'
import { Item, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addingFavoriteArticle } from '../redux/action'

class ArticleInfo extends Component {

    state = {
        switch: false
    }

    addToFavHandler = () => {
      
        this.setState({ switch: true})
        this.props.addToFavs(this.props.article)
    }

    render() {
        return (
            <>
                <div className="article-info-cont">
                    <img alt="article" src={this.props.article.urlToImage} />

                    <div>
                        <h2> Title: {this.props.article.title}</h2>
                        <div>
                            <span className='cinema'> Author: {this.props.article.author}</span>
                        </div>
                        <label className="desc-tag">Content: </label>
                        <h3>{this.props.article.content}</h3>
                        <div>
                            <Button onClick={this.addToFavHandler} >
                                {this.state.switch ? "In Fav!" : "Add to Favs!"}
                            </Button>
                            <div className="detail"><a href={this.props.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavs: (articleObj) => dispatch( addingFavoriteArticle(articleObj))
    }
}

export default connect(null, mapDispatchToProps)(ArticleInfo);