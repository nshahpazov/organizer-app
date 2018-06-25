import { User } from '../entity/User';

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
      user.username = username;

      return this.save(user);
  }
}
