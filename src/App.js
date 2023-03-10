import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import VisibilityFilter from "./components/VisibilityFilter";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {initializeTasks} from "./reducers/taskReducer";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeTasks())
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