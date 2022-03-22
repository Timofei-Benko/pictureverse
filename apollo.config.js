module.exports = {
  client: {
    service: {
      name: 'pictureverse',
      url: 'http://localhost:6969/graphql',
      addTypename: true,
    },
  },
  includes: ['./queries/**/*.ts'], // array of glob patterns
  tagName: 'gql',
  globalTypesFile: './types/graphql-global-types.ts',
}
