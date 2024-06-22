<template>
    <div class="container">
      <div class="estadisticas-container">
        <h2>Estadísticas de Gastos</h2>
        <table class="stats-table">
          <tbody>
            <tr>
              <td>Total de Gastos:</td>
              <td>${{ totalGastos }}</td>
            </tr>
            <tr>
              <td>Gasto más alto:</td>
              <td>${{ gastoMasAlto }}</td>
            </tr>
            <tr>
              <td>Gasto promedio:</td>
              <td>${{ promedioGastos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer class="footer">
        <p>Seguimiento de gastos</p>
        <p class="creadores">Creado por: Tomas y Agustina</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      gastos() {
        return this.$store.getters.gastos;
      },
      totalGastos() {
        return this.gastos.reduce((total, gasto) => total + gasto.amount, 0);
      },
      gastoMasAlto() {
        if (this.gastos.length === 0) return 0;
        return Math.max(...this.gastos.map(gasto => gasto.amount));
      },
      promedioGastos() {
        if (this.gastos.length === 0) return 0;
        return (this.totalGastos / this.gastos.length).toFixed(2);
      }
    },
    mounted() {
      this.$store.dispatch('fetchGastos'); // Cargar gastos al montar el componente
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente EstadisticasGastos */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(50vh - 30px); /* Ajustar el alto a la mitad de la ventana menos 30px */
    background-color: #f0f0f0; /* Color de fondo */
  }
  
  .estadisticas-container {
    width: 100%;
    max-width: 600px; /* Ancho máximo de la tabla */
    margin-top: 10px; /* Reducción del espacio superior */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white; /* Color de fondo de la tabla */
  }
  
  .stats-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .stats-table td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  
  .stats-table td:first-child {
    font-weight: bold;
  }
  
  .footer {
    margin-top: 10px; /* Reducción adicional del espacio entre contenido y footer */
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  
  .creadores {
    float: right;
  }
  </style>
  