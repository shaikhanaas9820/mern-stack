var sendObj = {
    method:"GET"
};

fetch("http://localhost:3000?counter=4",sendObj).then(callbackFn)

function callbackFn(res)
{
    res.json().then(logResponseBody)
}

function logResponseBody(body)
{
    console.log(body);
}