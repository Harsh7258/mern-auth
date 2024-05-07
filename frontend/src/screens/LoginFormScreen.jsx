import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginFormScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit')
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