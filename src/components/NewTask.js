import {useDispatch} from 'react-redux'
import {createTask} from '../reducers/taskReducer'

const NewTask = () => {
    const dispatch = useDispatch()

    const addTask = (event) => {
        event.preventDefault()
        const content = event.target.task.value
        event.target.task.value = ''
        dispatch(createTask(content))
    }

    return (
        <form onSubmit={addTask}>
            <input name="task"/>
            <button type="submit">add</button>
        </form>
    )
}

export default NewTask