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
  removerDispositivoCliente({dispatch}, idDispositivoCliente) {
    Database.removerDispositivoCliente(idDispositivoCliente).then(() => {
      dispatch('llenarDispositivosClientes')
    })
  },
  removerDispositivoPersonal({dispatch}, idDispositivoPersonal) {
    Database.removerDispositivoPersonal(idDispositivoPersonal).then(() => {
      dispatch('llenarDispositivosPersonales')
    })
  },
  updateDispositivoCliente({commit}, dispositivo_cliente) {
    commit('UPDATE_DISPOSITIVO_CLIENTE', dispositivo_cliente)
  },
  updateDispositivoPersonal({commit}, dispositivo_personal) {
    commit('UPDATE_DISPOSITIVO_PERSONAL', dispositivo_personal)
  },
  async llenarDispositivosClientes({commit}) {
    commit('LLENAR_DISPOSITIVOS_CLIENTES', await Database.obtenerTodosDispositivosClientes())
  },
  async llenarDispositivosPersonales({commit}) {
    commit('LLENAR_DISPOSITIVOS_PERSONALES', await Database.obtenerTodosDispositivosPersonales())
  },
  agregarDispositivoCliente({ dispatch }, dispositivoCliente) {
    if (Object.keys(dispositivoCliente).length) {
      Database.agregarDispositivoCliente(dispositivoCliente).then(() => {
        dispatch('llenarDispositivosClientes')
      })
    }
  },
  agregarDispositivoPersonal({ dispatch }, dispositivoPersonal) {
    if (Object.keys(dispositivoPersonal).length) {
      Database.agregarDispositivoPersonal(dispositivoPersonal).then(() => {
        dispatch('llenarDispositivosPersonales')
      }) 
    }
  },
  editarDispositivoPersonal({dispatch}, dispositivoPersonal) {
    Database.actualizarDispositivoPersonal(dispositivoPersonal).then(() => {
      dispatch('llenarDispositivosPersonales')
    })
  },
  editarDispositivoCliente({dispatch}, dispositivo) {
    Database.actualizarDispositivoCliente(dispositivo).then(() => {
      dispatch("llenarDispositivosClientes")
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
