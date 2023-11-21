<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>



<style>
/* Ce style s'appliquera à tout l'intérieur de l'élément #app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white; /* Assurez-vous que le texte est visible sur fond noir */
  background-color: black; /* Fond noir pour toute l'application */
  margin-top: 60px;
}

/* Vous pouvez ajouter ce style si vous voulez que tout le fond de la page soit noir, pas seulement la partie où #app est rendu */
body {
  background-color: black;
}

</style>
