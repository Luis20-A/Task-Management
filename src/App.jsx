import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import {v4} from "uuid";
import Title from "./components/Title";


function App(){

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    
    const fetchTasks = async () => {

      //Chamar API

      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
      {
        method: "GET"
      });

      //Pegar os dados

      const data = await response.json()

      //Armazenar os dados no states
      setTasks(data)
    };

    //Para usar como uma API do banco de dados
    //fetchTasks();

  }, [])

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted};
      }

      return task;
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick (taskId){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      iscompleted: false,
    }

    setTasks([...tasks, newTask])
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de tarefas
        </Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App;