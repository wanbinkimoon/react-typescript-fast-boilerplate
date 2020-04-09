/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Class',
      choices: () => ['Function', 'Class']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ?
            'A component or container with this name already exists' :
            true;
        }
        return 'The name is required';
      }
    }
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.ts.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.ts.hbs';
      }
    }

    const actions = [{
        type: 'add',
        path: '../../src/app/components/{{properCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/app/components/{{properCase name}}/styles.tsx',
        templateFile: './component/styles.ts.hbs',
        abortOnFail: true
      }
    ];
    return actions;
  }
};
