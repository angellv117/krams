<template>
    <div class=" flex flex-col  md:justify-center md:items-center my-10" data-aos="fade-up">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center">
        <span class="text-indigo-800 uppercase tracking-widest">Productos recientes </span>
      </h1>
      
      <div class="w-full max-w-6xl px-4 mt-2">
        <Carousel
          :items-to-show="4"
          :wrap-around="true"
          :transition="1000"
          :autoplay="3000"
          :breakpoints="breakpoints"
        >
          <Slide v-for="producto in productos" :key="producto.id" >

            <div class="carousel__item px-2">
              <Card
                :title="producto.nombre"
                :buttonText="`Ver`"
                :id="producto.id"
                :imageClass="`product-image`"
                :price="producto.precio"
                :image="serverUrl + '/' + producto.imagen"
              />
            </div>
          </Slide>
  
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import Card from '@/components/Card.vue';
  
  export default {
    components: {
      Card,
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        productos: [],
        serverUrl: process.env.VUE_APP_API_URL,
        breakpoints: {
          320: {
            itemsToShow: 1,
            snapAlign: 'center',
          },
          768: {
            itemsToShow: 2,
            snapAlign: 'center',
          },
          1024: {
            itemsToShow: 3,
            snapAlign: 'start',
          },
          1280: {
            itemsToShow: 4,
            snapAlign: 'start',
          },
        },
      };
    },
    async mounted() {
      this.productos = await this.$store.dispatch('getFirst8');
      this.productos = this.$store.getters['getProductos'];
    },
  };
  </script>
  
  <style scoped>
  .carousel__item {
    min-height: 200px;
    width: 100%;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0);
  }
  
  .carousel__slide--prev {
    opacity: 0.7;
    transform: rotateY(-20deg);
  }
  
  .carousel__slide--next {
    opacity: 0.7;
    transform: rotateY(20deg);
  }
  </style>