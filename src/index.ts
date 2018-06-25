// src/index.ts
import 'reflect-metadata';
import 'typeorm/browser';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import { createConnection } from 'typeorm';

import HelloComponent from './components/HelloComponent';
import AppComponent from './components/AppComponent';
import BoardComponent from './components/BoardComponent';


import { User } from './entity/User';
import { Todo } from './entity/Todo';
import { Task } from './entity/Task';
import { TaskColumn } from './entity/TaskColumn';
import { Board } from './entity/Board';
import { Category } from './entity/Category';

createConnection({
  type: 'sqljs',
  location: 'test',
  autoSave: true,
  entities: [
    Todo,
    Task,
    Category,
    TaskColumn,
    Board,
    User
  ],
  logging: ['query', 'schema'],
  synchronize: true
}).then(async connection => {
  Vue.prototype.connection = connection;

  let v = new Vue({
    el: '#app',
    template: `<div><app-component /></div>`,
    components: { AppComponent, BoardComponent }
  });

}).catch(error => console.log('Error: ', error));
