import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import View from '@s/App.vue'
import StoreConfig from '@s/store/Store'

Vue.use(Vuex)
Vue.prototype.t = t
Vue.prototype.n = n
Vue.prototype.OC = OC

// Init OcrService
let initCounter = 0
const interval = setInterval(() => {
  if (typeof t === 'function' && typeof n === 'function' && typeof OC?.Notification?.showHtml === 'function') {
    const store = new Store(StoreConfig)
    Object.assign(OCA, {
      Ocr: {
        view: new Vue({
          el: '#ocr-view',
          name: 'OcrView',
          render: h => h(View),
          store
        }),
        store
      }
    })
    clearInterval(interval)
  } else if (initCounter === 50) {
    // eslint-disable-next-line no-console
    console.error('OCR settings view could not be initialized. Some of the required resources (OC, etc.) did not load in time.')
    clearInterval(interval)
  }
  initCounter++
}, 100)
