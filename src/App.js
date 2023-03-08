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

const App = () => {
    return(
        <div>
            <ul>
                {store.getState().map(task=>
                    <li key={task.id}>
                        {task.content}<strong>{task.important ? ' - important' : ''}</strong>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default App;