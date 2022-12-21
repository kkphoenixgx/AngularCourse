import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  public blinkToggle :boolean = false
  public fontSize :string = '2em'

  public css :object = {
    'color': 'green'
  }

  public inputValue :string = ''
  public list :Array<string> = []

  ngOnInit(): void{
    setInterval(()=>{
      this.blinkToggle = !this.blinkToggle;
      if (this.fontSize === '2em') this.fontSize = '1em'
      else this.fontSize = '2em'
    }, 2000 )
  }

  addItem(){
    this.list.push(this.inputValue)
    this.inputValue = ''
  }
}
