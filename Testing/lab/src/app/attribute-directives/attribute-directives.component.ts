// Imports
  import { Component, OnInit } from '@angular/core';
  import { IResponse } from '../model/IResponse';
  import { TestingServiceService } from '../services/testing-service.service';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})

export class AttributeDirectivesComponent implements OnInit {
  public blinkToggle :boolean = false
  public fontSize :string = '2em'

  public css :object = {'color': 'green'}

  public inputValue :string = ''
  public list :Array< IResponse > = []

  constructor(
    public testingService :TestingServiceService,
  ){}

  // ----------- Methods -----------

  addItem(item : IResponse | null = null){

    if(item){
      this.list.push({ name: item.name, id: item.id})
    }
    else{
      if(this.inputValue === '') return
      
      this.testingService.addToDB(this.inputValue, this.list.length+1).subscribe({
        next: (res: IResponse) =>{
          this.list.push({ name: this.inputValue, id: this.list.length+1})
          this.inputValue = ''
        },
        error: (error) => console.error('oh, error into addItem → Attribute-directive')
      })
      
    }
    
  }
  getItens(){
    
    this.testingService.getItensOfDB().subscribe({
      next: (res: Array<IResponse> )   => {
        res.forEach(response => {
          this.addItem(response)
        })
      },
      error:(error) => console.error('oh, error into ngOnIit → Attribute-directive')
    });
  
  }

  // ----------- LifeCycles -----------

  ngOnInit(): void{
    setInterval(()=>{
      this.blinkToggle = !this.blinkToggle;
      if (this.fontSize === '2em') this.fontSize = '1em'
      else this.fontSize = '2em'
    }, 2000 )

    this.getItens()

  }
}
