<template lang="pug">
  div
    div
      v-form
        v-text-field(
          v-model="nuevoDispositivo.nombre"
          label="Nombre"
        )
        v-text-field(
          v-model="nuevoDispositivo.mac"
          label="MAC"
        )
        span(v-if="typeof nuevoDispositivo.id == 'undefined'" )
          v-btn(@click="agregandoDispositivo(nuevoDispositivo)" color="primary") Agregar dispositivo
        span(v-else)
          v-btn(@click="editandoDispositivo()" color="warning") Actualizar dispositivo
    div
      v-data-table(
        :headers="headers"
        :items="obtenerDispositivosClientes"
      )
        template( v-slot:item.acciones="{ item }" )        
          v-btn( @click="nuevoDispositivo = Object.assign({}, item)" ) Editar
          v-btn( @click="removerDispositivoCliente(item.id)" ) Eliminar
          
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'obtenerDispositivosClientes'
    ])
  },
  data() {
    return {
      nuevoDispositivo: {},
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'nombre'},
        {text: 'MAC', value: 'mac'},
        {text: 'Acciones', value: 'acciones'}
      ]
    }
  },
  mounted() {
    this.llenarDispositivosClientes()
  },
  methods: {
    ...mapActions([
      'llenarDispositivosClientes',
      'agregarDispositivoCliente',
      'removerDispositivoCliente',
      'editarDispositivoCliente'
    ]),
    limpiarNuevoDispositivo() {
      this.nuevoDispositivo = {}
    },
    async agregandoDispositivo() {
      await this.agregarDispositivoCliente(this.nuevoDispositivo)
      this.limpiarNuevoDispositivo()
    },
    async editandoDispositivo() {
      await this.editarDispositivoCliente(this.nuevoDispositivo)
      this.limpiarNuevoDispositivo()
    }
  }
}
</script>
