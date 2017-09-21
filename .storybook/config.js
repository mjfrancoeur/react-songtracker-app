const configure = require('@storybook/react').configure;

function loadStories() {
  // Require stories dir
  require('../stories');
}

configure(loadStories, module);
