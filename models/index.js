var mongoose=require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mmongodb+srv://rajat456bansal:Rajat%401705@cluster0-w5iyn.mongodb.net/todo-list?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology:true} );


mongoose.Promise=Promise;

module.exports.Todo=require("./todo");