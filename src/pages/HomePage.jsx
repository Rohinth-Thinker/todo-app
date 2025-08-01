import Header from "../components/Header";
import Title from "../components/homePage/Title";
import '../styles/homePage.css'
import Status from "../components/homePage/Status";
import NewTask from "../components/homePage/NewTask";
import TaskList from "../components/homePage/TaskList";
import { useState } from "react";
import NewTaskPage from "../components/homePage/newTaskPage/NewTaskPage";
import TodoList from "../datas/TodoList";



function HomePage() {

    const [ todoList, setTodoList ] = useState(TodoList);
    const [ switchPage, setSwitchPage ] = useState(true);

    function addTask(newTask) {
        setTodoList([...todoList, newTask])
    }

    return (
        <>
            <Header header="Hi, Machiii" switchPage={switchPage} setSwitchPage={setSwitchPage}/>

            <div className="home-page-main">
                <div className="home-page-sub">
                    
                    { switchPage ? 
                    <>
                        <Title title="Tasks" />
                        <Status todoList={todoList}/>
                        <NewTask setSwitchPage={setSwitchPage}/>
                        
                        <TaskList todoList={todoList} setTodoList={setTodoList} />
                    </>
                    : 
                    <>
                        <Title title="Add Task" />
                        <NewTaskPage addTask={addTask} setSwitchPage={setSwitchPage}/>
                    </>
                    
                    }
                </div>
            </div>
        </>
    )
}


export default HomePage;