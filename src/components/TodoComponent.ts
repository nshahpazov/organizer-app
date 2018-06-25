import Vue from 'vue';
import Component from 'vue-class-component';

import { Task } from '../entity/Task';

@Component({
  props: {
    task: Task
  },
  template: `<div v-if="todo">{{todo.name}}</div>`
})
export default class TodoComponent extends Vue {

}
