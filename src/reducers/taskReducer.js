import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        createTask(state, action) {
            state.push(action.payload)
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
        },
        setTasks(state, action) {
            return action.payload
        }
    },
})

export const { createTask, toggleImportanceOf, appendTask, setTasks } = taskSlice.actions

export default taskSlice.reducer