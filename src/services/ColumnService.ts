import { TaskColumn } from '../entity/TaskColumn';

export class ColumnService {
  private repository;

  constructor(connection) {
    this.repository = connection.getRepository(TaskColumn);
  }

  save(column) {
    return this.repository.save(column);
  }
}
