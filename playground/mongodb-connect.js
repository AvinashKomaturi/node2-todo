const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client)=>{
	if(err){
		return console.log('Unable to Connect to MongoDB server');
	}
	console.log("Connected to MongoDB server");
	const db = client.db("TodoApp");
	// db.collection("Todos").insertOne({
	// 	text:"something to do",
	// 	completed: false
	// },(err,result) => {
	// 	if(err){
	// 		return ("Unable to insert Todo",err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined ,2));
	// });
		db.collection("Users").insertOne({
		name:"Avinash",
		age: 20,
		location:"Gwalior"
	},(err,result) => {
		if(err){
			return ("Unable to insert Todo",err);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined ,2));
	});
	client.close();
});