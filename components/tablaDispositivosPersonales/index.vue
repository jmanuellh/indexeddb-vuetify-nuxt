<template lang="pug">
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
    ...mapActions(['llenarDispositivosPersonales', 'removerDispositivoPersonal'])
  }
}
</script>
