<template lang="pug">
  v-data-table(
    :headers="headers"
    :items="getDispositivosPersonales"
  )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getDispositivosPersonales'])
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
    console.log(this.getDispositivosPersonales)
  }
}
</script>