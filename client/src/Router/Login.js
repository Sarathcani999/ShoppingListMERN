import React , {useState} from 'react'
import AppNavbar from '../components/AppNavbar'
import {
    Container, Col, Form,
    FormGroup, Label, Input, Alert 
  } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser} from '../redux';
import { Redirect , Link } from 'react-router-dom'


function Login(props) {

    const [username, setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

    return (
        <div>
            {props.isAuthenticated ? <Redirect to='/' /> : (
            <div>
            <AppNavbar />
            <Container >
                <Col >
                    <h2>Sign In</h2>
                </Col>
                <Form className="form" action='/' method="GET">
                <Col>
                    <FormGroup>
                    <Label>Username</Label>
                    <Input
                        required
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    required
                        type="password"
                        value={password}
                        placeholder="********"
                        onChange={e => setPassword(e.target.value)}
                    />
                    </FormGroup>
                </Col>
                <Col>
                <Input type="button" onClick={() => props.loginUser({username , password})} value="Login" className="btn btn-primary"/>
                </Col>
                </Form>
                <Col >
                    <p>Not a member ? <Link to='/register'>Register</Link></p>
                </Col>
                <Col>

                    {props.errors.map(error => (
                        <Alert color="warning" isOpen={visible} toggle={onDismiss}>
                            {error}
                        </Alert>
                    ))}
                    
                </Col>
            </Container>
            </div>
            )}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated ,
        errors : state.error.msg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser : ({username , password}) => dispatch(loginUser({username , password}))        
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Login)
