const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client)=>{
	if(err){
		return console.log('Unable to Connect to MongoDB server');
	}
	console.log("Connected to MongoDB server");
	const db = client.db("TodoApp");
	// db.collection("Todos").findOneAndUpdate({
	// 	_id: new ObjectID("5bd95996433a662803ffa81d")
	// },{
	// 	$set:{
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal:false
	// }).then((result) =>{
	// 	console.log(result);
	// })
	db.collection("Users").findOneAndUpdate({
		_id: new ObjectID("5bd61ca08803a61dc0ec8175")
	},{
		$set:{
			name:"Andrew"
		},
		$inc:{
			age: 1
		}
	},{
		returnOriginal:false
	}).then((result) =>{
		console.log(result);
	})
	//client.close();
});