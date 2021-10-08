<template>
  <div class="hello"> 
    <h1>{{ msg }}</h1> 
    <Search></Search> 
  </div>
</template>

<script>
import Search from './Search.vue'
export default {
  name: 'hello',
  components: { Search },
  data () {
    return {
      msg: 'CRUD App with searching in ES'
    }
  }
}
</script> 
 
<style scoped>
.hello{ 
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
