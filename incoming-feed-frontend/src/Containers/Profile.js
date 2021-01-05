import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from '../Components/ProfileInfo'

class Profile extends Component {

    render() {
        return (
            <div>
                <h2 className="profile-title"> User's Info </h2>
                <ProfileInfo  />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Profile)