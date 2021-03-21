import React from 'react'
import { Button, Item, Divider } from 'semantic-ui-react'
import EditReviewForm from './EditReviewForm'
import { connect } from 'react-redux'
import { deleteFavoriteArticle } from '../redux/action'

class FavoriteArticle extends React.Component {

  state = {
    display: false,
  }

  // This function deletes the Articles from the Favorite's list
  localDeleteHandler = () => {
    this.props.deleteFavoriteArt(this.props.favArt)
  }

  // This function changes the text on the edit Review Button
  handleForm = () => {
    this.setState({display: !this.state.display})
  }

  render(){
    const buttonStyles = {
      backgroundColor: "#f9d815",
      color: "#1c2331"
    }
    return (
      <Item.Group>
        <Item >
          <Item.Image src={this.props.favArt.article.urlToImage}/>

          <Item.Content>
            <Item.Header style={{"color": "white"}} as='a'>{this.props.favArt.article.title}</Item.Header>

            <Item.Meta style={{"color": "white"}}>
              <span className='cinema'>{this.props.favArt.article.author}</span>
            </Item.Meta>

            <Item.Description style={{"color": "white"}}>{this.props.favArt.article.description}</Item.Description>
            <Item.Extra>
              <div className="detail"><a href={this.props.favArt.article.url} target='_blank' rel="noreferrer">Click For More Detail</a></div>

              <h3 style={{"color": "#3f729b"}}>Note: {this.props.favArt.review}</h3>

              <Button onClick={this.handleForm} content="Leave Note" color="blue" />
                {this.state.display ? <EditReviewForm favArt={this.props.favArt} editReviewHandler={this.props.editReviewHandler} /> : null}
              <Button floated='left' style={buttonStyles} content="Delete!" onClick={this.localDeleteHandler}/>
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
