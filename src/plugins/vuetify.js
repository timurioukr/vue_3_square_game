import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const options = {
  breakpoint: {
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  icons: {
    iconfont: 'mdi',
    values: {},
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    themes: {
      light: {
        success: '#28C76F',
        error: '#EA5455',
        green: '#009688',
        black: '#000000',
        info: '#0BA5EC',
        warning: '#FD853A'
      },
      dark: {
        success: '#28C76F',
        error: '#EA5455',
        green: '#009688',
        black: '#000000',
        info: '#0BA5EC',
        warning: '#FD853A'
      },
    },
  },
}

export default new Vuetify({
  ...options,
})
