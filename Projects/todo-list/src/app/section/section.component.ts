import { Component, DoCheck } from '@angular/core';
import { inputTask } from '../utils/todoFactoryInplementation';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements DoCheck {
  
  public listTodo :any = null
  
  ngDoCheck(): void {
    this.listTodo = inputTask
  }

  deleteItem(index :number) :void{
    this.listTodo?.splice(index, 1)
  }
  markAsDone(index :number) :void{
    let pItemElement = document.querySelector(`#list-${index}`)
    let pItemElementStyle = pItemElement?.getAttribute('style')

    if(pItemElementStyle === null || pItemElementStyle === "text-decoration-line: unset" ){
      
      pItemElement?.setAttribute('style', "text-decoration-line: line-through")
      
    }else{
      
      pItemElement?.setAttribute('style', "text-decoration-line: unset")

    }

  }
}
