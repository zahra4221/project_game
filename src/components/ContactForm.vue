<template>
    <form @submit.prevent="handleSubmit" class="form-container">
      <input v-model="form.name" type="text" placeholder="Nom" class="input-field" />
      <input v-model="form.email" type="email" placeholder="Email" class="input-field" />
      <textarea v-model="form.message" placeholder="Message" class="input-field textarea-field"></textarea>
      <button type="submit" class="submit-button">Envoyer</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Logique d'envoi du formulaire
      }
    }
  };
  </script>
  
  <style>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .textarea-field {
    height: 100px;
    resize: vertical;
  }
  
  .submit-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>
  