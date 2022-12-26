import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  @Input() public inputTask : { text: string , index :number  }[] = []
  public inputTaskElement :HTMLInputElement | null = null

  ngOnInit(): void {
    
    this.inputTaskElement = document.querySelector('#inputTask') as HTMLInputElement | null 
    this.inputTaskElement?.addEventListener('keydown', (event)=> {
      
      console.log(this.inputTaskElement?.value, event.key);
      
      if(event.key === 'Enter' && typeof this.inputTaskElement?.value != undefined ){
        
        this.inputTask?.push({ 
          text : this.inputTaskElement?.value as string,
          index: this.inputTask.length + 1
        })
        console.log('whaaat', typeof this.inputTask, this.inputTask[0]);
      };
      
    })

  }

  

}
