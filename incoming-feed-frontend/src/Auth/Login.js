import React from 'react'
import { Button, Form } from 'semantic-ui-react'
// import { NavLink, Link } from 'react-router-dom'
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

    loginHandler = (e) => {
        e.preventDefault()
        this.props.login(this.state)

        this.setState({
            username: "",
            password: ""
        })

    }

    userLoggedIn = () =>{
        if (this.props.currentUser !== null){
            return this.props.history.push('/login')
            
        } else {
            return this.props.history.push('/articles')
        }
    }

    render(){
        return (

            <Form onSubmit={this.loginHandler} >
               
                <Form.Field>
                    <label>Username</label>
                    <input type="text" placeholder="enter username..." name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Button color="black">
                        <p>Login!</p>
                    </Button>
                     {this.userLoggedIn}
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { login: (userInfo) => dispatch(loginAction(userInfo))}
}


export default connect(null, mapDispatchToProps)(Login)