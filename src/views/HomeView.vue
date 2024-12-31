<template>
  <!-- Banner -->
  <Banner />

  <!-- Servicios -->
  <Servicios />
  <!-- Productos -->
  <Productos />
  <!-- Youtube -->
  <Youtube />
  <!-- Ubicacion -->
  <!--- <Ubicacion /> -->
  <!-- Marcas -->
  <Marcas />
</template>

<script>
import Banner from '@/components/Index/Banner.vue';
import Servicios from '@/components/Index/Servicios.vue';
import Youtube from '@/components/Index/Youtube.vue';
import Marcas from '@/components/Index/Marcas.vue';
import Productos from '@/components/Index/Productos.vue';
import Ubicacion from '@/components/Index/Ubicacion.vue';
export default {
  name: 'ThreeModel',
  components: {
    Banner,
    Servicios,
    Productos,
    Youtube,
    Marcas,
    Ubicacion
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>

<style scoped></style>