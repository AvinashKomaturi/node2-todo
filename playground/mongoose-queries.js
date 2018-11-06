const {ObjectID}= require ("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user")

// var id ="5be0b1b1471bf22d08a2b0c4";

// if (!ObjectID.isValid(id)){
// 	console.log("ID not Valid");
// }
// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log("Todos",todos)
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log("Todo",todo);
// });
// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log("ID not found");
// 	}
// 	console.log("Todo by ID",todo)
// }).catch((e) => console.log(e));

var id ="5bdf1677012ca81fb07ff3b1";

User.findById(id).then((user)=>{
	if(!user){
		return console.log("User not found");
	}
	console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));