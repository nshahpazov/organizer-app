import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import { TodoItem } from "./TodoItem";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    birthdate: Date;

    @OneToMany(type => TodoItem, todoItem => todoItem.author)
    posts: TodoItem[];
}