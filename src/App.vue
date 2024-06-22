<!-- App.vue -->

<template>
  <div id="app">
    <header>
      <router-link to="/">Lista de Gastos</router-link>
      <router-link to="/nuevo-gasto">Nuevo Gasto</router-link>
      <router-link to="/estadisticas">Estadísticas de Gastos</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

header {
  background-color: #343a40;
  color: white;
  padding: 10px;
}

header a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

header a:hover {
  text-decoration: underline;
}
</style>
