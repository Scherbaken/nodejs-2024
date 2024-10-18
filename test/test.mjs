import { createServer } from "node:http"
import fs from "fs"
const server = createServer((req, res) => {
  const filePath = "file.txt"
  for (let i = 0; i <= 7; i++) {
    let num = Math.floor(Math.random() * 10) + 1
    fs.appendFileSync(filePath, `${num}\n`)
  }
  try {
    const data = fs.readFileSync(filePath, "utf-8")
    console.log("File was readed!")
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(data)
  } catch (err) {
    console.log("We have a mistake during reading file")
    console.log(err)
  }
})
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000")
})

//   try {
//     fs.writeFileSync(filePath, "", "utf-8")
//     console.log("File was created!")
//   } catch (err) {
//     console.log("We have a mistake during creating file")
//     console.log(err)
//   }
//   try {
//     fs.appendFileSync(filePath, "Hello world", "utf-8")
//     console.log("The data was updated!")
//   } catch (err) {
//     console.log("We have a mistake during appending file")
//     console.log(err)
//   }
