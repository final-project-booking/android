
module.exports = {

  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
}

  
    "presets": ["module:metro-react-native-babel-preset", "@babel/preset-flow"]
  
  // You can add more Babel plugins or presets as needed
};

