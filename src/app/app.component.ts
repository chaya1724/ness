import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  list = [1, 2, 3, 4, 5];
  numberList: string = "";
  data: any[] = [
    { id: 1, text: 1, isSelected: false },
    { id: 2, text: 1, isSelected: false },
    { id: 3, text: 1, isSelected: false },
    { id: 4, text: 1, isSelected: false },
    { id: 5, text: 2, isSelected: false },
    { id: 6, text: 2, isSelected: false },
    { id: 7, text: 2, isSelected: false },
    { id: 8, text: 2, isSelected: false },
    { id: 9, text: 3, isSelected: false },
    { id: 10, text: 3, isSelected: false },
    { id: 11, text: 3, isSelected: false },
    { id: 12, text: 3, isSelected: false }
  ];
  selectedTab: string='';
  newData: any;

  changeColor(id: string, text: string) {
    this.data.find(x => x.id === id).isSelected = true;
    this.numberList += ',';
    this.numberList += text
  }
  onChangeTab(event: MatTabChangeEvent) {
    let index = event.index;
    switch (index) {
      case 0:
        alert("111111111111111")
 
        this.selectedTab = 'all'  
        break;
      case 1:
        this.data.forEach(element => {if(element.isSelected==true)
          {
            alert("checed")
            this.newData.push(element);
          }
        this.data=this.newData;
        });
        alert("3333333333333")
        this.selectedTab = 'selected'  
        break;
      case 2:
        alert("444444")
        this.selectedTab = 'notSelected'  
        break;
    }
    setTimeout(() => {
    }, 500)
  }
}
