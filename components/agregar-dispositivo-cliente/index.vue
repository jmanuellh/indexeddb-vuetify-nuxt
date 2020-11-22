<template lang="pug">
  div
    div
      v-text-field(label="Id" v-model.number="nuevoDispositivo.id" type="number")
    div
      v-text-field(label="Nombre" v-model="nuevoDispositivo.nombre")
    div
      v-text-field(label="MAC" v-model="nuevoDispositivo.mac")
    div
      v-btn(@click="addDispositivoCliente(nuevoDispositivo)") Agregar dispositivo
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      nuevoDispositivo: {}
    }
  },
  methods: {
    ...mapActions(['addDispositivoCliente'])
  }
}
</script>
