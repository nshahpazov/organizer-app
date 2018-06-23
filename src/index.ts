// src/index.ts
import 'reflect-metadata';
import 'typeorm/browser';

import Vue from 'vue';
import { createConnection } from 'typeorm';

import HelloComponent from './components/HelloComponent';
import BoardComponent from './components/BoardComponent';

import { Author } from './entity/Author';
import { TodoItem } from './entity/TodoItem';
import { Category } from './entity/Category';

createConnection({
  type: 'sqljs',
  location: 'test',
  autoSave: true,
  entities: [
    Author,
    TodoItem,
    Category
  ],
  logging: ['query', 'schema'],
  synchronize: true
}).then(async connection => {
  Vue.prototype.connection = connection;

  let v = new Vue({
      el: '#app',
      template: `
      <div>
          Name: <input v-model='name' type='text'>
          <board-component :name='name' :initialEnthusiasm='5' />
      </div>
      `,
      data: {
        name: 'World',

      },
      components: { BoardComponent }
  });

}).catch(error => console.log('Error: ', error));
