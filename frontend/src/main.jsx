import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider } from "react-router-dom"
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginFormScreen from './screens/LoginFormScreen.jsx'
import SignupFormScreen from './screens/SignupFormScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginFormScreen />} />
      <Route path='/signup' element={<SignupFormScreen />} />
      {/* Private routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={ <ProfileScreen /> }/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider index={true} path="/" router={router}/>
    </React.StrictMode>
  </Provider>
)
