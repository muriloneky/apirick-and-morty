<template>
    <div class="character-details">
      <img :src="character.image" :alt="character.name" class="character-image">
      <h1>{{ character.name }}</h1>
      <h4>Status: {{ character.status }}</h4>
      <h4>Species: {{ character.species }}</h4>
      <h4>Location: {{ character.location.name }}</h4> <!-- Acesse o nome da localização -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        character: {},
      };
    },
    created() {
      const characterId = this.$route.params.id;
  
      axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
          this.character = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
<style >
body{
 background: #081119;
 background-image: url("~@/assets/background.gif");
 
}

.character {
 display: flex;
 justify-content: center;
 align-items: center;
}
.info-character{
 display: table-column;
 justify-content: center;
 margin: 0 auto;
}
img.logo{
 width: 70%;
}
img {
 height: 20%;
 width: 20%;
 border-radius: 1rem;
}

h4 {
 margin: 1rem;
 color: #ffffff;
 background: none;
 border-radius: 0.4rem;
 font-weight: inherit;
 padding: 0.2rem;
}

@media screen and (max-width: 918px) {
.content {
 grid-template-columns: 1fr 1fr;
}
.character {
 display: flex;
 align-items: center;
}
h2{
 font-size: 1rem;
}
}


@media screen and (max-width: 540px) {
.content {
 width: 90%;
 grid-template-columns: 1fr;
}
.character {
 display: flex;
 align-items: center;
}

}

</style>






