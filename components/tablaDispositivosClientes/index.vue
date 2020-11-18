<template lang="pug">
  v-data-table(
    :headers="headers"
  )
</template>

<script>
export default {
  data() {
    return {
      headers: ['id', 'nombre', 'mac']
    }
  }
}
</script>