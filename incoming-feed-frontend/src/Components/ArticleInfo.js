import React, { Component } from 'react'
import { Button, Image } from 'semantic-ui-react'
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
                <div className="wrapper">
                    <Image  size='big' centered  alt="article" src={this.props.article.urlToImage}/>    

                    <div className="article-info-content">
                        <h2> Title: {this.props.article.title}</h2>

                        <span className='cinema'> Author: {this.props.article.author}</span>
                        <br></br>
                        {/* <label className="desc-tag">Content: </label> */}

                        <h3>Content: {this.props.article.content}</h3>
                        <div className="detail"><a href={this.props.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>
                        <Button onClick={this.addToFavHandler} color="yellow" icon="star" content={this.state.switch ? "In Fav!" : "Add to Favs!"}/>
                    </div>

                    <div>
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