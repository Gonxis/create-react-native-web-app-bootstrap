import { AppRegistry, Platform } from 'react-native'
import App from 'app'

if (Platform.OS === 'web') {
  AppRegistry.registerComponent('App', () => App)

  AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root')
  })
}
