import React, {useState} from 'react';
import Task from './Task';
import 'style.css';

const Todo = () => {
    const task = [
        {name: "CSS" , completed: true},
        {name: "JavaScript" , completed: true},
        {name: "Learn React" , completed: false},
        {name: "Learn mongoDB" , completed: false},
        {name: "Learn Node JS" , completed: false}
    ]


    const [todos, setTodos] = useState(task);

    const onTaskClick = (i) => {
        const addTask = [...todos];
        addTask[i].completed = !addTask[i].completed;
        setTodos(addTask);
     }


    return(
        <div className="container">
            <h2> Todo List App</h2>
            {todos.map((item, index) => (
                <div onClick={() => onTaskClick(index)}>
                    <div>{item.name}</div>
                    {item.completed ? '\u2718' : '\u2714'}
                    </div>
            ))}
              

        </div>
    )
}

export default Todo;