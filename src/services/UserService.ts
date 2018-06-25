import { User } from '../entity/User';
import { Board } from '../entity/Board';

export class UserService {
  private repository;

  constructor(connection) {
    this.repository = connection.getRepository(User);
  }

  getCurrent(): User {
    return this.repository.findOne({ isCurrent: true });
  }

  save(user) {
    return this.repository.save(user);
  }

  findByUsername(username) {
    return this.repository.findOne({ username });
  }

  createUser(username) {
      const user = new User();
      const board = new Board();

      user.username = username;
      board.name = 'First Board';

      user.currentBoard = board;

      return this.save(user);
  }
}
