const here1 = "The First One";
const here2 = "The Second One";

const http = require("http");

const PORT = 7000;
const PORT2 = 7500;

function handleRequest(request, response){
    response.end(here1);
}

function handleRequest2(request, response){
    response.end(here2);
}

const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

server.listen(PORT, () => {
    console.log("Server is listening on http://localhost:" + PORT);
});

server2.listen(PORT2, () => {
    console.log("Server is listening on http://localhost:" + PORT2);
});