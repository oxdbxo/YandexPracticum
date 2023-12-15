import express from "express";
import path from "path";

let app = express()
let port = 3000

app.use(express.static(path.resolve()+'/dist/'))
const handler = (req, res) => res.sendFile(path.join(path.resolve(), "dist/index.html"))
app.get('*', handler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
