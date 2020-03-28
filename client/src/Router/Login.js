import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import SignIn from '../components/Login/Login'

function Login(props) {
    return (
        <div>
            {props.isAuthenticated ? <Redirect to='/' /> : <SignIn />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated 
    }
}

export default connect(mapStateToProps )(Login)
