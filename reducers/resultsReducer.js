export const testResults = (state = null, action) => {
    if (action.type === 'RESULTS/GET_RESULTS_SUCCESS')
        return action.payload
    return state
}