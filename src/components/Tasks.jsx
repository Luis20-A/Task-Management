import { ChevronRightIcon, Trash2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

    const navigate = useNavigate();

    function onSeeDetailsList(task){
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <h3
            className="text-2xl text-slate-600 font-bold text-center">
                Tarefas
            </h3>
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 w-full text-white text-left p-2 rounded-md
                    ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                </button>
                <Button
                    onClick={() => onSeeDetailsList(task)}
                    >
                    <ChevronRightIcon />
                </Button>
                <button
                    onClick={() => onDeleteTaskClick(task.id)}
                    className="bg-slate-400  p-2 rounded-md text-white">
                    <Trash2Icon />
                </button>
            </li>
        ))}
        </ul>
    );
}
export default Tasks;