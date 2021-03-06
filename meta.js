const path = require('path');
const fs = require('fs');

const {
    sortDependencies,
    installDependencies,
    runLintFix,
    printMessage,
} = require('./utils');

const pkg = require('./package.json');

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },

  prompts: {
    name: {
      when: 'isNotTest',
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      when: 'isNotTest',
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'NCViewer\'s Vuetify + Nuxt Template'
    },
    author: {
      when: 'isNotTest',
      'type': 'string',
      'message': 'Author'
    },
    alacarte: {
      when: 'isNotTest',
      'type': 'confirm',
      'message': 'Use a-la-carte components (reduces build size)?',
      'default': true
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM (recommended)',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },

  complete: function(data, { chalk }) {
    const green = chalk.green;
    sortDependencies(data, green);
    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName);

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green);
        })
        .then(() => {
          printMessage(data, green);
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e);
        })
    } else {
      printMessage(data, chalk);
    }
  },
};
