import { Component, OnInit } from '@angular/core';
import { inputTask, makeTodo, deleteAllItens } from '../utils/todoFactoryInplementation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  
  public inputTask :any = null
  
  ngDoCheck(): void {
    this.inputTask = inputTask
  }

  
  public inputTaskElement :HTMLInputElement | null = null

  ngOnInit(): void {
    
    this.inputTaskElement = document.querySelector('#inputTask') as HTMLInputElement | null 
    this.inputTaskElement?.addEventListener('keydown', (event)=> {
      
      if(event.key === 'Enter' && this.inputTaskElement?.value != undefined ){
        
        if(this.inputTaskElement?.value === '') return
        
        makeTodo(this.inputTaskElement?.value as string)
        this.inputTaskElement.value = ''
      };
      
    })

  }  

  public deleteAll() :void{
    deleteAllItens();
  }

}
