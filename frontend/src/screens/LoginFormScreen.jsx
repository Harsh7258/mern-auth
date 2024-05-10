import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader.jsx'
import { toast } from 'react-toastify';

const LoginFormScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)
    useEffect(() => {
      if(userInfo){
        navigate('/');
      }
    },[navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password }).unwrap() //Unwraps a mutation call to provide the raw response/error
          dispatch(setCredentials({ ...res }));
          navigate('/')
          toast.dark('Logged in!')
        } catch (err) {
          toast.error(err?.data?.message || err.error)
        }
    }
  return (
    <>
      <FormContainer>
        <h2>Sign In</h2>
        
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email'
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            {isLoading && <Loader />}

            <Button type='submit' varient='primary' className='mt-3'>Sign In</Button>

            <Row className='py-3'>
                <Col>
                    New User? <Link to='/signup'>Sign Up</Link>
                </Col>
            </Row>
        </Form>
      </FormContainer>
    </>
  )
}

export default LoginFormScreen