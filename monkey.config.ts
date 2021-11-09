/// <reference path="./types/monkey.d.ts" />

export default {
  name: 'Good Monkey',
  description: 'A good monkey',
  version: '1.0.0',
  match: ['*developer.mozilla.org/*'],
  grant: ['GM_addStyle']
} as Monkey.Metadata
