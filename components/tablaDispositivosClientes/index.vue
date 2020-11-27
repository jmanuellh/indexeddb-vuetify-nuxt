<template lang="pug">
  div
    div
      v-btn( @click="obtenerDispositivosClientes()" ) getDispositivosClientes
    div
      v-btn( @click="actTabla()" ) Actualizar tabla
    div
      v-btn( @click="mostrarDatosTabla" ) showDatosTabla
    //- div
    //-   v-form
    //-     v-text-field(
    //-       v-model="nuevoDispositivo.nombre"
    //-       label="Nombre"
    //-     )
    //-     v-text-field(
    //-       v-model="nuevoDispositivo.mac"
    //-       label="MAC"
    //-     )
    //-     v-btn(@click="agregarDispositivo()" color="primary") Agregar dispositivo
    //- div
    //-   v-data-table(
    //-     :headers="headers"
    //-     items="[]"
    //-   )
    //-     template( v-slot:item.acciones="{ item }" )
    //-       v-btn( @click="removeDispositivoCliente(item.id)" ) Eliminar
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { openDB } from 'idb';
import Dexie from 'dexie';
import database from '~/api/database';

export default {
  computed: {
    ...mapGetters(['getDBDispositivosClientes', 'showDispositivosClientes'])
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
  mounted() {
    this.cargarDB()
  },
  methods: {
    ...mapActions([
      'removeDispositivoCliente',
      'abrirDBDispositivosClientes',
      'pushDispositivosClientes',
      'addDispositivoCliente',
      'getDB',
      'agregarDispositivoADB',
      'addDispositivo',
      'cargarDB',
      'actualizarTabla',
      'getDispositivosClientes']),
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
    },
    agregarDispositivo() {
      this.addDispositivo(this.nuevoDispositivo)
    },
    mostrarDatosTabla() {
      console.log(this.showDispositivosClientes)
      // this.getDispositivosClientes.forEach(element => {
      //   console.log('element:', element)
      // });
    },
    actTabla() {
      this.actualizarTabla()
    },
    obtenerDispositivosClientes() {
      // console.log(database.getDBDexie())
      // this.getDispositivosClientes(database.getDBDexie().dispositivosClientes)
      this.getDispositivosClientes()
    }
  }
}
</script>
