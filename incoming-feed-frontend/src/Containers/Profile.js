import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from '../Components/ProfileInfo'

class Profile extends Component {

    render() {
        return (
            <div>
                <br></br>
                <h2 className="profile-title"> Profile </h2>
                <br></br>
                <ProfileInfo  />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Profile)