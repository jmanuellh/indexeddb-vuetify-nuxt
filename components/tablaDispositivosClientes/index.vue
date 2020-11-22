<template lang="pug">
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
      numero: 4,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'nombre'},
        {text: 'MAC', value: 'mac'},
        {text: 'Acciones', value: 'acciones'}
      ]
    }
  },
  methods: {
    ...mapActions(['removeDispositivoCliente'])
  }
}
</script>
