import React , { useState} from 'react'
import { logoutUser } from '../redux/index'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
  } from 'reactstrap'
import { connect } from 'react-redux'

function AppNavbar(props) {
    let [isOpen , setIsOpen] = useState(false)
    return (
        <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Boiler Plate</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {/* <NavItem> 
                            <NavLink href="/register" >
                                Register
                            </NavLink>
                        </NavItem>                                
                        <NavItem> 
                            <NavLink href="/login" >
                                Login
                            </NavLink>
                        </NavItem>                                
                        <NavItem> 
                            <NavLink href="/" >
                                Home
                            </NavLink>
                        </NavItem>                                
                        <NavItem>  
                            <NavLink href="/about" >
                                About
                            </NavLink>
                        </NavItem> */}



                        <NavItem>
                            <NavLink href="https://github.com/Sarathcani999/ShoppingListMERN" >
                                Repository
                            </NavLink>
                        </NavItem>

                        {(props.isAuthenticated === true) ? (
                        <NavItem>
                            {/* <NavLink onClick={() => props.logoutUser()}>
                                Logout
                            </NavLink> */}
                            <Button onClick = {() => props.logoutUser() } size="sm"> Logout </Button>
                        </NavItem>
                        ) :
                        <div></div>
                        }
                        
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.isAuthenticated
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         logoutUser : () => dispatch(logoutUser())
//     }
// }

export default connect(mapStateToProps , { logoutUser })(AppNavbar)