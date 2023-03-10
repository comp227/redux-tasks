import { createSlice } from '@reduxjs/toolkit'

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

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask(state, action) {
            const content = action.payload

            state.push({
                content,
                important: false,
                id: generateId(),
            })
        },
        toggleImportanceOf(state, action) {
            const id = action.payload

            const taskToChange = state.find(t => t.id === id)

            const changedTask = {
                ...taskToChange,
                important: !taskToChange.important
            }

            return state.map(task =>
                task.id !== id ? task : changedTask
            )
        }
    },
})

export const { createTask, toggleImportanceOf } = taskSlice.actions

export default taskSlice.reducer