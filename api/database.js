import Dexie from 'dexie';

export default {
  getDBDexie() {
    const db = new Dexie('indexeddb-vuetify-nuxt')

    db.version(1).stores({ dispositivosClientes: '++id, nombre, mac' })
    db.version(1).stores({ dispositivosPersonales: '++id, nombre, mac'})
    return db
  },

  async obtenerTodo() {
    // let nuevaTabla = Dexie.deepClone(tabla)
    return await this.getDBDexie().dispositivosClientes.toArray()
  }
}
