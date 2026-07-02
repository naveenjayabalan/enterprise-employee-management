import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

 @Input()

 title:string ='';

  @Output()
  logoutClicked = new EventEmitter<void>();

   logout() {
      alert('Logout clicked');
  }

}
