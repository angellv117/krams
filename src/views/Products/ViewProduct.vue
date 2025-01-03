<template>
    <div class="min-h-screen bg-white m-4" data-aos="fade-up">

        <section class="py-8 bg-white md:py-16  antialiased">
            <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div class="shrink-0 max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
                        <img class="max-w-64 md:max-w-sm"
                            :src= "serverUrl + '/' + producto.imagen " alt="" />
                    </div>

                    <div class="mt-6 sm:mt-8 lg:mt-0 ">
                        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl ">
                            {{ producto.nombre }}
                        </h1>
                        <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                               $ {{ producto.precio }}
                            </p>

                        </div>

                        <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <a href="#" title=""
                                class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                role="button">
                                <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                </svg>
                                Add to favorites
                            </a>


                        </div>

                        <hr class="my-6 md:my-8 border-gray-200 " />

                        <p class="mb-6 text-gray-500 ">
                            {{ producto.descripcion }}
                        </p>

                        <div class="grid grid-cols-3 gap-4">
                            <div class="col-span-1">
                                <span class="font-bold">Alto</span> <br>
                                <span>{{ producto.alto }} cm</span>
                            </div>
                            <div class="col-span-1">
                                <span class="font-bold">Ancho</span> <br>
                                <span>{{ producto.ancho }} cm</span>
                            </div>
                            <div class="col-span-1">
                                <span class="font-bold">Largo</span> <br>
                                <span>{{ producto.largo }} cm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
    name: 'ViewProduct',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            producto: {},
            serverUrl: process.env.VUE_APP_API_URL
        }
    },
    mounted() {
        this.getProducto()
    },
    methods: {
        async getProducto() {
            await this.$store.dispatch('getProducto', {
                id: this.id
            })
            this.producto = this.$store.getters['getProducto']
            
            if (!this.producto.id) {
                swal.fire({
                    title: 'Producto no encontrado',
                    text: 'El producto que buscas no existe',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$router.push('/')
                    }
                })
            }
        }
    }
}
</script>
