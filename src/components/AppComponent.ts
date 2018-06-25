import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../entity/User';
import { Board } from '../entity/Board';
import { UserService } from '../services/UserService';
import { BoardService } from '../services/BoardService';

import BoardComponent from './BoardComponent';


@Component({
  components: { 'board': BoardComponent },
  template: `
    <div>
      <div v-if="!user.name">
        <input type="text" placeholder="Username" v-model="username" />
        <button class="btn btn-primary" v-on:click="login">
          Login
        </button>
      </div>
      <div v-if="user.username">
        logged in as {{ user.username }}
        <div>
          <input type="text" v-model="newBoardName" />
          <button v-on:click="createBoard">Create Board</button>
        </div>
        <button v-for="board in user.boards" v-on:click="setCurrentBoard(board)">
          {{ board.name }}
        </button>
        <board :board="user.currentBoard" />
      </div>
    </div>
  `
})
export default class AppComponent extends Vue {
  user = new User();
  userService: UserService;
  boardService: BoardService;
  newBoardName = '';
  username = '';

  constructor() {
    super();
    this.userService = new UserService(this.connection);
    this.boardService = new BoardService(this.connection);
  }

  async createBoard() {
    const board = new Board();
    board.name = this.newBoardName;
    this.user.boards.push(board);

    await this.userService.save(this.user);
  }

  async setCurrentBoard(board) {
    this.user.currentBoard = board;
    await this.userService.save(this.user);
  }

  async login() {
    const user = await this.userService.findByUsername(this.username);

    if (user) {
      this.user = user;
    } else {
      this.user = await this.userService.createUser(this.username);
    }
  }
}
