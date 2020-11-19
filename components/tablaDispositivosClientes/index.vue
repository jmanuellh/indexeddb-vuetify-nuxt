<template lang="pug">
  v-data-table(
    :headers="headers"
    :items="getDispositivosClientes"
  )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getDispositivosClientes'])
  },
  data() {
    return {
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Nombre', value: 'nombre'},
        {text: 'MAC', value: 'mac'}
      ]
    }
  },
  mounted() {
    console.log(this.getDispositivosClientes)
  }
}
</script>