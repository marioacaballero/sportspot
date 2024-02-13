module.exports = function (api) {
  api.cache(true)

  const presets = ['babel-preset-expo']

  // Agrega el siguiente bloque para configurar react-native-dotenv
  const plugins = [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env'
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
