<template lang="pug">
  div
    div
      v-data-table(
        :headers="headers"
        :items="getDispositivosClientes"
      )
        template( v-slot:item.acciones="{ item }" )
          v-btn( @click="removeDispositivoCliente(item.id)" ) Eliminar
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getDispositivosClientes'])
  },
  data() {
    return {
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'nombre'},
        {text: 'MAC', value: 'mac'},
        {text: 'Acciones', value: 'acciones'}
      ]
    }
  },
  created() {
    this.abrirDBDispositivosClientes().then(() => {
      this.pushDispositivosClientes()
    })
  },
  methods: {
    ...mapActions(['removeDispositivoCliente', 'abrirDBDispositivosClientes', 'pushDispositivosClientes'])
  }
}
</script>
