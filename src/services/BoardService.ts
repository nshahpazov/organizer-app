import { Board } from '../entity/Board';

export class BoardService {
  private repository;

  constructor(connection) {
    this.repository = connection.getRepository(Board);
  }

  save(board) {
    return this.repository.save(board);
  }

  getCurrentBoard() {
    return this.repository.findOne({ isCurrent: true });
  }
}
