import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from '../Components/ProfileInfo'
import { fetchUsers } from '../redux/action'

class Profile extends Component {

    componentDidMount = () => {
        this.props.getUsers()
    }

    renderUsers = () => {
        return this.props.users.map(user => <ProfileInfo key={user.id} user={user} />)
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
    return { users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => { dispatch(fetchUsers()) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile)