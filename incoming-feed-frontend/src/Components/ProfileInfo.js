import React, { Component } from 'react'


class ProfileInfo extends Component {
    renderInterests = () => {
        return this.props.user.interests.map(interest => {
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
                <img className="profile-pic" alt={this.props.user.name} src={this.props.user.image}/>

                <div>
                    <h3> Name: {this.props.user.name}</h3>
                </div>

                <ul>
                    {this.renderInterests()}
                </ul>
            </>
        )
    }
}

export default ProfileInfo
