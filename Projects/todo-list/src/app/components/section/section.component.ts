import { Component, DoCheck } from '@angular/core';
import { inputTask, listCheckedTask, makeCheckedTodo, makeTodo, deleteDbItem } from '../../services/todoFactoryInplementation';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements DoCheck {
  
  public listTodo :any = null
  public checkedTodo :any = null
  
  ngDoCheck(): void {
    this.listTodo = inputTask
    this.checkedTodo = listCheckedTask
  }

  deleteItem(index :number, caseLi :string) :void{
    deleteDbItem(caseLi, index)
  }
  markAsDone(index :number, caseLi :string) :void{

    let pItemElement :HTMLParagraphElement

    if(caseLi === 'todo'){
 
      pItemElement = document.querySelector(`#list-${index}`) as HTMLParagraphElement
      makeCheckedTodo(pItemElement?.innerText, index)

    } 
    else if (caseLi === 'todoChecked'){

      pItemElement = document.querySelector(`#listChecked-${index}`) as HTMLParagraphElement
      makeTodo(pItemElement?.innerText, index)
    
    } else{
      console.error('Invalid Todo')
    }


  }

}
