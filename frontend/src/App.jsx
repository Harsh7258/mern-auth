import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

function App() {
  const CLIENT_ID = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Header/>
      <ToastContainer />
      <Container className="my-2">
         <Outlet />
      </Container>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
