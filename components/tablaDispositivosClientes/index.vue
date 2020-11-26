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
        v-btn(@click="addDispositivoCliente(nuevoDispositivo)" color="primary") Agregar dispositivo
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
// import { openDB } from 'idb';

export default {
  computed: {
    ...mapGetters(['getDispositivosClientes', 'getDBDispositivosClientes'])
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
  created() {
    this.abrirDB()
  },
  methods: {
    ...mapActions([
      'removeDispositivoCliente',
      'abrirDBDispositivosClientes',
      'pushDispositivosClientes',
      'addDispositivoCliente',
      'getDB']),
    abrirDB() {
      this.getDB()



      // if(this.getDBDispositivosClientes) {
      //   console.log("entró a if")
      // } else {
      //   console.log("entró a else")
      //   const db = new Dexie('indexeddb-vuetify-nuxt');
      //   db.version(1).stores({
      //     dispositivosClientes: '++id, nombre, mac'
      //   })
      //   this.abrirDBDispositivosClientes(db)
      // }
    }
  }
}
</script>
