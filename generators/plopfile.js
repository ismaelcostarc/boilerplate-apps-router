module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.tsx",
        templateFile: "templates/test.hbs",
      },
    ], // array of actions
  });
};
