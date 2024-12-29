import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

// Importar Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

// Cambiar el título de la página al cambiar de ruta
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Kram´s';
  document.title = to.meta.title || defaultTitle;
  next();
});

// Configurar AOS después de montar la app
app.use(store).use(router).use(VuePlyr, {
  plyr: {}
}).mount('#app');

// Inicializar AOS
AOS.init({
  offset: 120, // Distancia desde la parte superior para activar la animación
  delay: 0, // Retraso antes de la animación
  duration: 1000, // Duración de la animación
  easing: 'ease-in-out', // Tipo de aceleración
  once: false, // La animación ocurre solo una vez
});
