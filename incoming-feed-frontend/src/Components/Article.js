import React from 'react'
import { NavLink } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

 class Article extends React.Component {

    state = {
        flipped: false
    }

    addToFavoriteHandler = () => {
        console.log("clicked")
        this.setState({ flipped: true })
    }

    render(){
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

                <Button onClick={this.addToFavoriteHandler} color="blue" icon="star" content={this.state.flipped ? "Added!" : "Add to Favs!"} />
            </Card>
        )
    }
}

export default Article;