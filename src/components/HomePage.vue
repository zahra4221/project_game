<template>
    <div class="home-container">
      <div class="logo-animation">
        <!-- Here, you will insert your logo with a CSS animation -->
        <img src="@/assets/logo_brand.png" alt="Brand Hunt Logo" />
      </div>
      <div class="welcome-message">
        <h1>Welcome to Brand Hunt!</h1>
        <p>Dive into the exciting world of brands and advertising with our interactive game.</p>
      </div>
    </div>
  </template>
  
  <script>
  // Your script goes here

  export default {
    name: 'HomePage',
    // Les données, méthodes et hooks du cycle de vie viendront ici si nécessaire.
  };
  </script>
  
  <style scoped>
  .home-container {
    background-color: black;
    color: white;
    text-align: center;
  }
  
  .logo-animation img {
    /* Animation CSS pour faire tourner et grossir le logo */
    animation: spinAndGrow 2s ease-in-out forwards;
    width:35%
  }
  
  @keyframes spinAndGrow {
    from {
      transform: scale(0.1) rotate(0deg);
      opacity: 0.1;
    }
    to {
      transform: scale(1) rotate(360deg);
      opacity: 1;
    }
  }
  
  .welcome-message h1 {
    margin-top: 20px;
  }
  
  .welcome-message p {
    margin-bottom: 20px;
  }
  </style>
  