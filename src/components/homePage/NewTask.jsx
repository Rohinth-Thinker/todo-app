

function NewTask({setSwitchPage}) {
    
    return (
        <div>
            <button className="new-task-button pt" onClick={() => setSwitchPage(false)}> + New Task</button>
        </div>
    )
}


export default NewTask;