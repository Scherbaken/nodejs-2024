// Задача 4. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи (розмістіть їх там же, де і додаток), що описують: інформацію про себе, інфорімацію про улюблену кав’ярню,  інформацію про улюблений музичний гурт.

import { createServer } from "node:http"
import fs from "fs"
const about = "public/info.html"
const coffee = "public/coffee.html"
const music = "public/music.html"

const server = createServer((req, res) => {
  if (req.url.startsWith("/coffee")) {
    try {
      const data = fs.readFileSync(coffee)
      res.writeHead(200, { "Content-type": "text/html" })
      res.end(data)
    } catch (err) {
      res.writeHead(500, { "Content-type": "text/plain" })
      res.end(`File not found!`)
    }
  } else if (req.url.startsWith("/music")) {
    try {
      const data = fs.readFileSync(music)
      res.writeHead(200, { "Content-type": "text/html" })
      res.end(data)
    } catch (err) {
      res.writeHead(500, { "Content-type": "text/plain" })
      res.end(`File not found!`)
    }
  } else if (!req.url.split("/")[1]) {
    try {
      const data = fs.readFileSync(about)
      res.writeHead(200, { "Content-type": "text/html" })
      res.end(data)
    } catch (err) {
      res.writeHead(500, { "Content-type": "text/plain" })
      res.end(`File not found!`)
    }
  } else {
    res.writeHead(500, { "Content-type": "text/plain" })
    res.end(`File not found!`)
  }
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000")
})
