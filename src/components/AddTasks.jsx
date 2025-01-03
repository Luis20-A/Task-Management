import { useState } from "react";
import Input from "./Input";

function AddTaks({ onAddTaskSubmit }){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                value={title}
                type="text"
                placeholder="Digite o título da tarefa"
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                value={description}
                type="text"
                placeholder="Digite a descrição da tarefa"
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {

                    if (!title.trim() || !description.trim()){
                        return alert("Preencha o titulo e a descrição!")
                    }

                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
        </div>
    )
};

export default AddTaks;