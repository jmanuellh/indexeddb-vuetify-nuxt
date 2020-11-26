import Dexie from 'dexie';

export default {
	getDB() {
    const db = new Dexie('indexeddb-vuetify-nuxt')
    db.version(1).stores({
      dispositivosClientes: '++id, nombre, mac'
    })
    return db
  }
}
