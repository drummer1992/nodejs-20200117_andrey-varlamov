module.exports = {
  mongodb: {
    uri: (process.env.NODE_ENV === 'test')
      ? 'mongodb://localhost/7-module-2-task'
      : 'mongodb://localhost/any-shop',
  },
  crypto: {
    iterations: (process.env.NODE_ENV === 'test' ? 1 : 12000),
    length: 128,
    digest: 'sha512',
  },
  providers: {
    github: {
      app_id: process.env.GITHUB_APP_ID || 'c49fa86f926f8acf1a99',
      app_secret: process.env.GITHUB_APP_SECRET || 'c4b8e765b661c2aa418bdbfe7616e3d328674155',
      callback_uri: 'http://localhost:3000/oauth/github',
      options: {
        scope: ['user:email'],
      },
    },
    facebook: {
      app_id: process.env.FACEBOOK_APP_ID || 'facebook_app_id',
      app_secret: process.env.FACEBOOK_APP_SECRET || 'facebook_app_secret',
      callback_uri: 'http://localhost:3000/oauth/facebook',
      options: {
        scope: ['email'],
      },
    },
    vkontakte: {
      app_id: process.env.VKONTAKTE_APP_ID || 'vkontakte_app_id',
      app_secret: process.env.VKONTAKTE_APP_SECRET || 'vkontakte_app_secret',
      callback_uri: 'http://localhost:3000/oauth/vkontakte',
      options: {
        scope: ['email'],
      },
    },
  },
};
