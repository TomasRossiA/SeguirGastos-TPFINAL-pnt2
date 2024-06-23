<template>
    <div class="container">
      <form @submit.prevent="crearNuevoGasto" class="gasto-form">
        <h2>Crear Nuevo Gasto</h2>
        <div class="form-group">
          <label for="date">Fecha:</label>
          <input v-model="fecha" type="date" id="date" required>
        </div>
        <div class="form-group">
          <label for="category">Categoría:</label>
          <input v-model="categoria" type="text" id="category" required>
        </div>
        <div class="form-group">
          <label for="description">Descripción:</label>
          <input v-model="descripcion" type="text" id="description" required>
        </div>
        <div class="form-group">
          <label for="amount">Monto:</label>
          <input v-model.number="monto" type="number" id="amount" required>
        </div>
        <button type="submit">Guardar Gasto</button>
      </form>
      <footer class="footer">
        <p class="app-name">Seguimiento de gastos</p>
        <p class="creadores">Creado por: Tomas y Agustina</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fecha: '',
        categoria: '',
        descripcion: '',
        monto: null
      };
    },
    methods: {
      async crearNuevoGasto() {
        if (!this.fecha || !this.categoria || !this.descripcion || !this.monto) {
          console.error('Todos los campos son obligatorios.');
          return;
        }
  
        try {
          await this.$store.dispatch('crearGasto', {
            date: Date.parse(this.fecha) / 1000,
            category: this.categoria,
            description: this.descripcion,
            amount: this.monto
          });
  
         
          this.fecha = '';
          this.categoria = '';
          this.descripcion = '';
          this.monto = null;
        } catch (error) {
          console.error('Error al crear gasto:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    background-color: #f0f0f0;
  }
  
  .gasto-form {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="date"],
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
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
  
  