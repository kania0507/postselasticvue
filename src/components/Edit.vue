<template>
  <div class="edit"> 
    <h1>{{ msg }}</h1>  
      
       <form>
      <div class="input-group input-group-lg">  

      <div class="form-outline col-12"> 
        <input type="text" id="title"  class="form-control col-md-6" placeholder="Title"   v-model="title" /> 
      </div>
  
      <div class="form-outline col-12">
        <input type="text" id="desc" class="form-control col-md-6" placeholder="Desc" v-model="desc" /> 
      </div>

      <div class="form-outline col-12">
        <select class="form-control form-select custom-select col-md-6" v-model="status" > 
          <option value="" disabled selected>Select status</option>
            <option value="true" selected>Active</option>
            <option value="false">Not active</option>		  
          </select> 
      </div>

        <div class="form-outline col-12">
        <input type="text" id="url" class="form-control col-md-6" placeholder="URL"  v-model="url" /> 
      </div>
        
      </div>
    </form>
     
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      msg: 'Edit post',
      status:'',
      title:'',
      desc:'',
      url:''
    }
  }
}
</script> 
 
<style scoped>
.hello{
  
}
</style>
