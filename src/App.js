import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";

const App = () => {
    const filterSelected = (value) => {
        console.log(value)
    }

    return (
        <div>
            <NewTask/>
            <div>
                <input type="radio" name="filter"
                       onChange={() => filterSelected('ALL')}/>all
                <input type="radio" name="filter"
                       onChange={() => filterSelected('IMPORTANT')}/>important
                <input type="radio" name="filter"
                       onChange={() => filterSelected('UNIMPORTANT')}/>unimportant
            </div>
            <Tasks/>
        </div>
    )
}

export default App