const taskReducer = (state = [], action) => {
    if (action.type === 'NEW_TASK') {
        return state.concat(action.payload)
    }

    return state
}

export default taskReducer