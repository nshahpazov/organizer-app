import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne } from 'typeorm';
import { Task } from './Task';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column({ name: 'isDone', type: 'boolean', default: false })
  isDone: boolean;

  @ManyToOne(type => Task, task => task.todos)
  task: Task;
}
