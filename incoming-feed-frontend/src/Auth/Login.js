import React from 'react'
import { Button, Form } from 'semantic-ui-react'
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

    render(){
        console.log(this.props.currentUser, localStorage.getItem('token'))
        return (

            <Form onSubmit={this.loginHandler} >
               {/* {} */}
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
            </Form>
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