<template>
  <div class="hello"> 
    <h1>{{ msg }}</h1>
     
    <form action="POST"  @submit.prevent="addNew">
      <div class="input-group input-group-lg">  

      <div class="form-outline col-12"> 
        <input type="text" id="title"  class="form-control col-md-6" placeholder="Title"   v-model="title" /> 
      </div>
  
      <div class="form-outline col-12">
        <input type="text" id="desc" class="form-control col-md-6" placeholder="Description" v-model="desc" /> 
      </div>

      <div class="form-outline col-12">
        <select class="form-control form-select custom-select col-md-6" v-model="status" > 
          <option value="" disabled selected>Select status</option>
            <option value="true" selected>Active</option>
            <option value="false">Not active</option>		  
          </select> 
      </div>

      <div class="form-outline col-12">
        <input type="text" id="url" class="form-control col-md-6" placeholder="http://placehold.it/300x300"  v-model="url" /> 
      </div>

      <div class="form-outline col-12">
        <input type="submit" id="submit" class="form-control col-md-6 btn btn-success"  value="Add" /> 
      </div> 
        
      </div>
    </form>

  </div>
</template>

<script>
//import qs from "qs";
export default {
  name: 'Add',
  data () {
    return {
      msg: 'Add new post',
      status:'',
      title:'',
      desc:'',
      url:'',
      postId:null,
      errors:[],
      data:[]
    }
  },
  methods: {
    addNew(){
      var post = { 'title': this.title, 'desc': this.desc, 'url': this.url, 'status': this.status }; 
      
      this.axios.post("http://localhost:5000/addpost", post)    
        .then(response => {
            console.log('res:'+response);
            this.postId = response.data.id;
            //console.log(this.postId);
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        }); 
        
      } 
  }
}
</script> 
 
<style scoped>
.hello{
  
}
</style>
