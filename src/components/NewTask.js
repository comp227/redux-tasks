import {useDispatch} from 'react-redux'
import {createTask} from '../reducers/taskReducer'
import taskService from '../services/tasks'

const NewTask = () => {
    const dispatch = useDispatch()

    const addTask = async (event) => {
        event.preventDefault()
        const content = event.target.task.value
        event.target.task.value = ''
        const newTask = await taskService.createNew(content)
        dispatch(createTask(newTask))
    }

    return (
        <form onSubmit={addTask}>
            <input name="task"/>
            <button type="submit">add</button>
        </form>
    )
}

export default NewTask