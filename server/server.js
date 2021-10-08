const express = require('express');
const app = express();
const elasticsearch = require('elasticsearch');
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 5000 );
app.use(cors());
app.use(bodyParser.json());

const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
 });

client.ping({ requestTimeout: 30000 }, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});

app.get('/search', function (req, res){
   
    let body = {
      size: 10,
      from: 0,
      query: {
		  
		"bool": {  
			"must": {
				"simple_query_string": {  
					
					"query":  req.query['title'],
					"fields": [ "title^2", "desc"  ] 
				}

			},
			 "should": [  
				{
				  "exists": {
					"field": "status"
				  }
				}
			  ],
			  "must_not": {
				"term": {
				  "status": ""
				}
			  },
			  "filter": {
				"term": {
					"status": req.query['status']
				}
			} 
	  
		} 
            
        }
    }
   
    client.search({index:'vue-elastic', body:body, type:'posts_list'})
    .then(results => {
            res.send(results.hits.hits);
        
    })
    .catch(err=>{
      //console.log(err)
      res.send([]);
    });
  
  });


  app.post("/addpost", (req, res) => {  
	
	var post = 
		[ 
			{
				'title': req.title,
				'desc': req.desc,
				'url': req.url,
				'status': req.status
			}
		]; 

	client.bulk({index: 'vue-elastic', type: 'posts_list', body: post });
 
})
  


app.put("/update/id", (req, res) => { 

	sourceData = { 
		doc: {
			"title" : "Test"
		}
	} 
 
	var docParam = {
		id: req.id,
		index:'vue-elastic',
		type: 'posts_list',
		body: sourceData
	};
	
	 
	var response = client.update(docParam, sourceData);
	console.log(response);

});

app.listen(app.get('port'), function() {
    console.log('Your node.js server is running on PORT: ',app.get('port'));
});