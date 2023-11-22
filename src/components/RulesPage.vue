<template>
  <div class="rules-page">
    <img class="image_rules" src="../assets/rules.jpg"/>
  </div>
</template>

<script>
export default {
name: 'RulesPage',
}
</script>

<style scoped>
.rules-page {
display: flex;
justify-content: center; 
align-items: center; 
margin-top: 5%;

}

.image_rules {
width: 60%;
}
@media screen and (max-width: 600px) {
  .image_rules {
    width: 90%;
    margin-top: 10%;
  }
}


</style>

  