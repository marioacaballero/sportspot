module.exports = function (api) {
  api.cache(true)

  const presets = ['babel-preset-expo']

  // Agrega el siguiente bloque para configurar react-native-dotenv
  const plugins = [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
