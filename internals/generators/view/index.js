const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a view component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Class',
    choices: () => ['Function', 'Class']
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if (/.+/.test(value)) {
        return componentExists(value) ?
          'A component or view with this name already exists' :
          true;
      }
      return 'The name is required';
    }
  }],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './views/stateless.ts.hbs';
        break;
      }
      default: {
        componentTemplate = './views/class.ts.hbs';
      }
    }


    const actions = [{
        type: 'add',
        path: '../../src/app/views/{{properCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/app/views/{{properCase name}}/styles.tsx',
        templateFile: './view/styles.ts.hbs',
        abortOnFail: true
      }
    ];
    return actions;
  }
};
