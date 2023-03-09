import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/taskReducer'

const Task = ({ task, handleClick }) => {
    return(
        <li onClick={handleClick}>
            {task.content}
            <strong> {task.important ? '- important' : ''}</strong>
        </li>
    )
}

const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    return(
        <ul>
            {tasks.map(task =>
                <Task
                    key={task.id}
                    task={task}
                    handleClick={() =>
                        dispatch(toggleImportanceOf(task.id))
                    }
                />
            )}
        </ul>
    )
}

export default Tasks