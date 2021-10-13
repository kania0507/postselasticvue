<template>
  <div class="header row">   
    <div class="col-12">
    <router-link :to="'/'" class="col-2">Home</router-link> 
    <router-link :to="'Addpost'" class="col-2">Add new</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script> 
 
<style scoped>
.header{
  background-color: beige;
  
}
</style>
