module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  framework: "@storybook/react",
  
  core: {
    builder: 'webpack5'
  },

  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}