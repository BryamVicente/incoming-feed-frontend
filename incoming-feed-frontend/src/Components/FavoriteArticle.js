import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import EditReviewForm from './EditReviewForm'
// import {connect} from 'react-redux'
// import { addingArticleToList } from '../redux/action'




class FavoriteArticle extends React.Component {

    state = {
        display: false
        // review: this.props.favArt.review
    }

    localDeleteHandler = () => {
        this.props.deleteFavoriteArticletHandler(this.props.favArt)
        // console.log(this.props)
    }

    handleForm = () => {
        this.setState({display: !this.state.display})
    }

    render(){
        console.log(this.props)
        return (
            <Card>
        
                <Card>
                    <img className="article-image" src={this.props.favArt.article.urlToImage} />
                </Card>
            
    
            <Card.Content>
                <Card.Header>{this.props.favArt.article.title}</Card.Header>
    
                <Card.Meta>
                    <span>{this.props.favArt.article.author}</span>
                </Card.Meta>
    
                <Card.Description>
                    {this.props.favArt.article.description}
                </Card.Description>
            </Card.Content>
            <h3>Review: {this.props.favArt.review}</h3>
            <div className="detail"><a href={this.props.favArt.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>
            <Button onClick={this.handleForm} content="Edit Review" color="blue" />
            {this.state.display ? <EditReviewForm favArt={this.props.favArt} editReviewHandler={this.props.editReviewHandler} /> : null}
    
            <Button onClick={this.localDeleteHandler} color="red" content="Delete!" />
        </Card>
        )

    
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addtoFavorites: (adding) => dispatch( addingArticleToList(adding))
//     }
// }

// export default connect(mapDispatchToProps)(FavoriteArticle);

export default FavoriteArticle;