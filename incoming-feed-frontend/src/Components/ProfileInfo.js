import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoggedIn } from '../redux/action'
import { Button, Image, Card } from 'semantic-ui-react'

class ProfileInfo extends Component {

     componentDidMount = () => {
        this.props.getUser()
    }

    renderInterests = () => {
        return this.props.currentUser.interests.map(interest => {
            console.log(interest)
            return(
                <div className="list-centered">
                    <ul >
                        <li>{interest.topic}</li>
                    </ul>
                </div>
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
                     <Card
                        image={this.props.currentUser.image}
                        header={this.props.currentUser.username}
                        meta={this.props.currentUser.name}
                        description={this.renderInterests()}
                    />
                        {/* <Image size='large' className="profile-pic" centered circular alt={this.props.currentUser.name} src={this.props.currentUser.image}/>

                        <div className= 'profile-info-content' >
                            <h3> Username: {this.props.currentUser.username}</h3>
                            <h3>Name: {this.props.currentUser.name}</h3>
                            <h3> Interests:</h3>
                                {this.renderInterests()}
                        </div> */}

                    </>
                }
            </>
        )

//         <Card
//     image='/images/avatar/large/elliot.jpg'
//     header='Elliot Baker'
//     meta='Friend'
//     description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
//     extra={extra}
//   />
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
