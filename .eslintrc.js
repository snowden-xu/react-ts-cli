module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-dupe-keys': 2, // 不允许在对象文字中使用重复键
    'no-redeclare': 2, // 禁止重复声明变量
    'react/jsx-no-duplicate-props': 2, // 防止在JSX中重复的props
    'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  // exclude: /assets/,
};
