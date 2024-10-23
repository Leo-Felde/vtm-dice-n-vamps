import './styles/quasar.sass'
import iconSet from 'quasar/icon-set/material-icons-sharp.js'
import lang from 'quasar/lang/pt-BR.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
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
