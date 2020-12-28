import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'


class Signup extends React.Component {

    state = {
        name: "",
        username: "",
        email: "",
        password1: "",
        password2: ""
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (

            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input type="text" placeholder="enter name..." name="name" value={this.state.name} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Form.Field>
                    <label>Username</label>
                    <input type="text" placeholder="enter username..." name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <input type="text" placeholder="enter email..." name="email" value={this.state.email} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                </Form.Field>

                <Form.Field>
                    <label>Password Confirmation</label>
                    <input type="password" placeholder="confirm password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                </Form.Field>
                <Link to="/articles">
                    <Button color="black">
                        <p>Signup!</p>
                    </Button>
                </Link>

            </Form>
            
        )
    }
}

export default Signup