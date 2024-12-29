<template>
    <div class="min-h-screen flex flex-col md:flex-row md:justify-center md:items-center bg-black">
      <!-- Contenido existente -->
      <div class="md:basis-1/2 flex flex-col justify-center items-center text-center px-6 py-10" data-aos="fade-down">
        <h1 class="text-6xl font-bold leading-tight">
          <span class="text-white uppercase tracking-widest">Kram's</span>
        </h1>
        <p class="mt-4 text-lg md:text-xl text-white max-w-lg">
          Hola! Vendemos audífonos, cargadores, cables, bocinas, lámparas, figuras anime, peluches, vasos, termos, 
          tazas, laptops, accesorios para computadora y así
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <a href="#servicios"
            class="bg-indigo-800 py-2 px-6 rounded-lg text-lg text-white hover:bg-indigo-500">
            Descubrir más
          </a>
          <a href="#contacto"
            class="border-2 py-2 px-6 rounded-lg text-lg text-white hover:border-indigo-500  hover:text-indigo-500">
            Contáctanos
          </a>
        </div>
      </div>
  
      <!-- Sección del modelo 3D -->
      <div class="md:basis-1/2 flex justify-center items-center px-4 py-10" data-aos="fade-down">
        <div class="z-10 max-w-sm md:max-w-md lg:max-w-lg w-full hidden lg:block">
          <Model3D :modelUrl="stitch" :scalex="2" :scaley="1" :scalez="75" />
        </div>
        <div class="z-10 max-w-sm md:max-w-md lg:max-w-lg w-full hidden lg:block">
          <Model3D :modelUrl="saitama" :scalex="2" :scaley="1" :scalez="75" />
        </div>
        <div class="z-10 max-w-sm md:max-w-md lg:max-w-lg w-full">
          <Model3D :modelUrl="deadpool" :scalex="2" :scaley="1" :scalez="75" />
        </div>
      </div>
    </div>
  </template>
  
  

<script>
import Model3D from '@/components/Model3D.vue';
export default {
    name: 'Banner',
    components: {
        Model3D
    },
    data() {
        return {
            cat: '/Models/Cat/scene.gltf',
            stitch: '/Models/Banner/stitch.glb',
            saitama: '/Models/Banner/saitama.glb',
            deadpool: '/Models/Banner/deadpool.glb',
        }
    }
}
</script>

<style scoped>

</style>
