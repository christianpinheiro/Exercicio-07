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
    this.meuStorage.setItem("list",this.v);
  }

  remove(index: number){
    this.list.splice(index, 1);
    this.meuStorage.removeItem("list");
  }

  getList() {   
    return this.list;
  } 

  ngOnInit() {
  }

}
