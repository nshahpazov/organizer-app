import Vue from 'vue';
import Component from 'vue-class-component';

import { ColumnService } from '../services/ColumnService';
import { TaskColumn } from '../entity/TaskColumn';
import { Task } from '../entity/Task';

import TaskComponent from './TaskComponent';

@Component({
  components: { 'task': TaskComponent },
  props: {
    column: TaskColumn
  },
  template: `
    <div v-if="column">
      <input type="text" v-model="newTaskTitle" placeholder="Task Title" />
      <button class="btn btn-primary" v-on:click="createNewTask">Create new Task</button>
      <div>
        <task v-for="task in column.tasks" :task="task" />
      </div>
    </div>
  `
})
export default class ColumnComponent extends Vue {
  column: TaskColumn;
  newTaskTitle = '';
  columnService: ColumnService;

  constructor() {
    super();
    this.columnService = new ColumnService(this.connection);
  }

  async createNewTask() {
    const task = new Task();
    task.title = this.newTaskTitle;
    this.column.tasks.push(task);

    await this.columnService.save(this.column);
  }
}
