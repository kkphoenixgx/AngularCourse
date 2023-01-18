import { ITask } from "./Interfaces/todoInterface";
import { getTodos, saveTodo } from "./saveTodos";

export let inputTask: Array<ITask> | null = []
export let listCheckedTask: Array<ITask> | null = []

export function makeTodo(value :string, checkedTodoIndex? :number) :void{
    
    inputTask?.push({ 
        text : value,
        key: inputTask.length + 1
    })

    if(typeof checkedTodoIndex != 'undefined' && checkedTodoIndex >= 0 ){
        listCheckedTask?.splice(checkedTodoIndex, 1)
    }
    
    sendToDBTodo()
}
export function makeCheckedTodo(value :string, todoIndex :number) :void{
    inputTask?.splice(todoIndex, 1)
    
    listCheckedTask?.push({ 
        text : value,
        key: listCheckedTask.length + 1
    })

    sendToDBTodo()

}

export function deleteAllItens() :void{
    inputTask = []
    listCheckedTask = []
}
export function deleteDbItem(taskName :string, index :number){
    if(taskName === 'todo') inputTask?.splice(index, 1)
    if (taskName === 'todoChecked') listCheckedTask?.splice(index, 1)
    
    sendToDBTodo()
}

export function sendToDBTodo(){

    if(!inputTask || !listCheckedTask) return

    let ITaskObjectCollection = {
        'x': inputTask as Array<ITask>,
        'y': listCheckedTask as Array<ITask>
    }

    saveTodo(ITaskObjectCollection)

}

export function setTodos() :void{
    
    getTodos()
      .then( sessionObject => {
        inputTask = sessionObject.x
        listCheckedTask = sessionObject.y
      
      })
      .catch(Error => {
        console.warn(`Nothing into DB ( ﾉ ﾟｰﾟ)ﾉ`)
      })
}
