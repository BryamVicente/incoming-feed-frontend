import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Signup extends React.Component {

    state = {
        name: "",
        username: "",
        email: "",
        interest1: "",
        interest2: "",
        interest3: "",
        password1: "",
        password2: ""
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const buttonStyles = {
            backgroundColor: "#f9d815",
            color: "#1c2331"
        }

        const labelStyles = {
            color: "white"
        }
        return (
            <>
                <br></br>
                <Form>
                    <Form.Field>
                        <label style={labelStyles}>Name</label>
                        <input type="text" placeholder="enter name..." name="name" value={this.state.name} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Username</label>
                        <input type="text" placeholder="enter username..." name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Interest 1</label>
                        <input type="text" placeholder="first interest..." name="interest1" value={this.state.interest1} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Interest 2</label>
                        <input type="text" placeholder="second interest..." name="interest2" value={this.state.interest2} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Interest 3</label>
                        <input type="text" placeholder="third interest" name="interest3" value={this.state.interest3} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Email</label>
                        <input type="text" placeholder="enter email..." name="email" value={this.state.email} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Password</label>
                        <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field>
                        <label style={labelStyles}>Password Confirmation</label>
                        <input type="password" placeholder="confirm password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Link to="/articles">
                        <Button style={buttonStyles}>
                            <p>Signup!</p>
                        </Button>
                    </Link>
                </Form>
            </>
        )
    }
}

export default Signup