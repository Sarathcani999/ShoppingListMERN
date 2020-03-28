import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import List from '../components/List'
import { Redirect } from 'react-router-dom'

function Dashboard(props) {
    return (
        <div>
            <AppNavbar />
            { (props.isAuthenticated === null) ? 
            (
                // User Loading 
                <div> 
                    <center>
                        <Spinner />    
                    </center>    
                </div>
                
            ) : 
            ((props.isAuthenticated === false) ? 
            (
                // User Not Auth go to Login Page
                <Redirect to="/login" />
            ) : 
            (
                // User Authenticated go to home
                <List />
            ))} 
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated
})


export default connect(mapStateToProps)(Dashboard)