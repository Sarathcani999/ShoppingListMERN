import React , {useEffect} from 'react'
import AppNavbar from '../components/AppNavbar'
import List from '../components/List'
import {connect} from 'react-redux'
import {loadUser , fetchItems} from '../redux/index'

function HomePage(props) {  
  return (
        <div>

          {(props.isAuthenticated) === false ? (
            <div>
              <AppNavbar />
              <center>
                <h2>Not Authenticated...</h2>
              </center>              
            </div>
          ) : (props.isAuthenticated === null) ? (
            <div>
              <AppNavbar />
              <center>
                <h2>Loading...</h2>
              </center>
            </div>
          ) : (
            <div>
              <AppNavbar />
              <List />
            </div>
          )}

        </div>

    )
}


const mapStateToProps = (state) => ({
  isAuthenticated : state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser : () => dispatch(loadUser()) ,
    fetchItems : () => dispatch(fetchItems())
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(HomePage)
