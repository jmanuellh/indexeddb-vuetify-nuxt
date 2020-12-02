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

  async obtenerTodosDispositivosClientes() {
    this.instanciarDBDexie()
    return await this.db.dispositivosClientes.toArray()
  },
  async obtenerTodosDispositivosPersonales() {
    this.instanciarDBDexie()
    return await this.db.dispositivosPersonales.toArray()
  },
  async agregarDispositivoCliente(dispositivoCliente) {
    this.instanciarDBDexie()
    await this.db.dispositivosClientes.add(dispositivoCliente)
  },
  async removerDispositivoCliente(idDispositivoCliente) {
    this.instanciarDBDexie()
    await this.db.dispositivosClientes.delete(idDispositivoCliente)
  },
  async removerDispositivoPersonal(idDispositivoPersonal) {
    this.instanciarDBDexie()
    await this.db.dispositivosPersonales.delete(idDispositivoPersonal)
  },
  async agregarDispositivoPersonal(dispositivoPersonal) {
    this.instanciarDBDexie()
    await this.db.dispositivosPersonales.put(dispositivoPersonal)
  },
  async actualizarDispositivoPersonal(dispositivoPersonal) {
    this.instanciarDBDexie()
    await this.db.dispositivosPersonales.put(dispositivoPersonal, dispositivoPersonal.id)
  },
  async actualizarDispositivoCliente(dispositivo) {
    this.instanciarDBDexie()
    await this.db.dispositivosClientes.put(dispositivo, dispositivo.id)
  }
}
