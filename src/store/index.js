
import { createStore } from 'vuex';
import axios from 'axios';

const apiUrl = 'https://666780f9a2f8516ff7a7aaf0.mockapi.io';

export default createStore({
  state: {
    gastos: []
  },
  mutations: {
    setGastos(state, gastos) {
      state.gastos = gastos;
    },
    agregarGasto(state, nuevoGasto) {
      state.gastos.push(nuevoGasto);
    },
    eliminarGasto(state, gastoId) {
      state.gastos = state.gastos.filter(gasto => gasto.id !== gastoId);
    }
  
  },
  actions: {
    async fetchGastos({ commit }) {
      try {
        const response = await axios.get(`${apiUrl}/gastos`);
        commit('setGastos', response.data);
      } catch (error) {
        console.error('Error fetching gastos:', error);
      }
    },
    async crearGasto({ commit }, nuevoGasto) {
      try {
        const response = await axios.post(`${apiUrl}/gastos`, nuevoGasto);
        commit('agregarGasto', response.data);
      } catch (error) {
        console.error('Error creating gasto:', error);
      }
    },
    async eliminarGasto({ commit }, gastoId) {
      try {
        await axios.delete(`${apiUrl}/gastos/${gastoId}`);
        commit('eliminarGasto', gastoId);
      } catch (error) {
        console.error('Error deleting gasto:', error);
      }
    }
    
  },
  getters: {
    gastos(state) {
      return state.gastos;
    }
    
  }
});
