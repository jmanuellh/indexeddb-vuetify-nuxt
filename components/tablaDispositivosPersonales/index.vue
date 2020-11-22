<template lang="pug">
  v-data-table(
    :headers="headers"
    :items="getDispositivosPersonales"
  )
    template( v-slot:item.acciones="{ item }" )
      v-btn( @click="removeDispositivoPersonal(item.id)" ) Eliminar
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getDispositivosPersonales'])
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
  methods: {
    ...mapActions(['removeDispositivoPersonal'])
  }
}
</script>
