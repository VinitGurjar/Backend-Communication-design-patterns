/*
    client code
    let sse = new EventSource("http://localhost:/stream")
    sse.onmessage = console.log()
*/

const app = require("express")();

//on visiting root it returns hello just to avoid cross origin resource sharing
app.get("/", (req, res) => res.send("shaher mein"));

app.get("/stream", (req, res) => {
  res.setHeader("content-type", "text/event-stream");
  send(res);
});

const port = process.env.PORT || 8888;

let i = 0;
function send(res) {
  //unending response and capturing data start with the word (data)
  //this sends a data with a counter every seconds
  res.write("data: " + `server:> ha meri jaan ---- [${i++}]\n\n`);
  setTimeout(() => send(res), 1000);
}

app.listen(port);
console.log(`Listening on ${port}`);
