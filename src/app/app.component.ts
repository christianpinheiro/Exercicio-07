import { Component } from '@angular/core';

interface Tarefas {
  v: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  n: number;
  v: string;
  list: Array<Tarefas> = [];

  constructor() {
   
  }

  add(v: string) {
    this.list.push({ v });
  }

  getList() {
    
    return this.list;
  }


}
