import express from "express";
import cors from "cors";

const host = 'localhost'
const port = 3000


const app = express();


app.use(cors());

// use json middleware
app.use(express.json());


//routes 

// ------------ A + B Code -----------

app.post('/aAddB', (req, res) => {

    console.log ('Request body:' , req.body)


    //retreieve data
    const {a , b} = req.body


    // validate data
    if ( a === undefined || typeof a !== 'number'){
        return res.status(400).json({message : 'Error in "A" parameter' })
    }

    if (b === undefined || typeof b !== 'number'){
        return res.status(400).json({message : 'Error in "B" parameter' })
    }



    //logic
    const result = a + b



    //generate response
    const response = {
        message:  'Success' , result
    }

    //log response
    console.log('Response body :' , response)

    //send response
    res.json(response)
})

//------------ Pythagoras Code -----------

app.post('/pythagoras', (req, res) => {

    console.log ('Request body:' , req.body)


    //retreieve data
    const {a , b} = req.body


    // validate data
    if ( a === undefined || typeof a !== 'number'){
        return res.status(400).json({message : 'Error in "A" parameter' })
    }

    if (b === undefined || typeof b !== 'number'){
        return res.status(400).json({message : 'Error in "B" parameter' })
    }



    //logic
    const result = Math.pow(a , 2) + Math.pow(b , 2) 



    //generate response
    const response = {
        message:  'Success' , result
    }

    //log response
    console.log('Response body :' , response)

    //send response
    res.json(response)
})

// ------------ A ^ B Code -----------

app.post('/aPowB', (req, res) => {

    console.log ('Request body:' , req.body)


    //retreieve data
    const {a , b} = req.body


    // validate data
    if ( a === undefined || typeof a !== 'number'){
        return res.status(400).json({message : 'Error in "A" parameter' })
    }

    if (b === undefined || typeof b !== 'number'){
        return res.status(400).json({message : 'Error in "B" parameter' })
    }



    //logic
    const result = Math.pow(a , b)



    //generate response
    const response = {
        message:  'Success' , result
    }

    //log response
    console.log('Response body :' , response)

    //send response
    res.json(response)
})


app.post('/aMulB', (req, res) => {

    console.log ('Request body:' , req.body)


    //retreieve data
    const {a , b} = req.body


    // validate data
    if ( a === undefined || typeof a !== 'number'){
        return res.status(400).json({message : 'Error in "A" parameter' })
    }

    if (b === undefined || typeof b !== 'number'){
        return res.status(400).json({message : 'Error in "B" parameter' })
    }



    //logic
    const result = a*b



    //generate response
    const response = {
        message:  'Success' , result
    }

    //log response
    console.log('Response body :' , response)

    //send response
    res.json(response)
})

// start server
app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);

})
