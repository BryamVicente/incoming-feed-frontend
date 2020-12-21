import React from 'react'
import { NavLink } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {  Icon, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addingFavoriteArticle } from '../redux/action'
import { Card, CardGroup} from 'react-bootstrap';

 class Article extends React.Component {

    state = {
        flipped: false,
        
    }

    addToFavoriteHandler = () => {
        this.setState({ flipped: true })
        this.props.addToFavs(this.props.article)
    }

    render(){
        return (
            // <Card>
            //     <NavLink to={`/articles/${this.props.article.id}`}>
            //         <Card>
            //             <img className="article-image" src={this.props.article.urlToImage} />
            //         </Card>
            //     </NavLink>

            //     <Card.Content>
            //         <Card.Header>{this.props.article.title}</Card.Header>
 
            //         <Card.Meta>
            //             <span>{this.props.article.author}</span>
            //         </Card.Meta>

            //         <Card.Description>
            //             {this.props.article.description}
            //         </Card.Description>
            //     </Card.Content>
            //     <div className="detail"><a href={this.props.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>

            //     <Button onClick={this.addToFavoriteHandler} color="blue" icon="star" content={this.state.flipped ? "Added!" : "Add to Favs!"} />
            // </Card>
            <CardGroup>
                <Card>
                    <NavLink to={`/articles/${this.props.article.id}`}>
                        <Card.Img className="article-image" variant="top" src={this.props.article.urlToImage} />
                    </NavLink>
                    <Card.Body>
                    <Card.Title>{this.props.article.title}</Card.Title>
                    <Card.Text>
                    {/* {this.props.article.description} */}
                    <div className="detail"><a href={this.props.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    <Button onClick={this.addToFavoriteHandler} color="blue" icon="star" content={this.state.flipped ? "Added!" : "Add to Favs!"} />
                    </Card.Footer>
                </Card>

            </CardGroup>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        addToFavs: (articleObj) => dispatch( addingFavoriteArticle(articleObj))
    }
}

export default connect(null, mapDispatchToProps)(Article);

