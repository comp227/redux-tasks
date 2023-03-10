import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import VisibilityFilter from "./components/VisibilityFilter";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import taskService from "./services/tasks";
import {setTasks} from "./reducers/taskReducer";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        taskService.getAll().then(tasks =>
            dispatch(setTasks(tasks))
        )
    }, [dispatch])
    return (
        <div>
            <NewTask/>
            <VisibilityFilter/>
            <Tasks/>
        </div>
    )
}

export default App