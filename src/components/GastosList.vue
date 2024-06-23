<template>
    <div class="gastos-list-container">
      <h2>Lista de Gastos</h2>
      <table class="gastos-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="gasto in gastos" :key="gasto.id">
            <td>{{ formatDate(gasto.date) }}</td>
            <td>{{ gasto.category }}</td>
            <td>{{ gasto.description }}</td>
            <td>${{ gasto.amount }}</td>
            <td>
              <button @click="eliminarGasto(gasto.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <footer class="footer">
        <p class="app-name">Seguimiento de gastos</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      gastos() {
        return this.$store.getters.gastos;
      }
    },
    methods: {
      async eliminarGasto(gastoId) {
        try {
          await this.$store.dispatch('eliminarGasto', gastoId);
        } catch (error) {
          console.error('Error al eliminar gasto:', error);
        }
      },
      formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('es-ES');
      }
    },
    mounted() {
      this.$store.dispatch('fetchGastos');
    }
  };
  </script>
  
  <style scoped>
  .gastos-list-container {
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  
  .gastos-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .gastos-table th,
  .gastos-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .gastos-table th {
    background-color: #007bff;
    color: white;
  }
  
  .gastos-table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #c82333;
  }
  
  button:focus {
    outline: none;
  }
  
  .footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  
  .app-name {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .creadores {
    float: right;
  }
  </style>
  