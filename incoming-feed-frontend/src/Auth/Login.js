import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'


class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (

            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input type="text" placeholder="enter username..." name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                </Form.Field>
                <Link to="/articles">
                    <Button color="black">
                        <p>Login!</p>
                    </Button>
                </Link>

                {/* <NavLink to="/articles">Log in</NavLink> */}
                {/* <Button color="black" type='submit'>Log In</Button>  */}
            </Form>
            
        )
    }
}

export default Login