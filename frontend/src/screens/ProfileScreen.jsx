import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation, useDeleteUserMutation } from '../slices/userApiSlice';
import { logout, setCredentials } from '../slices/authSlice';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [updateProfile, { isLoading }] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation()

    useEffect(() => {
        setName(userInfo.userInfo?.name || userInfo.name);
        setEmail(userInfo.userInfo?.email || userInfo.email);
    }, [userInfo.userInfo?.name, userInfo.userInfo?.email, userInfo.email, userInfo.name]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          toast.error('Passwords do not match');
        } else {
          try {
            const res = await updateProfile({
              _id: userInfo._id,
              name,
              email,
              password,
            }).unwrap();
            dispatch(setCredentials({ ...res }));
            toast.success('Profile updated successfully');
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
        }
      };

      const deleteUserHandler = async(e) => {
        e.preventDefault();
        try {
           await deleteUser().unwrap() //Unwraps a mutation call to provide the raw response/error
           dispatch(logout())
          navigate('/signup')
          toast.dark('User deleted')
          // console.log('delete', res)
        } catch (err) {
          console.log(err)
          toast.error(err?.data?.message || err.error)
        }
      }

  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter user name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        {userInfo.userInfo ? <>
          <Button type='submit' variant='primary' className='mt-3 me-4' disabled>
              Update
          </Button>
          <Button type='submit' variant='danger' className='mt-3' disabled>
              Delete account
          </Button>
        </> : <>
            <Button type='submit' variant='primary' className='mt-3 me-4'>
              Update
            </Button>
            <Button type='submit' variant='danger' className='mt-3' onClick={deleteUserHandler}>
              Delete account
            </Button>
        </>
        }
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen