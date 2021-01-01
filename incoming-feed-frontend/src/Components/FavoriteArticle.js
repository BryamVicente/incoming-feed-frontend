import React from 'react'
import { Card, Icon, Image, Button, Item, Divider } from 'semantic-ui-react'
import EditReviewForm from './EditReviewForm'
import {connect} from 'react-redux'
import { deleteFavoriteArticle } from '../redux/action'


class FavoriteArticle extends React.Component {

    state = {
      display: false,
    }

    localDeleteHandler = () => {
      this.props.deleteFavoriteArt(this.props.favArt)
    }

    handleForm = () => {
      this.setState({display: !this.state.display})
    }

    render(){
    console.log(this.props.favArt)
      return (
        
        <Item.Group>
          <Item>
            <Item.Image src={this.props.favArt.article.urlToImage}/>

            <Item.Content>
              <Item.Header as='a'>{this.props.favArt.article.title}</Item.Header>
              <Item.Meta>
                <span className='cinema'>{this.props.favArt.article.author}</span>
              </Item.Meta>
              <Item.Description>{this.props.favArt.article.description}</Item.Description>
              <Item.Extra>
                <div className="detail"><a href={this.props.favArt.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>
                <h3>Review: {this.props.favArt.review}</h3>
                <Button onClick={this.handleForm} content="Leave Review" color="blue" />
                {this.state.display ? <EditReviewForm favArt={this.props.favArt} editReviewHandler={this.props.editReviewHandler} /> : null}
                <Button floated='left' color="red" content="Delete!" onClick={this.localDeleteHandler}/>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider/>
        </Item.Group>
        
    )    
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFavoriteArt: (deletedFav) => dispatch( deleteFavoriteArticle(deletedFav))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteArticle);
