import { Task } from '../entity/Task';

export class TaskService {
  private repository;

  constructor(connection) {
    this.repository = connection.getRepository(Task);
  }

  save(task) {
    return this.repository.save(task);
  }
}
