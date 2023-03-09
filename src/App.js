import {createStore} from "redux";
import taskReducer from "./reducers/taskReducer";

const store = createStore(taskReducer)

store.dispatch({
    type: 'NEW_TASK',
    payload: {
        content: 'learn more about how the app state is in redux store',
        important: true,
        id: 1
    }
})

store.dispatch({
    type: 'NEW_TASK',
    payload: {
        content: 'understand more fully how state changes are made with actions',
        important: false,
        id: 2
    }
})

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

const createTask = (content) => {
    return {
        type: 'NEW_TASK',
        payload: {
            content,
            important: false,
            id: generateId()
        }
    }
}

const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: { id }
    }
}

const App = () => {
    const addTask = (event) => {
        event.preventDefault()
        const content = event.target.task.value
        event.target.task.value = ''
        store.dispatch(createTask(content))
    }

    const toggleImportance = (id) => {
        store.dispatch(toggleImportanceOf(id))
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <input name="task" />
                <button type="submit">add</button>
            </form>
            <ul>
                {store.getState().map(task=>
                    <li
                        key={task.id}
                        onClick={() => toggleImportance(task.id)}
                    >
                        {task.content}<strong>{task.important ? ' - important' : ''}</strong>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App;