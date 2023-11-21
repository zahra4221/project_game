<template>
  <header>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/rules" class="nav-link">Rules</router-link>
      <router-link to="/timer" class="nav-link">Timer</router-link>
      <!-- <router-link to="/contact" class="nav-link">Contact</router-link> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>


<style scoped>
header {
  background-color: transparent;
  color: white;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  transition: background-color 0.3s ease;
  z-index: 1000; /* S'assure que l'en-tête reste au-dessus des autres éléments */
}

.nav-link {
  text-decoration: none;
  margin: 0 1rem;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 0.5rem 1rem;
  pointer-events: auto; /* Permet les événements de clic */
}

.nav-link:hover, .router-link-exact-active {
  background-color: white;
  color: black;
  border-radius: 5px; /* Optionnel: pour des coins arrondis */
}

/* Style supplémentaire pour le lien actif si vous utilisez vue-router */
.router-link-exact-active {
  font-weight: bold;
}
</style>


  