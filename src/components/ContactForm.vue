<template>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.name" type="text" placeholder="Nom" />
      <input v-model="form.email" type="email" placeholder="Email" />
      <textarea v-model="form.message" placeholder="Message"></textarea>
      <button type="submit">Envoyer</button>
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
  
  
  <style scoped>

.contact-page {
    text-align: center;
    padding: 20px;
    margin-top: 100px;
  }
  
  .form{
    margin-top: 50px;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .contact-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  