<template>
    <FormProduct :key="product.id" @saveProduct="saveProduct" :productData="product" />
</template>

<script>
import swal from 'sweetalert2';
import FormProduct from './FormProduct.vue';

export default {
    components: {
        FormProduct
    },
    data() {
        return {
            product: {},
            previewUrl: null
        };
    },
    props: {
        id: {
            type: String,
            required: true
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
            this.product = this.$store.getters['getProducto']
            if (!this.product.id) {
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
        },
        async saveProduct(formData) {
            swal.fire({
                title: '¿Estás seguro de que deseas editar este producto?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Editar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.$store.dispatch('updateProducto', {
                        productoId: this.id,
                        product: formData
                    });
                    const status = this.$store.getters.getStatus;
                    
                    if (status) {
                        swal.fire({
                            title: 'Producto subido con éxito',
                            icon: 'success'
                        });
                    } else {
                        swal.fire({
                            title: 'Error al subir el producto',
                            icon: 'error'
                        });
                    }
                }
            });
        }
    }
};
</script>