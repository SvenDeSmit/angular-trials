import { Component } from '@angular/core';
import { Model, TodoItem } from '../model/model';

console.log('Hello world');

@Component({
  selector: 'app-home',
  templateUrl: './homehtml.component.html',
})

export class HomeHtmlComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem,false))
    }
  }
}
