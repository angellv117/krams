<template>
  <!-- Banner -->
  <Banner />
  <!-- Servicios -->
  <Servicios />
  <!-- Youtube -->
  <Youtube />
  <!-- Marcas -->
  <Marcas />
</template>

<script>
import Banner from '@/components/Index/Banner.vue';
import Servicios from '@/components/Index/Servicios.vue';
import Youtube from '@/components/Index/Youtube.vue';
import Marcas from '@/components/Index/Marcas.vue';
export default {
  name: 'ThreeModel',
  components: {
    Banner,
    Servicios,
    Youtube,
    Marcas
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