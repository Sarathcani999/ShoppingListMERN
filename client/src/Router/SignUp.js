import React , {useState} from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input, Alert  
  } from 'reactstrap';
import AppNavbar from '../components/AppNavbar';
import { createUser } from '../redux/index';
import { connect } from 'react-redux'
import { Link , Redirect } from 'react-router-dom';

function SignUp(props) {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password , setPassword] = useState('')
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return (
        <div>
            {props.isAuthenticated ? <Redirect to='/' /> : <div></div>}
            <AppNavbar />
            <Container >            
                <Col>
                    <h2>Register</h2>
                </Col>
                <Form className="form" action='/' method="GET" >
                <Col>
                    <FormGroup>
                    <Label>Name</Label>
                    <Input
                        required
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    </FormGroup>
                </Col>
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
                    <Input type="button" onClick={e => {
                        return props.createUser({
                            username , name , password
                        })    
                    }} value="Sign Up" className="btn btn-primary"/>
                </Col>
                </Form>
                <Col >
                    <p>Already a member ? <Link to='/login'>Sign In</Link></p>
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
        createUser : (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(SignUp) 
