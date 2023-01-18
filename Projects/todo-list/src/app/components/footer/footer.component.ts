import { Component, OnInit } from '@angular/core';
import { inputTask, listCheckedTask, makeTodo, deleteAllItens, sendToDBTodo, setTodos } from '../../services/todoFactoryInplementation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  
  public inputTask :any = null
  public listCheckedTask :any = null
  public inputTaskElement :HTMLInputElement | null = null
  
  ngDoCheck(): void {
    this.inputTask = inputTask
    this.listCheckedTask = listCheckedTask
  }

  ngOnInit(): void {
    this.inputTaskElement = document.querySelector('#inputTask') as HTMLInputElement | null 
    
    try {
      setTodos()
    } catch (error) {
      console.log('hmm');
    }


    this.inputTaskElement?.addEventListener('keydown', (event)=> {
      
      if(event.key === 'Enter' && this.inputTaskElement?.value != undefined ){
        
        if(this.inputTaskElement?.value === '') return
        
        makeTodo(this.inputTaskElement?.value as string)
        sendToDBTodo()

        this.inputTaskElement.value = ''
      };
      
    })

  }

  public deleteAll() :void{

    if ( !window.confirm('deseja mesmo deletar tudo?') ) return
     
    deleteAllItens();
    sessionStorage.setItem("todoArray", '' )
  }

}
