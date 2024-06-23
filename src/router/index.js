import { createRouter, createWebHistory } from 'vue-router';
import GastosList from '../components/GastosList.vue';
import NuevoGasto from '../components/NuevoGasto.vue';
import EstadisticasGastos from '../components/EstadisticasGastos.vue';

const routes = [
  { path: '/', component: GastosList },
  { path: '/nuevo-gasto', component: NuevoGasto },
  { path: '/estadisticas', component: EstadisticasGastos }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
