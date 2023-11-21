<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any suggestions or questions about our game, please feel free to send us a message.</p>
      <div class="contact-form">
        <form @submit.prevent="submitForm">

            <div class="form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm() {
        // Ici, vous pouvez ajouter le code pour envoyer le formulaire à un serveur ou effectuer d'autres actions.
        // Par exemple, vous pouvez afficher les données dans la console pour le moment :
        console.log("Form submitted with data:", this.formData);
        // Réinitialiser le formulaire après soumission :
        this.formData = {
          name: "",
          email: "",
          message: ""
        };
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
  