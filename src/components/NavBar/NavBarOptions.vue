<template>
  <ul :class="[mobile? 'flex flex-col p-6 space-y-4' : 'font-medium flex space-x-8 rtl:space-x-reverse']">
    <li>
      <a href="/" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Inicio</a>
    </li>
    <li>
      <a href="#servicios"  @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Servicios</a>
    </li>
    <li>
      <a href="/productos" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Productos</a>
    </li>
    <li>
      <a href="#contacto" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Contacto</a>
    </li>
    <li v-if="admin">
      <a href="/agregarProducto" class="block py-2 px-3 text-red-500 hover:text-red-400">Agregar producto</a>
    </li>
    <li v-if="admin">
      <a  @click="logout" class="block py-2 px-3 text-red-500 hover:text-red-400">Salir</a>
    </li>

  </ul>
  <div v-if="mobile" class=" flex justify-center items-center">
    <Model3D :modelUrl="krams" :scalex="2" :scaley="1" :scalez="75" />
  </div>
</template>

<script>
import Model3D from '@/components/Model3D.vue';
import { loggedMixin } from '@/mixins/index.js';
import Swal from 'sweetalert2';

export default {
    mixins: [loggedMixin],
    props: {
        mobile: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Model3D
    },
    data() {
        return {
          krams: '/Models/Banner/krams.glb',
          admin: false,
          decode: ''
        }
    },
    methods: {
        toggleMenu() {
            this.$emit('toggleMenu');
        },
      //botón de salir, limpia el localstorage, el usaurio y el socket
        logout() {
          this.$store.commit('setLogged', false);
          this.$store.commit('setJwt', '');
          localStorage.clear();
          this.admin = false
      }
    },
    mounted() {
      this.$store.dispatch('decryptData', "userRol")
      this.decode = this.$store.getters.getDecode
      if (this.decode == "admin") {
        this.admin = true
        return
      }
    }
}
</script>