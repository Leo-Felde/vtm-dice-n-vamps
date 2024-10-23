import './styles/quasar.sass'
import iconSet from 'quasar/icon-set/material-symbols-rounded.js'
import lang from 'quasar/lang/pt-BR.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import { Dialog, Notify } from 'quasar'

export default {
  config: {
    dark: true 
  },
  plugins: {
    Dialog, Notify
  },
  lang: lang,
  iconSet: iconSet
}
