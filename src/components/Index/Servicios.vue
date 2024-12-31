<template id="servicios">
    <div class=" bg-white text-gray-800 m-4 py-10 text-center" id="servicios" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            <span class="text-indigo-800 uppercase tracking-widest">Servicios</span>
        </h1>

        <p class="text-center text-lg">
            Conoce todo lo que podemos ofrecerte con nuestras herramientas y servicios de última generación.
        </p>
        <div class="flex justify-center items-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <Card data-aos="fade-right" v-for="servicio in servicios" :key="servicio.id" :title="servicio.nombre"
                    :description="servicio.descripcion" :image="servicio.imagen" :imageClass="`service-image`" />
            </div>
        </div>

    </div>
</template>

<script>
import Model3D from '@/components/Model3D.vue';
import Card from '@/components/Card.vue';
export default {
    name: 'Servicios',
    components: {
        Model3D,
        Card
    },
    data() {
        return {
            servicios: [
                {
                    id: 1,
                    nombre: 'Accesorios',
                    descripcion: 'Audífonos, cargadores, cables, bocinas y más',
                    imagen: '/Servicios/accesorios.jpeg'
                },
                {
                    id: 2,
                    nombre: 'Laptops',
                    descripcion: 'Laptops de última generación, con las mejores configuraciones y precios',
                    imagen: '/Servicios/laptops.jpeg'
                },
                {
                    id: 3,
                    nombre: 'Lamparas',
                    descripcion: 'Lamparas de última generación, con las mejores configuraciones y precios',
                    imagen: '/Servicios/lamparas.jpeg'
                },
                {
                    id: 4,
                    nombre: 'Anime',
                    descripcion: 'Figuras de Anime, peluches, impresiones 3D y más',
                    imagen: '/Servicios/anime.jpeg'
                }
            ],
            krams: '/Models/Banner/krams.glb'
        }
    }
}
</script>