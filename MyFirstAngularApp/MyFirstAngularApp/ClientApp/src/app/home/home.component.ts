import { Component } from '@angular/core';
import { Model, TodoItem } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
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
