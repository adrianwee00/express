import express from "express"
import path from "path"

const app = express();
 
app.get('/', function(req, res) {
    res.sendFile(path.join("/home/adrian/express", '/index.html'));
    })

app.listen(3000, () => {
    console.log("Successfull!");
})