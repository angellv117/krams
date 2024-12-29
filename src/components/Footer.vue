<template>
<footer class="bg-black text-white py-8" id="contacto">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Datos de contacto -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Contacto</h2>
        <ul>
          <li><strong>Teléfono:</strong> 0000000000</li>
          <li><strong>Email:</strong> krams.090123@gmail.com</li>
          <li><strong>Dirección:</strong>Benito Juárez 3, Centro, 76700 Pedro Escobedo, Qro.</li>
        </ul>

        <div class="mt-6">
          <h3 class="text-lg font-semibold">Síguenos</h3>
          <div class="flex space-x-4 mt-2">
            <!-- Gmail Icon -->
            <a href="mailto:krams.090123" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-google"></i>
            </a>
            <!-- Instagram Icon -->
            <a href="https://instagram.com/blackcat86_86" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-instagram"></i>
            </a>
            <!-- YouTube Icon -->
            <a href="https://youtube.com/@BlackCat86.86" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-youtube"></i>
            </a>
            <!-- Facebook Icon -->
            <a href="https://facebook.com/kramspedroescobedoqro?mibextid=ZbWKwL" target="_blank" class="text-white hover:text-gray-400">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Mapa -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Ubicación</h2>
        <div class="aspect-w-16 aspect-h-9"   width="100%"
        height="300">
            <Mapa />
        </div>
      </div>
    </div>
  </div>
</footer>

</template>
<script>
import Mapa from './Mapa.vue';
export default {
  components: {
    Mapa
  }
}
</script>
