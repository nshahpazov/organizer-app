import Vue from 'vue';
import Component from 'vue-class-component';

import { Todo } from '../entity/Todo';

@Component({
  props: {
    todo: Todo
  },
  template: `<div v-if="todo">{{ todo.name }}</div>`
})
export default class TodoComponent extends Vue {
  todo: Todo;
}
