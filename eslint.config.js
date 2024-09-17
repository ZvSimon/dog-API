module.exports = [
  {
    ignores: ["projects/**/*"],
    files: ["*.ts"],
    parserOptions: {
      project: ["tsconfig.json"],
      createDefaultProgram: true
    },
    extends: [
      "plugin:@angular-eslint/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "es5",
          tabWidth: 2,
          semi: true,
          printWidth: 100,
          bracketSpacing: true,
          arrowParens: "avoid"
        }
      ]
    }
  },
  {
    files: ["*.html"],
    extends: ["plugin:@angular-eslint/template/recommended"],
    rules: {}
  },
  {
    files: ["*.component.ts"],
    extends: ["plugin:@angular-eslint/template/process-inline-templates"]
  }
];
