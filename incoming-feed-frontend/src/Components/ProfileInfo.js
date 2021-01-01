import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoggedIn } from '../redux/action'

class ProfileInfo extends Component {

     componentDidMount = () => {
        this.props.getUser()
    }

    renderInterests = () => {
        return this.props.currentUser.interests.map(interest => {
            console.log(interest)
            return(
                <>
                    <li>{interest.topic}</li>
                </>
            )
        })
    }

    render() {
        return (
            <>           
                {this.props.currentUser.length > 0 ? 
                    <h2>Loading!!!</h2>
                    :
                    <>
                        <img className="profile-pic" alt={this.props.currentUser.name} src={this.props.currentUser.image}/>

                        <div>
                            <h3> Name: {this.props.currentUser.username}</h3>
                        </div>

                        <h3> Interests</h3>
                        <ul>
                            {this.renderInterests()}
                        </ul>
                    </>
                }
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => { dispatch(userLoggedIn()) }
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)
