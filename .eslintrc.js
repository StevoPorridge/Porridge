import eslintConfig from './.eslintrc.json';

export default {
  ...eslintConfig,
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@angular-eslint/component-class-suffix': [
          'error',
          { suffixes: ['Page', 'Component'] },
        ],
      },
    },
  ],
};
