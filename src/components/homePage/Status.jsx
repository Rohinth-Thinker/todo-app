

function Status({todoList}) {

    const completedTask = todoList.filter((todo) => todo.isCompleted)

    return (
        <div className="container-status">
            <span className="text-status">
                <span className="status-completed-task">{completedTask.length}</span>
                 / {todoList.length} tasks completed
            </span>
        </div>
    )
}


export default Status;