var md      = require('mongodb');
var mdb_client =md.MongoClient;
var url_ = "mongodb://127.0.0.1:27017/mernstack_feb";
var dbase ="";

var db_conn_info={db_url:url_,db_client:mdb_client};
// mdb_client.connect(url_,{useNewUrlParser:true,useUnifiedTopology:true},function (err,client) {
//     if(err){console.log(" Error while connecting tlo DB");}
//     else {dbase = client.db();console.log(" Connected to Database!!!");}
    
// });

module.exports = db_conn_info;