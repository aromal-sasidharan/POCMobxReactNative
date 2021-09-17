module.exports =  {
    // presets: ['babel-preset-expo'],
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": false }],
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
            "@scenes": "mobx-example/src/scenes",
            "@presenters": "mobx-example/src/presenter"
        }
      }]
    ],
}
