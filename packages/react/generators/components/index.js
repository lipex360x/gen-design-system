/* eslint-disable */
const { pushFiles } = require("../utils/generator");

module.exports = {
  description: "Generate a Component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "Component Name",
      validate: (value) => {
        if (!value) return "Value is required";
        return true;
      },
    },
  ],

  actions: (data) => {
    const pathTemplate = "./components/templates";
    const componentPath = "../src/components/{{componentName}}";

    const files = () => {
      const arrayFiles = [];

      arrayFiles.push(pushFiles(componentPath, "index.ts", "index.hbs"));
      arrayFiles.push(pushFiles(componentPath, "styles.ts", "styles.hbs"));
      arrayFiles.push(
        pushFiles(componentPath, "{{componentName}}.tsx", "component.hbs")
      );

      return arrayFiles;
    };

    // Create Files
    const action = [];

    files().forEach((file) => {
      const createFile = {
        type: "add",
        path: `${file.path}/${file.name}`,
        data: file.data,
        templateFile: `${pathTemplate}/${file.template}`,
        force: true,
      };

      action.push(createFile);
    });

    // Message
    const message = () => `Component ${data.componentName} created`;
    action.push(message);

    return action;
  },
};
