import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class ProfileInfo extends Component {
    render() {
        return (
            <>           
                <img className="profile-pic" src={this.props.userInterest.user.image}/>

                <div>
                    <h3> Name: {this.props.userInterest.user.name}</h3>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default ProfileInfo
