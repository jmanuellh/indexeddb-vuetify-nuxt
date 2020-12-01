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
        v-btn(@click="agregandoDispositivoPersonal(nuevoDispositivo)" color="primary") Agregar dispositivo
    div
      v-data-table(
        :headers="headers"
        :items="obtenerDispositivosPersonales"
      )
        template( v-slot:item.acciones="{ item }" )
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
      'agregarDispositivoPersonal'
    ]),
    async agregandoDispositivoPersonal() {
      await this.agregarDispositivoPersonal()
      this.limpiarNuevoDispositivo()
    },
    limpiarNuevoDispositivo() {
      this.nuevoDispositivo = {}
      console.log("se ejecuto limpiar")
    }
  }
}
</script>
