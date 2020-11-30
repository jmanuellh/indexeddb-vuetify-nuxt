import Vue from 'vue'
import VueIdb from 'vue-idb'

Vue.use(VueIdb)

const idb = new VueIdb({
  version: 1,
  database: 'indexeddb-vuetify-nuxt',
  schemas: [
  	{ dispositivosClientes: '++id, nombre, mac'}
  ]
})

new Vue({
  el: '#app',
  idb: idb,
  render: h => h(App)
})
