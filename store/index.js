import Database from '~/api/database';

export const state = () => ({
  dispositivos_clientes: [],
  dispositivos_personales: [],
  dbDispositivosClientes: '',
  dbDispositivosPersonales: ''
})

export const mutations = {
  LLENAR_DISPOSITIVOS_CLIENTES(state, dispositivos_clientes) {
    state.dispositivos_clientes = dispositivos_clientes
  },
  LLENAR_DISPOSITIVOS_PERSONALES(state, dispositivosPersonales) {
    state.dispositivos_personales = dispositivosPersonales
  }
}

export const actions = {
  addDispositivoCliente({commit, getters}, dispositivo_cliente) {
      let objectStore = getters.getDbDispositivosClientes.transaction(['dispositivos-clientes'], 'readwrite').objectStore('dispositivos-clientes')

      objectStore.add(dispositivo_cliente).onsuccess = function(event) {
        commit('ADD_DISPOSITIVO_CLIENTE', Object.assign({id: event.target.result}, dispositivo_cliente))
        resolve()
      };

			objectStore.onerror = e => {
				reject('Error:', e);
			};
  },
  addDispositivoPersonal({commit}, dispositivo_personal) {
    commit('ADD_DISPOSITIVO_PERSONAL', dispositivo_personal)
  },
  removeDispositivoPersonal({commit}, id_dispositivo_personal) {
    commit('REMOVE_DISPOSITIVO_PERSONAL', id_dispositivo_personal)
  },
  removeDispositivoCliente({commit}, id_dispositivo_cliente) {
    commit('REMOVE_DISPOSITIVO_CLIENTE', id_dispositivo_cliente)
  },
  updateDispositivoCliente({commit}, dispositivo_cliente) {
    commit('UPDATE_DISPOSITIVO_CLIENTE', dispositivo_cliente)
  },
  updateDispositivoPersonal({commit}, dispositivo_personal) {
    commit('UPDATE_DISPOSITIVO_PERSONAL', dispositivo_personal)
  },
  abrirDBDispositivosClientes({commit, getters}, db) {
		// return new Promise((resolve, reject) => {
      // if(getters.getDbDispositivosClientes) {
        // console.log(getters.getDbDispositivosClientes)
    //     resolve()

    //   } else {
        // const db = new Dexie('indexeddb-vuetify-nuxt');
        // db.version(1).stores({
        //   dispositivosClientes: '++id, nombre, mac'
        // });
        commit('ABRIR_DB', db);
    //     console.log("entró a else")
    //     resolve()

    //   }
		// });
  },
  pushDispositivosClientes({commit, getters}) {
    let objectStore = getters.getDbDispositivosClientes.transaction(['dispositivos-clientes'],'readonly').objectStore('dispositivos-clientes')

    objectStore.getAll().onsuccess = function(event) {
      commit('ADD_DISPOSITIVOS_CLIENTES', event.target.result)
    };
    // return state.dispositivos_clientes
  },
  llenarDB({commit}) {
     commit('LLENAR_DB', Database.getDBDexie())
  },
  addDispositivo({commit}, dispositivo) {
    commit('ADD_DISPOSITIVO', dispositivo)
  },
  cargarDB({commit, getters}) {
    if(!getters.getDB) {
      console.log("if getters.getDB", getters.getDB)
      commit('CARGAR_DB', Database.getDBDexie())
      console.log("if despues getters.getDB", getters.getDB)
    } else {
      console.log("else getters.getDB", getters.getDB)
    }
  },
  actualizarTabla({commit}) {
    commit("ACTUALIZAR_TABLA", Database.getDBDexie())
  },
  async llenarDispositivosClientes({commit}) {
    commit('LLENAR_DISPOSITIVOS_CLIENTES', await Database.obtenerTodosDispositivosClientes())
  },
  async llenarDispositivosPersonales({commit}) {
    commit('LLENAR_DISPOSITIVOS_PERSONALES', await Database.obtenerTodosDispositivosPersonales())
  },
  agregarDispositivoCliente({ dispatch }, dispositivoCliente) {
    Database.agregarDispositivoCliente(dispositivoCliente).then(() => {
      dispatch('llenarDispositivosClientes')
    })
  }
}

export const getters = {
  obtenerDispositivosPersonales(state) {
    return state.dispositivos_personales
  },
  obtenerDispositivosClientes(state) {
    return state.dispositivos_clientes
  }
}
