import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../entity/User';
import { Board } from '../entity/Board';
import { TaskColumn } from '../entity/TaskColumn';

import { BoardService } from '../services/BoardService';

import ColumnComponent from './ColumnComponent';

@Component({
  components: { 'column': ColumnComponent },
  props: {
    board: Board
  },
  template: `
  <div v-if="board">
    <div>
       NAME: {{ board.name }}
       <input type="text" v-model="newColumnName" />
       <button v-on:click="addColumn">
         Add Column
       </button>
       <column v-for="column in board.columns" :column="column" />
    </div>
  </div>
  `
})
export default class BoardComponent extends Vue {

  board: Board;
  newColumnName = '';
  boardService: BoardService;

  constructor() {
    super();
    this.boardService = new BoardService(this.connection);
  }

  async addColumn() {
    const column = new TaskColumn();
    column.name = this.newColumnName;
    this.board.columns.push(column);

    await this.boardService.save(this.board);
  }
}
