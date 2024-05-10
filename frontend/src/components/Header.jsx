import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/userApiSlice.js';
import { logout } from "../slices/authSlice.js"
import { toast } from "react-toastify"

const Header = () => {

  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
      toast.warning('Logged out')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>MERN-Auth.</Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              { userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                    <CgProfile /> Account
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={ logoutHandler }>
                  <AiOutlineLogout /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to='/login'>
                      <Nav.Link > <FaSignInAlt /> Sign In </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/signup'>
                      <Nav.Link> <FaSignOutAlt /> Sign Up </Nav.Link>
                  </LinkContainer>
                </>
              ) }
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;