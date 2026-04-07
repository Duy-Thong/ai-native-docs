import DefaultTheme from 'vitepress/theme'
import LoginPage from './LoginPage.vue'
import { h } from 'vue'

// SHA-256 hash của "username:password" — phải khớp với LoginPage.vue
const CREDENTIAL_HASH = '66c4042a7895b027a375f6440369d9281284fd428594c916a7eee31a4a04b481'

function isAuthenticated() {
  if (typeof sessionStorage === 'undefined') return true // SSR/build: skip
  return sessionStorage.getItem('auth') === CREDENTIAL_HASH
}

export default {
  extends: DefaultTheme,
  Layout() {
    if (!isAuthenticated()) {
      return h(LoginPage)
    }
    return h(DefaultTheme.Layout)
  },
}
