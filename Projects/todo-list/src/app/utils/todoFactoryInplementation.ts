import { ITask } from "../Interfaces/todoInterface";

export let inputTask: Array<ITask> | null = []

export function makeTodo(value :string) :void{
    inputTask?.push({ 
        text : value,
        key: inputTask.length + 1
    })
}

export function deleteAllItens() :void{
    inputTask = []
}