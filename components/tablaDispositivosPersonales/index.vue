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
          v-btn(@click="agregandoDispositivoPersonal(nuevoDispositivo)" color="primary") Agregar dispositivo
        span(v-else)
          v-btn(@click="editandoDispositivoPersonal()" color="warning") Actualizar dispositivo
    div
      v-data-table(
        :headers="headers"
        :items="obtenerDispositivosPersonales"
      )
        template( v-slot:item.acciones="{ item }" )
          v-btn( @click="nuevoDispositivo = Object.assign({}, item)" ) Editar
          v-btn( @click="removerDispositivoPersonal(item.id)" ) Eliminar
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['obtenerDispositivosPersonales'])
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
    this.llenarDispositivosPersonales()
  },
  methods: {
    ...mapActions([
      'llenarDispositivosPersonales',
      'removerDispositivoPersonal',
      'agregarDispositivoPersonal',
      'editarDispositivoPersonal'
    ]),
    limpiarNuevoDispositivo() {
      this.nuevoDispositivo = {}
    },
    async agregandoDispositivoPersonal() {
      await this.agregarDispositivoPersonal(this.nuevoDispositivo)
      this.limpiarNuevoDispositivo()
    },
    async editandoDispositivoPersonal() {
      await this.editarDispositivoPersonal(this.nuevoDispositivo)
      this.limpiarNuevoDispositivo()
    }
  }
}
</script>
