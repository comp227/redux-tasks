import { createSlice } from '@reduxjs/toolkit'

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
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

            console.log(JSON.parse(JSON.stringify(state)))

            return state.map(task =>
                task.id !== id ? task : changedTask
            )
        },
        appendTask(state, action) {
            state.push(action.payload)
        }
    },
})

export const { createTask, toggleImportanceOf, appendTask } = taskSlice.actions

export default taskSlice.reducer