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

  v: string;
  list: Array<Tarefas> = []; 
  meuStorage = localStorage;

  constructor() {}

  add(v: string) {
    this.list.push({v});
    this.meuStorage.setItem('Tarefas','v');
  }

  remove(index: number){
    this.list.splice(index, 1);
    this.meuStorage.removeItem("item");
  }

  getList() {   
    return this.list;
  } 

  ngOnInit() {
    this.v = localStorage.getItem("v");
  }

}
