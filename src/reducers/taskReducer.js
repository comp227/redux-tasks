const initialState = [
    {
        content: 'remind myself that the reducer defines how the redux store works',
        important: true,
        id: 1,
    },
    {
        content: 'repeat the words: a redux store can contain any data',
        important: false,
        id: 2,
    },
]

const taskReducer = (state = initialState, action) => {
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

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

export const createTask = (content) => {
    return {
        type: 'NEW_TASK',
        payload: {
            content,
            important: false,
            id: generateId()
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: { id }
    }
}

export default taskReducer