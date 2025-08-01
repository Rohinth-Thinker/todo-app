import toast from "react-hot-toast";

function TaskList({todoList, setTodoList}) {

    function handleDelete(id) {
        const list = todoList.filter((todo) => todo.id !== id);
        setTodoList(list);
        return toast.success("DELETED");
    }

    function handleCompletedTask(id) {
        const updateTodo = todoList.map((todo) => {
            if (todo.id === id) {
                return {...todo, isCompleted : !(todo.isCompleted)}
            }
            return todo;
        })

        setTodoList(updateTodo);
        
    }

    if (todoList.length === 0) return <NoTask />

    return (
        <div className="container-tasks">
            {todoList.map((todo) => <Task todo={todo} handleDelete={handleDelete}
                handleCompletedTask={handleCompletedTask} key={todo.id} />)}

        </div>
    )
}


export default TaskList;


function Task({todo, handleDelete, handleCompletedTask}) {

    function calculateDate(deadline) {
        const date = new Date(deadline);
        const deadlineDate = date.getDate();
        const deadlineMonth = date.toLocaleDateString('default', {month : 'short'});
        const deadlineYear = date.getFullYear();

        return `${deadlineDate + '-' + deadlineMonth + '-' + deadlineYear}`;
    }

    return (
        <>
            <div className="task-main-container">
                <div className="task-container">

                    <div className="task-deadline">

                    {todo.deadline ? 
                    <span className="text-deadline-date">{calculateDate(todo.deadline)}</span>
                    : '' }

                    </div>

                    <div className={"task " + (todo.isCompleted ? 'completed-task' : '')}>
                        <div className={"task-checkbox " + (todo.isCompleted ? 'completed-checkbox' : '')}
                            onClick={() => handleCompletedTask(todo.id)}></div>
                        <div className="task-details">

                            <span>{todo.title}</span>
                            { todo.description ? 
                                <div className="task-description">{todo.description}</div>
                            : ''}
                            
                        </div>
                    </div>
                </div> 

                <div className="delete-icon-main-container">
                        <button className="delete-icon-button pt" onClick={() => handleDelete(todo.id)}>
                            <img className="delete-icon" src="trash_icon.png" />
                        </button>
                </div>           
                
            </div>
        </>
    )
}

function NoTask() {

    return (
        <>
            <div className="main-container-no-task">
                <div className="sub-container-no-task">
                    <span className="t">NO TASKS YET !</span>
                </div>
            </div>
        </>
    )
}