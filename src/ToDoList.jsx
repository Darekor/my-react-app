import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(["Prepare a dinner", "Go for a run", "Make a doctor appointment"]);
    const [currentTask, setTask] = useState("");

    function handleAddTask(){
        if(currentTask.trim()!=="")
        {
            setTasks(t=>[...t, currentTask]);
            setTask("");
        }
    }

    function handleRemoveTask(index){
        setTasks(t=>t.filter((_,i)=>i!==index))
    }

    function handleMoveTaskUp(index){
        if (index>0){
            const uTasks = [...tasks];
            [uTasks[index],uTasks[index-1]] = [uTasks[index-1],uTasks[index]];
            setTasks(uTasks);
        }
    }

    function handleMoveTaskDown(index){
        if (index<tasks.length-1){
                const uTasks = [...tasks];
                [uTasks[index],uTasks[index+1]] = [uTasks[index+1],uTasks[index]]
                setTasks(uTasks);
            }
    }
    
    function handleChangeTask(event){
        setTask(t=>event.target.value);
    }

    return(
        <div className="task-container">
            <h1 className="task-header">To-Do List</h1>
            <input type="text" id="input-field" onChange={handleChangeTask} value={currentTask} placeholder="Enter a task..."/>
            <button className="add-button" onClick={handleAddTask}>Add</button>
            <ul className="task-list">
                {tasks.map((task,index)=>
                    <li key={index} className="task-item">
                        <span className="task-text">{task}</span>
                        <button className="delete-button" onClick={() => handleRemoveTask(index)}>Delete</button>
                        <button className="move-button" onClick={()=> handleMoveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={()=> handleMoveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoList