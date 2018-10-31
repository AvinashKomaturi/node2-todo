const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client)=>{
	if(err){
		return console.log('Unable to Connect to MongoDB server');
	}
	console.log("Connected to MongoDB server");
	const db = client.db("TodoApp");

	//deleteMany

	// db.collection("Todos").deleteMany({text:"Eat Lunch"}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection("Todos").deleteOne({text:"Eat Lunch"}).then((result)=>{
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// });

	//findOneAndDelete
	db.collection("Users").findOneAndDelete({_id:new ObjectID("5bd6171fc78f8f00a42ba3f3")}).then((result)=>{
		console.log(result);
	});

	//delteDuplicates
	// db.collection("Users").deleteMany({name:"Avinash"}).then((result)=>{
	// 	console.log(result);
	// });

	//client.close();
});