import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany,
         ManyToOne } from 'typeorm';
import { TaskColumn } from './TaskColumn';
import { Todo } from './Todo';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(type => Todo, todo => todo.task, { cascade: true, eager: true })
  todos: Todo[];

  @ManyToOne(type => TaskColumn, column => column.tasks)
  column: TaskColumn;
}
