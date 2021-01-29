export const showNavBar = (state) => dispatch => {
    if (state)
        dispatch({ type: 'NAVBAR/SHOW' })
    else
        dispatch({ type: 'NAVBAR/HIDE' })
}