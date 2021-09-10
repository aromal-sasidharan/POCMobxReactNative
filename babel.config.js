module.exports =  {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": false }]
      ["module-resolver", {
        "alias": {
          "@mobx-example-scenes": "./src/scenes/*",
        }
      }]
    ],
}
