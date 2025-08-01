import { useState } from "react";
import { addError, removeError } from "../../error/inputError";

let id = 3;
function NewTaskPage({addTask, setSwitchPage}) {
    const [ newTask, setNewTask ] = useState({
        title : '',
        description : '',
        deadline : '',
    })

    const [ showError, setShowError ] = useState({
        title : '',
        deadline : '',
    });

    function setError(errorMessage) {
        setShowError({...showError, ...errorMessage});
    }

    function handleSubmit(e) {
        e.preventDefault();

        const result = validNewTask(newTask);

        if (result !== true) {
            addError(e.target[result], result, setError);
            return false;
        }

        id++;
        addTask({id, ...newTask, isCompleted : false});
        setSwitchPage(true);
    }

    // Rename to 'validateNewTask'
    // Function names should always be a verb
    function validNewTask({title, description, deadline}) {
        // Use .trim() instead of replaceAll
        if (!title || !title.replaceAll(" ", "")) {
            return 'title';
        }

        if (!description.replaceAll(" ", "")) {
            // Don't update state directly
            newTask.description = '';
        }            

        if (deadline) {
            // Whenever you do date operations, never do calculations by yourself
            // Use a library like dayjs or momentjs
            const today = new Date().toISOString().split("T")[0];
            const date = new Date(deadline).toISOString().split("T")[0];

            // It can be simply done like, "date < today"
            if (!(date >= today)) {
                return 'date';
            }
        }

        return true;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="field-container">
                    <label className="input-label">Title</label>
                    <input name="title" type="text" className="input-field" placeholder="Title"
                        value={newTask.title} onChange={(e) => {
                            removeError(e.target, setError);
                            setNewTask({...newTask, title : e.target.value})
                            }} />
                    <div className="error-message">{showError.title}</div>
                </div>

                <div className="field-container">
                    <label className="input-label">Description</label>
                    <input type="text" className="input-field" placeholder="Description"
                        value={newTask.description} onChange={(e) => setNewTask({...newTask, description : e.target.value})} />
                </div>

                <div className="field-container">
                    <label className="input-label">Deadline</label>
                    <input name="date" type="date" className="input-field" 
                        value={newTask.deadline} onChange={(e) => {
                            removeError(e.target, setError);
                            setNewTask({...newTask, deadline : e.target.value})
                            }} />
                    <div className="error-message">{showError.deadline}</div>
                </div>

                <div className="container-add-task">
                    <button type="submit" className="new-task-button pt"> + ADD TASK</button>
                </div>
            </form>
        </>
    )
}


export default NewTaskPage;