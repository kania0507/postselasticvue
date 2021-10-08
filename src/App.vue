<template>
  <div id="app" class="container">
	<Header></Header>
	<div class="row">
		<div class="col-12">
			<router-view></router-view>
		</div>
  </div>
  
  </div>
</template>


<script> 

import Header from './components/Header.vue'

export default {
  name: 'app',
  components: { Header },
  data() {
    return {
		 
    }
  },
  methods: {
  }
}
</script>

<style scoped> 
</style>

