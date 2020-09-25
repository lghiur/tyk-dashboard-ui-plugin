import { Component1 } from './component1/component1';

window.components = {
  ...window.components,
  plugin1: {
    Component: Component1,
    validate: (apiDefinition) => {
      console.log(apiDefinition);
      let errors = {};
      if (apiDefinition.advancedOptions.configData.foo.length < 4) {
        errors.foo = 'Length must be higher than 4';
      } if (apiDefinition.coreSettings.apiSettings.internal && apiDefinition.advancedOptions.configData.baz !== 'baz') {
        errors.baz = 'If internal is enabled then value of this field needs to be baz';
      }

      if (!Object.keys(errors).length) {
        errors = null;
      }

      return errors;
    },
  },
};
