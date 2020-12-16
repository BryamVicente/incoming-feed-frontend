import React, { Component } from 'react'

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
        this.props.editReviewHandler(this.state.review, this.props.favArt.id)
    }

    render() {
        // console.log(this.props.favArt.review)
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input type="type" name="review" value={this.props.review} onChange={this.onChangeHandler}/>
                <input type="submit" name="submit" value="Edit Review" />
                
            </form>
        )
    }
}


export default EditReviewForm