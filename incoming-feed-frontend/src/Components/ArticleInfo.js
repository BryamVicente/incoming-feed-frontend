import React, { Component } from 'react'
import { Item, Button, Icon } from 'semantic-ui-react'

class ArticleInfo extends Component {

    state = {
        switch: false
    }

    addToFavHandler = () => {
        // this.props.addingArticlesToFav(this.props.article)
        console.log("clicked to show ")
        this.setState({ switch: true})
    }

    render() {
        return (
            <>
                {/* <div>
                <a href={this.props.article.url}> </a>
                </div> */}
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


export default ArticleInfo;