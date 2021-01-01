import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from '../Components/ProfileInfo'
// import { userLoggedIn } from '../redux/action'

class Profile extends Component {

   

    render() {
        console.log(this.props.currentUser)
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUser: () => { dispatch(userLoggedIn()) }
//     }
// }


export default connect(mapStateToProps)(Profile)