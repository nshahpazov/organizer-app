import Vue from 'vue';
import Component from 'vue-class-component';

import { TaskService } from '../services/TaskService';
import { Task } from '../entity/Task';
import { Todo } from '../entity/Todo';

import TodoComponent from './TodoComponent';

@Component({
  components: { 'todo': TodoComponent },
  props: {
    task: Task
  },
  template: `
    <div v-if="task">
      <input type="text" v-model="newTodoName" placeholder="Todo name" />
      <button class="btn btn-primary" v-on:click="createNewTodo">Create new Todo</button>
      <div>
        <todo v-for="todo in task.todos" :todo="todo" />
      </div>
    </div>
  `
})
export default class TaskComponent extends Vue {
  task: Task;
  newTodoName = '';
  taskService: TaskService;

  constructor() {
    super();
    this.taskService = new TaskService(this.connection);
  }

  async createNewTodo() {
    const todo = new Todo();
    todo.name = this.newTodoName;
    this.task.todos.push(todo);

    await this.taskService.save(this.task);
  }
}
