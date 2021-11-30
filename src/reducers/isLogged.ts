const loggedReducer = (state = false,action:any) => {
    switch (action.type) {
        case 'signIn':
            return true;
        default:
            return false;
    }
}

export default loggedReducer;