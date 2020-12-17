import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateReview } from '../redux/action'
 
class EditReviewForm extends Component {

    state = {
        review: this.props.favArt.review
    }

    onChangeHandler = (e) => {
        console.log("tesing",e.target.value)
        e.persist();
        this.setState(() => ({ review: e.target.value}))
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        console.log("inside the form: ", e.target[0].value)
        this.props.patchReview(this.state.review, this.props.favArt.id)
        this.setState({ review:""})
    }

    render() {
        console.log(this.props.favArt.review)
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input type="type" name="review" value={this.state.review} onChange={this.onChangeHandler}/>
                <input type="submit" name="submit" value="Edit Review" />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchReview: (updatedRev, id) => dispatch( updateReview(updatedRev, id))
    }
}

export default connect(null, mapDispatchToProps)(EditReviewForm)