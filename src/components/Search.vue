<template>
<div class="searchcomponent">
    <div class="row">
	  <div class="col-6">
        <div class="msg  text-danger">{{ msg }}</div>
		<form v-model="searchform" @submit="checkInput">
		<div class="input-group input-group-lg"> 
		  <input type="text"   class="form-control col-md-4"  placeholder="Lorem" 
			@keyup.prevent="search" v-model="query" />

			<select class="form-control form-select custom-select" v-model="query2" @change="switchSelect($event)" > 
					<option value="" disabled selected>Select status</option>
                    <option value="true" selected>Active</option>
					<option value="false">Not active</option>		  
				</select> 
			
		</div></form>
     </div>
		 
    </div>
	<div class="row searchresults">
		<div class="col-12"><h2>Search results</h2></div>
	</div>
    <div class="row">
		<div v-if="data" v-for="(value, index) in data" 
		  :key="index"
		  :ref="`card_${index}`"
			 class="col-3 singleresult">
      
			<img class="img-responsive" :src="value._source.url"> 
			<h3 class="">{{value._source.title}}</h3>
			<p>{{value._source.desc}}</p>
			<p class="text-bottom">
				<span class="text-left"><router-link to="/edit" class="btn btn-small btn-warning">Edit</router-link></span>
				<span class="text-right"><router-link to="/delete" class="btn btn-small btn-danger">Delete</router-link></span>
			</p>  
        </div>
  </div>
  </div>
</template>
  

<script> 

export default {
  name: 'Search',
  data() {
    return {
      query: '',
      query2: '',
      data: [],
      selected: '',
      squery: '',
      searchform:{},
      msg:''
    }
  },
  methods: {
    switchSelect(event) {
      this.selected = event.target.value;   
    },
    checkInput(){
        if (this.query=='')
         this.msg="Please enter search query";
    },
    search() {
		this.squery=''; 
        this.msg='';  

		if (this.query2=='' && this.query=='') this.squery='title=*&status'; 
		
		if (this.query2!='' && this.query!='')
			this.squery = 'title='+this.query+'&status='+this.selected;

		
		if (this.query!=''&&this.query2=='')
			this.squery = 'title='+this.query; 

		if (this.query2!=''&&this.query=='') {
			//this.squery = 'status='+this.selected;
            this.checkInput();
        } 
		
		//console.log( this.squery );
		this.get_data(this.squery); 
       
    },
    get_data(query) {
      this.axios.get('http://localhost:5000/search?'+query)
                .then(response => {
                  this.data = response.data;  
            })
    }
  },
 watch: { 
  query:  function () {
      this.search();
    },
  selected:  function () {
      this.search();
     
  }	  
 },
   created()  {
    this.get_data('title=*&status=true');
    console.log(this.data);
  }
}
</script>

<style>
.searchcomponent { 
    margin-top: 1em;
    margin-bottom: 1em;
}
.searchresults {
	background-color: #eee;  
	margin-top: 1em;
    
}
.singleresult {
	border: 1px solid #eee;
    padding: 2em;
}
.img-responsive {
	max-height: 15vh;
}
</style>

