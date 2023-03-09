import {createTask, toggleImportanceOf} from './reducers/taskReducer'
import {useSelector, useDispatch} from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state)

    const addTask = (event) => {
        event.preventDefault()
        const content = event.target.task.value
        event.target.task.value = ''
        dispatch(createTask(content))
    }

    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <input name="task"/>
                <button type="submit">add</button>
            </form>
            <ul>
                {tasks.map(task =>
                    <li
                        key={task.id}
                        onClick={() => toggleImportance(task.id)}
                    >
                        {task.content} <strong>{task.important ? 'important' : ''}</strong>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App