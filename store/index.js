export const state = () => ({
  job_ids: [],
  dispositivos_personales: [{id:1, nombre: 'Manuel', mac: 12345678}],
  dispositivos_clientes: [{id:1, nombre: 'Manuel', mac: 12345678}]
})

export const mutations = {
  STORE_JOB_IDS(state, job_ids) {
    state.job_ids = job_ids
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
  }
}

export const actions = {
  storeJobIds({commit}, job_ids) {
    commit('STORE_JOB_IDS', job_ids)
  },
  addDispositivoCliente({commit}, dispositivo_cliente) {
    commit('ADD_DISPOSITIVO_CLIENTE', dispositivo_cliente)
  },
  addDispositivoPersonal({commit}, dispositivo_personal) {
    // console.log(dispositivo_personal)
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
  }
}