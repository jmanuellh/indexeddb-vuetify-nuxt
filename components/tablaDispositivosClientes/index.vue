<template lang="pug">
  div
    div
      v-btn( @click="abrirDBDispositivosClientes" ) Abrir DB
      v-btn( @click="obtenerDb" ) Obtener DB
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
    ...mapGetters(['getDispositivosClientes', 'getDb'])
  },
  data() {
    return {
      numero: 4,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'nombre'},
        {text: 'MAC', value: 'mac'},
        {text: 'Acciones', value: 'acciones'}
      ]
    }
  },
  mounted() {
    this.abrirDBDispositivosClientes().then(() => {
      console.log('mounted getDb: ', this.getDb)
    })
  },
  methods: {
    ...mapActions(['removeDispositivoCliente', 'abrirDBDispositivosClientes']),
    obtenerDb() {
      console.log(this.getDb)
    }
  }
}
</script>
