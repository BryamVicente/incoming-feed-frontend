import React from 'react'
import { Button, Form, Grid, Divider, Segment } from 'semantic-ui-react'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction } from '../redux/action'


class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    /* This function is responsible for making sure the user signs in and once signed in, 
    the user should be redirected to the "home page"
    */
    loginHandler = (e) => {
        e.preventDefault()
        this.props.login(this.state)
       
        this.setState({
            username: "",
            password: ""
        })
        if (!localStorage.getItem('token')) {
           
            return this.props.history.push('/articles')
            
        } else {
            return (this.props.history.push('/login'))
        }
    }

    // Redirects to the signUp page
    takeMeToSignup = () => {
        return this.props.history.push('/signup')
    }

    render(){
        const buttonStyles = {
            backgroundColor: "#f9d815",
            color: "#1c2331"
        }
        return (
            <>
                <br></br>
                <div className="form-div">
                    <Segment placeholder>
                        <Grid columns={2} relaxed='very' stackable>
                            <Grid.Column>
                                <Form style={{"color":"white"}}onSubmit={this.loginHandler} className="the-form">
                                    <Form.Field  inline className="login-form-1">
                                        <label>Username</label>
                                        <input type="text" placeholder="enter username..." name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                                    </Form.Field>

                                    <Form.Field inline className="login-form-2">
                                        <label>Password</label>
                                        <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                                    </Form.Field>

                                    <Button style={buttonStyles}>
                                        <p>Login!</p>
                                    </Button>
                                </Form> 
                            </Grid.Column>

                            <Grid.Column verticalAlign='middle'>
                                <Button onClick={this.takeMeToSignup} content='Sign up' icon='signup' size='big' />
                            </Grid.Column>
                        </Grid>
                        <Divider vertical>Or</Divider>
                    </Segment>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { login: (userInfo) => dispatch(loginAction(userInfo))}
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))




