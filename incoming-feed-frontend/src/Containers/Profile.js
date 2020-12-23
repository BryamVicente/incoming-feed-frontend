import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from '../Components/ProfileInfo'
import { fetchUserInterests } from '../redux/action'

class Profile extends Component {

    componentDidMount = () => {
        this.props.getUsers()
    }

    renderUsers = () => {
        return this.props.userInterests.map(userInterest => <ProfileInfo key={userInterest.id} userInterest={userInterest} />)
    }

    render() {
        return (
            <div>
                <h2 className="profile-title"> User's Info </h2>
                {this.renderUsers()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { userInterests: state.userInterests}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => { dispatch(fetchUserInterests()) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile)