const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// function middleWare(req,res,next)
// {
//     // console.log("This is from Header of the Request :"+req.headers.counter)
    // next();
// }

// app.use(middleWare);
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    // console.log(req.body);
    var num = req.query.counter
    var calCulatedSum = calCulatedSum(num)
    // res.status(201).send(`The Sum of 1 to ${num} is ${calCulatedSum}`)
    var returnJson = {
        "sum":calCulatedSum
    }

    res.status(201).send(returnJson)

    function calCulatedSum(num)
    {
        var sum = 0;
        for (let i = 0; i <= num; i++)
        {
            sum = sum + i
        }
        return sum
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})