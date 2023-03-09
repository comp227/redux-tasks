import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import VisibilityFilter from "./components/VisibilityFilter";

const App = () => {
    return (
        <div>
            <NewTask/>
            <VisibilityFilter/>
            <Tasks/>
        </div>
    )
}

export default App