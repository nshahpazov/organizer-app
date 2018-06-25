import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Board } from './Board';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(type => Board, board => board.user, { eager: true, cascade: true })
  boards: Board[];

  @OneToOne(type => Board, board => board.custodian, { eager: true, cascade: true })
  @JoinColumn()
  currentBoard: Board;
}
