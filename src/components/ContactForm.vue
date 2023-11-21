<template>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form" />
      <input v-model="form.name" type="text" name="name" placeholder="Nom" />
      <input v-model="form.email" type="email" name="email" placeholder="Email" />
      <textarea v-model="form.message" name="message" placeholder="Message"></textarea>
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
        },
        isSubmitted: false
      };
    },
    methods: {
      handleSubmit() {
        // Vous pouvez ajouter ici une logique de validation ou de traitement des données
        console.log("Le formulaire a été soumis avec : ", this.form);
  
        // Après la soumission, vous pourriez vouloir réinitialiser le formulaire ou gérer les états de l'interface utilisateur
        this.isSubmitted = true;
        this.resetForm();
      },
      resetForm() {
        this.form = { name: '', email: '', message: '' };
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
  