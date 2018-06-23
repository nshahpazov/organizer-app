import Vue from 'vue';
import Component from 'vue-class-component';
import { TodoItem } from '../entity/TodoItem';
import { Category } from '../entity/Category';
import { Author } from '../entity/Author';

@Component({
  template: `
  <div>
    <input v-model="todoText"/><button @click="onClick">Create New Todo!</button>
    <div>
      <p>{{message}}</p>
      <div v-for="todo in todos">{{todo.title}}</div>
      </div>
  </div>
  `
})
export default class BoardComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'BoardComponent!';
  todoText: string = '';
  todos: Array<TodoItem> = [];
  repository;

  async created() {
    const repository = this.connection.getRepository(TodoItem);
    this.todos = await repository.find();
    console.log(this.todos);
    debugger;
  }

  // Component methods can be declared as instance methods
  async onClick() {
    const repository = this.connection.getRepository(TodoItem);

    const todoItem = new TodoItem();
    todoItem.text = `Some text`;
    todoItem.title = `Some title`;

    await repository.save(todoItem);

    window.alert(this.todoText);
  }
}
