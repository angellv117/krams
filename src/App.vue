<template>
   <!-- Contenido principal -->
   <div id="app">
    <router-view />
  </div>

  <FooterKrams />

</template>

<script>
import FooterKrams from '@/components/Footer.vue';
export default {
  components: {
    FooterKrams
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

<style scoped>

</style>