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
            <div className="form-div">
                <h3>Login</h3>
                <Form style={{"color":"white"}}onSubmit={this.loginHandler} className="the-form"  >
                {/* {} */}
                    <Form.Field  inline className="login-form-1">
                        <label>Username</label>
                        <input type="text" placeholder="enter username..." name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Form.Field inline className="login-form-2">
                        <label>Password</label>
                        <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                    </Form.Field>

                    <Button color="black">
                            <p>Login!</p>
                    </Button>
                </Form>

            </div>
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



{/* <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment> */}