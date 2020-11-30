import Dexie from 'dexie';

export default {

  instanciarDBDexie() {
    this.db = new Dexie('indexeddb-vuetify-nuxt')

    this.db.version(1).stores({ dispositivosClientes: '++id, nombre, mac' })
    this.db.version(1).stores({ dispositivosPersonales: '++id, nombre, mac'})
  },
  
  getDBDexie() {
    return this.db
  },

  async obtenerTodo() {
    this.instanciarDBDexie()
    return await this.db.dispositivosClientes.toArray()
  },

  async agregarDispositivoCliente(dispositivoCliente) {
    this.instanciarDBDexie()
    await this.db.dispositivosClientes.add(dispositivoCliente)
  }
}
