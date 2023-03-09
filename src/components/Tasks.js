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
    const tasks = useSelector(({filter, tasks}) => {
        if ( filter === 'ALL' ) {
            return tasks
        }
        return filter  === 'IMPORTANT'
            ? tasks.filter(task => task.important)
            : tasks.filter(task => !task.important)
    })

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