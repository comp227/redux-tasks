const taskReducer = (state = [], action) => {
    if (action.type === 'NEW_TASK') {
        state.push(action.payload)
        return state
    }

    return state
}

export default taskReducer