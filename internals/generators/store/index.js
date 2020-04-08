/* eslint strict: ["off"] */
'use strict';

const mapper = require('./store-mapper');
let storeName;
module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Users',
      validate: (value) => {
        storeName = value;
        return true;
      }
    }
  ],
  actions: (data) => {

    const actions = [
      {
        type: 'add',
        path: '../../src/app/store/{{properCase name}}/index.tsx',
        templateFile: './store/store.ts.hbs',
        abortOnFail: true
      }
    ];

    mapper(storeName);

    return actions;
  }
};
