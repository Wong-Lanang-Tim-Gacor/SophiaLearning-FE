const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'AUTH':
            return {...state, 
                isLoading: action.payload.isLoading,
                auth: action.payload.auth, 
                token: action.payload.token}
        case 'DEAUTH':
            return {...state, 
                isLoading: action.payload.isLoading,
                auth: null, 
                token: null}
        default:
            return state
    }
}

export default AuthReducer