import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/userApiSlice.js'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice.js';
import { toast } from 'react-toastify'

const Hero = ({ isLoggedIn, isLoggedOut }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [logoutApiCall] = useLogoutMutation()
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
      toast.warning('Logged out')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication system</h1>
          <p className='text-center mb-4'>
            This is a MERN authentication system that stores a JWT in
            an HTTP-Only cookie and Google OAuth using react-oauth/google library. It also uses Redux Toolkit and the React Bootstrap library
          </p>
          <div className='d-flex'>
            <LinkContainer to='/login'>
                <Button variant='primary' className='me-4' disabled={isLoggedIn}>
                      Sign In
                </Button>
            </LinkContainer>
            <LinkContainer to='/signup' className='me-4'>
                <Button variant='secondary' disabled={isLoggedIn}>
                     Sign Up
                </Button>
            </LinkContainer>
            <LinkContainer to='/logout'>
                <Button variant='danger' onClick={logoutHandler} disabled={isLoggedOut} >
                     Logout
                </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;