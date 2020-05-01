
const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    user:'myuser',
    password:'mypass',
    database:'mytestdb'
});

connection.query(
    `SELECT * from persons`,
    function(err,results,fields){
        if(err){
            console.error(err)
        }
        else{
            console.log(results)   //results == rows
            console.log(fields)    //fields == columns(info of columns)
        }
        connection.close()

    }
);