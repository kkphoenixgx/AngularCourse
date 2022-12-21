import { Component, OnChanges, OnDestroy, OnInit, DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked 
} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./style.css'],
  template: `
    <ul class="lifeCycleUl">
      <li *ngFor="let item of listLifeCycles; let i= index" id="lifeCycleItem{{i}}">
        <p> {{ item }} </p>
        <img (click)="handleClickTrashIcon(i, 'listLifeCycles')" src="../assets/free-trash-icon-347-thumb.png" alt="trashIcon">
      </li>
    </ul>
    <ul class="ngModelUl">
      <li *ngFor="let item of listNgDoCheck; let i = index" id="ngDoCheckItem{{i}}" >
        <p> {{ item }} </p>
        <img (click)="handleClickTrashIcon(i, 'listNgDoCheck')" src="../assets/free-trash-icon-347-thumb.png" alt="trashIcon">
      </li>
    </ul>
    <ul class="customItens">
      <li *ngFor="let item of listCustomItens; let i = index" id="customItens{{i}}" >
        <p> {{ item }} </p>
        <img (click)="handleClickTrashIcon(i, 'customItens')" src="../assets/free-trash-icon-347-thumb.png" alt="trashIcon">
      </li>
    </ul>
    <div class="handleItens">
      <input [(ngModel)]="addItemInputValue" type="text">
      <button (click)="handleClickAdd()" >Add Item</button>
      <button (click)="handleRebuildButton()" >REBUILD</button>
    </div>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked 
{
  public listLifeCycles :Array <string | number> = []
  public listNgDoCheck :Array <string | number> = []
  public listCustomItens :Array <string | number> = []

  public counter = 0

  public contentLoaded :boolean = false
  public ngOnDestroyCheck :boolean = false

  public addItemInputValue = ''


  handleClickAdd() :void{
    if(this.addItemInputValue === '') return

    this.listCustomItens.push(this.addItemInputValue)
    console.log(this.addItemInputValue);
    
    this.addItemInputValue = ''
  }

  handleClickTrashIcon(index :number, list :string ) :void{
    
    let id :string = ''

    switch (list) {

      case 'listNgDoCheck':
        id = '#ngDoCheckItem'+index
        document.querySelector(id)?.classList.add('shakeAnimation')
        
        setTimeout(() => {
          this.listNgDoCheck.splice(index, 1)
        }, 1000);

        break;

      case 'listLifeCycles':
        id = '#lifeCycleItem'+index
        document.querySelector(id)?.classList.add('shakeAnimation')

        setTimeout(() => { this.listLifeCycles.splice(index, 1) }, 1000);
        break;
      
      case 'customItens':
        id = '#customItens'+index
        document.querySelector(id)?.classList.add('shakeAnimation')

        setTimeout(() => { this.listCustomItens.splice(index, 1) }, 1000);
        break;
      default:
        console.error(new Error)
        break;
    }

    if(this.ngOnDestroyCheck) {
      document.querySelector(id)?.setAttribute('style', 'background-color: black')
      console.log('Already have a dngDestroy');
    } else {
      this.listLifeCycles.push('ngOnDestroy');
      this.ngOnDestroyCheck = true
    }
    
  }
  handleRebuildButton(){
    this.listLifeCycles = []
    this.listNgDoCheck = []
    this.listCustomItens = []
    this.ngOnDestroyCheck = false

    setTimeout( ()=>{ 
      this.listLifeCycles.push('ngOnInit')
      this.listNgDoCheck.push('ngAfterViewChecked')
    }, 1000)
    setTimeout( ()=>{ 
      this.listLifeCycles.push('ngOnChanges')
      this.listNgDoCheck.push('ngAfterContentChecked')
    }, 1500)
    setTimeout( ()=>{
      this.listNgDoCheck.push('ngAfterViewInit')
    }, 2000)
    setTimeout( ()=>{ 
      this.listLifeCycles.push('ngDoCheck')
      this.listNgDoCheck.push('ngAfterContentInit')
    }, 2500)

  }

  // ----------- Life Cycles -----------

  ngOnInit(): void {
    console.log('ngOnInit');
    setTimeout( ()=>{ this.listLifeCycles.push('ngOnInit') }, 1000)
  }
  ngOnChanges(): void {
    if(! (this.counter >= 4) ){
      this.counter++
      setTimeout( ()=>{ this.listLifeCycles.push('ngOnChanges') }, 1500)
    }
    console.log('ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    setTimeout( ()=>{ this.listLifeCycles.push('ngOnDestroy') }, 2000)
  }
  
  // ----------- NgDoCheck Subroutines -----------
  
  ngDoCheck(): void {
    if(! (this.counter >= 4) ){
      this.counter++
      setTimeout( ()=>{ this.listLifeCycles.push('ngDoCheck') }, 2500)
    }
    console.log('ngDoCheck');
  }
  
  ngAfterViewChecked(): void {
    if(! (this.counter >= 4) ){
      this.counter++
      setTimeout( ()=>{ this.listNgDoCheck.push('ngAfterViewChecked') }, 1000)
    }

    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    if(! (this.counter >= 4) ){
      this.counter++
      setTimeout( ()=>{ this.listNgDoCheck.push('ngAfterContentChecked') }, 1500)
    }

    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    setTimeout( ()=>{ this.listNgDoCheck.push('ngAfterViewInit') }, 2000)
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    setTimeout( ()=>{ this.listNgDoCheck.push('ngAfterContentInit') }, 2500)
    
  }

}