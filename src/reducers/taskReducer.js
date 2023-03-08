const taskReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_TASK':
            return [...state, action.payload]
        case 'TOGGLE_IMPORTANCE': {
            const id = action.payload.id
            const taskToChange = state.find(t => t.id === id)
            const changedTask = {
                ...taskToChange,
                important: !taskToChange.important
            }
            return state.map(task =>
                task.id !== id ? task : changedTask
            )
        }
        default:
            return state
    }
}

export default taskReducer