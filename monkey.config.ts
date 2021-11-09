/// <reference path="./types/monkey.d.ts" />

export default {
  name: 'caniuse-MDN',
  description: '从MDN页面直接跳转到caniuse',
  version: '1.0.0',
  match: ['*developer.mozilla.org/*'],
  grant: ['GM_addStyle']
} as Monkey.Metadata
