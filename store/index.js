export const state = () => ({
  job_ids: [],
  dispositivos_clientes: [{id:1, nombre: 'Manuel', mac: 12345678}, {id:2, nombre: 'Jose', mac: 12345678}],
  dispositivos_personales: [{id:1, nombre: 'Manuel', mac: 12345678}],
  dbDispositivosClientes: '',
  dbDispositivosPersonales: ''
})

export const mutations = {
  STORE_JOB_IDS(state, job_ids) {
    state.job_ids = job_ids
  },
  ADD_DISPOSITIVOS_CLIENTES(state, dispositivos_clientes) {
    dispositivos_clientes.map(dispositivo => {
      state.dispositivos_clientes.push(dispositivo)
    })
  },
  ADD_DISPOSITIVO_CLIENTE(state, dispositivo_cliente) {
    state.dispositivos_clientes.push(dispositivo_cliente)
  },
  ADD_DISPOSITIVO_PERSONAL(state, dispositivo_personal) {
    state.dispositivos_personales.push(dispositivo_personal)
  },
  REMOVE_DISPOSITIVO_PERSONAL(state, id_dispositivo_personal) {
    // state.dispositivos_personales.splice(state.dispositivos_personales.map(d => d.id).indexOf(id_dispositivo_personal))
    state.dispositivos_personales = state.dispositivos_personales.filter(d => d.id != id_dispositivo_personal)
  },
  REMOVE_DISPOSITIVO_CLIENTE(state, id_dispositivo_cliente) {
    // state.dispositivos_clientes.splice(state.dispositivos_clientes.map(d => d.id).indexOf(id_dispositivo_cliente))
    state.dispositivos_clientes = state.dispositivos_clientes.filter(d => d.id != id_dispositivo_cliente)
  },
  UPDATE_DISPOSITIVO_PERSONAL(state, dispositivo_personal) {
    let indexDispositivo = state.dispositivos_personales.map(d => d.id).indexOf(dispositivo_personal.id)
    state.dispositivos_personales[indexDispositivo] = dispositivo_personal
  },
  UPDATE_DISPOSITIVO_CLIENTE(state, dispositivo_cliente) {
    let indexDispositivo = state.dispositivos_clientes.map(d => d.id).indexOf(dispositivo_cliente.id)
    state.dispositivos_clientes[indexDispositivo] = dispositivo_cliente
  },
  ABRIR_DB(state, db) {
    state.dbDispositivosClientes = db
  }
}

export const actions = {
  storeJobIds({commit}, job_ids) {
    commit('STORE_JOB_IDS', job_ids)
  },
  // addDispositivosClientes({commit}, dispositivos_clientes) {
  //   commit('ADD_DISPOSITIVOS_CLIENTES', dispositivos_clientes)
  // },
  addDispositivoCliente({commit}, dispositivo_cliente) {
    commit('ADD_DISPOSITIVO_CLIENTE', dispositivo_cliente)
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
  abrirDBDispositivosClientes({commit, getters}) {
		return new Promise((resolve, reject) => {
			if(this.getDbDispositivosClientes) {
        console.log("if true: ", this.getDbDispositivosClientes)
        return resolve(this.getDbDispositivosClientes)
      }

			let request = indexedDB.open("dispositivos-clientes", 1);
      console.log("request: ", request)
      
			request.onerror = e => {
				reject('Error', e);
			};
      
			request.onsuccess = e => {
        commit('ABRIR_DB', e.target.result);
			};
			
			request.onupgradeneeded = e => {
				let db = e.target.result;
				db.createObjectStore("dispositivos-clientes", { autoIncrement: true, keyPath:'id' });
			};
		});
  },
  pushDispositivosClientes({commit, getters}) {
    let objectStore = getters.getDbDispositivosClientes.transaction(['dispositivos-clientes'],'readonly').objectStore('dispositivos-clientes')

    objectStore.getAll().onsuccess = function(event) {
      commit('ADD_DISPOSITIVOS_CLIENTES', event.target.result)
    };
    // return state.dispositivos_clientes
  }
}

export const getters = {
  getJobIds(state) {
    return state.job_ids
  },
  getDispositivosClientes(state) {
    return state.dispositivos_clientes
  },
  getDispositivosPersonales(state) {
    return state.dispositivos_personales
  },
  getDbDispositivosClientes(state) {
    return state.dbDispositivosClientes
  }
}
