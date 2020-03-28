import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Register from '../components/Register/Register';

function SignUp(props) {

    return (
        <div>
            {(props.isAuthenticated === true)? (<Redirect to='/' />) : (<Register />)}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.isAuthenticated 
    }
}

export default connect(mapStateToProps)(SignUp) 
