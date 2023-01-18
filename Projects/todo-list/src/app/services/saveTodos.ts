import { ITaskObjectCollection } from "./Interfaces/objectTaskCollectionInterface"

export function saveTodo(collectionITaskObject :ITaskObjectCollection ) :void{
    
    let itemToSave :string = JSON.stringify(collectionITaskObject)

    sessionStorage.setItem("todoArray", itemToSave)

}

export function getTodos() :Promise<any>{

    const errorMessage = 'Ops, we had a problem in getTodos()'

    let getTodosPromise :Promise<any> = new Promise( (resolve, reject)=> {

        let sessionObjectString :string | null = sessionStorage.getItem("todoArray")
        let sessionObject
        
        if ( typeof sessionObjectString === 'string' && !(sessionObjectString === '')  ){
            sessionObject = JSON.parse(sessionObjectString)
            
            if( typeof sessionObject != 'object') reject( new Error(errorMessage) )


            resolve(sessionObject)

        } else  reject( new Error(errorMessage) )

    })

    return getTodosPromise

}