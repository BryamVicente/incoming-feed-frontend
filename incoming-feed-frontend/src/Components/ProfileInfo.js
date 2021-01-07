import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoggedIn } from '../redux/action'
import { Image, Card } from 'semantic-ui-react'

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

                        <Card centered>
                            <Image src={this.props.currentUser.image} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Username: {this.props.currentUser.username}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Name: {this.props.currentUser.name}</span>
                            </Card.Meta>
                            <Card.Description>
                                Interersts: {this.renderInterests()}
                            </Card.Description>
                            </Card.Content>
                        </Card>
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
