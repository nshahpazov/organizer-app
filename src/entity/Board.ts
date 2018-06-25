import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany } from 'typeorm';

import { User } from './User';
import { TaskColumn } from './TaskColumn';

import { UserService } from '../services/UserService';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => TaskColumn, column => column.board, { eager: true, cascade: true })
  columns: TaskColumn[];

  @ManyToOne(type => User, user => user.boards)
  user: User;

  @OneToOne(type => User, user => user.currentBoard)
  custodian: User;
}
