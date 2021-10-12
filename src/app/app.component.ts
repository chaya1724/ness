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
    { id: 5, text: 1, isSelected: false },
    { id: 6, text: 2, isSelected: false },
    { id: 7, text: 2, isSelected: false },
    { id: 8, text: 2, isSelected: false },
    { id: 9, text: 2, isSelected: false },
    { id: 10, text: 2, isSelected: false },
    { id: 11, text: 3, isSelected: false },
    { id: 12, text: 3, isSelected: false },
    { id: 13, text: 3, isSelected: false },
    { id: 14, text: 3, isSelected: false },
    { id: 15, text: 3, isSelected: false },
    { id: 16, text: 1, isSelected: false },
    { id: 17, text: 2, isSelected: false },
    { id: 18, text: 3, isSelected: false },
    { id: 19, text: 4, isSelected: false },
    { id: 20, text: 5, isSelected: false },

  ];
  selectedTab: string = '';
  selectedList: any = [];
  notSelectedList: any = [];
  filteredList: any[] = [];
  newData: any[] = this.data;
  filterValue: any;

  changeColor(id: string, text: string) {
    this.data.find(x => x.id === id).isSelected = true;
    this.numberList += ',';
    this.numberList += text
  }
  onChangeTab(event: MatTabChangeEvent) {
    let index = event.index;
    switch (index) {
      case 0:
        this.data = this.newData;
        break;
      case 1:
        this.selectedList=[];
        this.data = this.newData;
        this.data.forEach(element => {
          if (element.isSelected == true) { this.selectedList.push(element); }
        });
        this.data = this.selectedList;
        break;
      case 2:
        this.notSelectedList=[];
        this.data = this.newData;
        this.data.forEach(element => {
          if (element.isSelected == false) { this.notSelectedList.push(element); }
        });
        this.data = this.notSelectedList;
        break;
    }
    setTimeout(() => {
    }, 500)
  }
  searchFilter() {
    this.filterValue = (<any>document.getElementById('inputSearch')).value
      this.newData.forEach(element => {
        if (this.filterValue.includes(element.text)) {
          this.filteredList.push(element);
          this.data = this.filteredList;
          console.log("filteredList::: " + this.filteredList)
        }
      });
      this.filteredList = [];
      this.filterValue = ''
    }
}
