import { Component } from '@angular/core';
import { ETheme } from '../../Enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon :string = ETheme.ICON_MOON
  public text_theme :string = ETheme.TEXT_THEME_MOON


  public toogleDarkTheme(){
    const dartTheme = document.body.classList.toggle("darkTheme");

    if(dartTheme){

      this.text_theme = ETheme.TEXT_THEME_SUN
      return this.icon = ETheme.ICON_SUN;
    }
    
    this.text_theme = ETheme.TEXT_THEME_MOON
    return this.icon = ETheme.ICON_MOON;
  }

}
