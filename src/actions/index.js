export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

export const toggleLight = () => {
    return {
        type: 'lightTheme'
    }
}

export const toggleDark = () => {
    return {
        type: 'darkTheme'
    }
}