const express = require('express');
const app = express();
const cors = require('cors')

const getCsvDatas = require('./csv')

//Parse URL-encoded bodies
app.use(express.urlencoded({extended:true})); 

//Used to parse JSON bodies
app.use(express.json()); 

app.use(cors())


/*
You can try this request by downloading the VScode Rest api extension.

    POST http://localhost:4000/csvFileData
    Content-Type: application/json

    {
        "fileNames" : ["users.csv", "pace.csv"],
        "token" : "d174ee88-0cf3-41d2-b18f-1fd5f0b37919"
    }

*/

// csvFileData route takes post data(fileNames, token) and returns the contents of the files
app.post("/csvFileData", async (req,res) => {
    const {fileNames, token} = req.body

    // Normally the token is stored in the .env file and accessed via the dotenv library.
    if(token != "d174ee88-0cf3-41d2-b18f-1fd5f0b37919"){
        return res.json({status: "error", errorMsg: "Token is invalid."})
    }

    // If the fileNames array are not empty
    if(fileNames === undefined || fileNames.length == 0 || fileNames.some(e => e == "")){
        res.json({status: "error", errorMsg: "File names parameter is not valid."})
    } else {
        try {
            const response = await getCsvDatas(...fileNames)
            res.json({status: "success", responseData: response, columns: Object.keys(response[0])});
        } catch(err) {
            res.json({status: "error", errorMsg: err.toString()});
        }
    }
})

app.get('*', (req, res) => {
    return res.sendStatus(404);
})

app.listen(4000 , () => console.log("Server started"))