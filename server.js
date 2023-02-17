const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(require("./routes/data"));


// app.post("/api/users", (req, res) => {
//   console.log(req.body);
//   users.push(req.body);
//   res.json( { status: "ok" } );
// });

// app.get("/api/users/:id", (req, res) => {
//   console.log(req.params.id);
//   res.json( users[req.params.id] );
// });

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on por ${server.address().port}!`)
);
