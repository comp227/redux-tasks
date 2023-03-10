import { createSlice } from '@reduxjs/toolkit'
import taskService from '../services/tasks'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
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

export const { toggleImportanceOf, appendTask, setTasks } = taskSlice.actions

export const initializeTasks = () => {
    return async dispatch => {
        const tasks = await taskService.getAll()
        dispatch(setTasks(tasks))
    }
}

export const createTask = content => {
    return async dispatch => {
        const newTask = await taskService.createNew(content)
        dispatch(appendTask(newTask))
    }
}

export default taskSlice.reducer