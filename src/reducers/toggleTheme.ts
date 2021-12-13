const themeReducer = (state = true,action:any) => {
    switch (action.type) {
        case 'lightTheme':
            return state = false;
            case 'darkTheme':
                return state = true;
        default:
            return true;
    }
}

export default themeReducer;