import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-binding',
  templateUrl: './project-binding.component.html',
  styleUrls: ['./project-binding.component.scss']
})
export class ProjectBindingComponent implements OnInit{
  
  public text :string = 'Bem vindo'
  public btnText :string = 'OK'
  private headerTwo :HTMLElement | null = null
  
  public mousePosition : {x:number, y:number} = { x: 0, y: 0 }
  
  ngOnInit(): void {
    this.headerTwo = document.querySelector('#titleTwo')
  }

  handleBtnClick() :void{
    this.text = "(^///^)"
  }
  handleHeaderTwo() :void{
    if(this.headerTwo === null ) return console.log('ops')

    this.headerTwo.style.color ='red'
    this.btnText = 'OOOOOOKKKKK!!!'
    this.handleBtnClick()
    
  }
  reset(){
    if(this.headerTwo === null ) return console.log('ops')
    
    this.text = 'Bem vindo'
    this.btnText = 'OK'
    this.headerTwo.style.color ='black'
  }
  handleFindMouse(event :MouseEvent) :void{
    this.mousePosition.x = event.offsetX
    this.mousePosition.y = event.offsetY
  }
}
