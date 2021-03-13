export const changeSlide = (index) => dispatch => {
    dispatch({type: 'PROFILE_CAROUSEL/CHANGE_SLIDE', payload: {index:index }})
}
