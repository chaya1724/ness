import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  list=[1,2,3,4,5];

  items = [
    { text: 1, color: 'new' },
    { text: 1, color: 'new' },
    { text: 1, color: 'new' },
    { text: 1, color: 'new' } ,
    { text: 1, color: 'new' } 
];
  list2=[2,2,2,2,2];
  list3=[3,3,3,3,3];
  clickedButton = false;
  numberList:string="";
  flag:boolean=false;
  toggle: boolean=false;


  cardsClick(item:any,i:any){
    this.toggle = !this.toggle;
    // // name.style.backgroundColor = '#f00';
    // if(this.numberList!="")
    this.numberList+=',';
    this.numberList+=item
    // this.flag=true;
  }
}
