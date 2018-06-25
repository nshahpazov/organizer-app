import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import { Board } from './Board';
import { Task } from './Task';

@Entity()
export class TaskColumn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @OneToMany(type => Task, task => task.column, { cascade: true, eager: true})
  tasks: Task[];

  @ManyToOne(type => Board, board => board.columns)
  board: Board;
}
