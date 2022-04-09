var express = require("express");
var msg = require("./home");
var std_routes = require("./routes/studentRoutes");
var emp_routes = require("./routes/employeeRoutes");
var mongoose = require("mongoose");
var cors = require("cors");

var my_app = express();

my_app.get("/", (req, res) => {
  res.send("Welcome to Default page.");
});
// my_app.get('/home',(req,res)=>{
//     console.log(req.url);
//     res.send('<h1>'+msg+'</h1>')
// }); my_app.get('/login',(req,res)=>{
//     res.send('Welcome to Login page.')
// });
// my_app.get('/register',(req,res)=>{

//     res.send('Welcome to Signup page.')
// });
var url_ = "mongodb://127.0.0.1:27017/mernstack_feb";
my_app.use(express.urlencoded({ extended: true }));
my_app.use(express.json());

mongoose.connect(url_, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ,function (err) {
//   if(err) {console.log(" ERROR IN CONNECTING TO MONGODB SERVER THROUGH MONGOOSE!!!");}
//   else {console.log(" COnnected to DB.")}
// }
const db = mongoose.connection;

db.on("error", console.error.bind(console, " Connection Error"));
db.once("open", function () {
  console.log("Successfully Connected to DB.");
});
my_app.use(cors({ origin: "http://localhost:3000" }));
my_app.use("/student", std_routes);
my_app.use("/employee", emp_routes);
my_app.use("/static", express.static("images"));
my_app.use("/static", express.static("public"));

var server = my_app.listen(3002, () => {
  var port = server.address().port;

  console.log(" my app is running on ", port);
});
