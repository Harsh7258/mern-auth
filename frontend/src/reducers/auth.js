const AUTH = 'AUTH'
// const LOGOUT = 'LOGOUT'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type){
        case AUTH: 
          localStorage.setItem('userInfo', JSON.stringify({ ...action?.data }))
        //   console.log(state)
            return { ...state, authData: action?.data  };
        default:
            return state;
    }
}

export default authReducer