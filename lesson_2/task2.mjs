// Задача 2. Користувач через роут ‘/save_num/число’ може передати на сервер якесь число. Ці числа поступово треба зберігати у текстовому файлі numbers.txt. Наприклад, використовуючи такий роут:
// http://localhost:3000/save_num/78  -  у файл треба додати число 78.
// А використовуючи роути  ‘/sum’ – знайти суму, ‘mult’ –знайти добуток. За роутом «/remove» файл треба видалити.

import { createServer } from "node:http"
import fs from "fs"

const server = createServer((req, res) => {
  const numbersFilePath = "numbers.txt"
  if (req.url.startsWith("/save_num")) {
    let num = req.url.split("/")[2]
    try {
      fs.appendFileSync(numbersFilePath, `${num},`)
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Число додане до файлу`)
    } catch (err) {
      res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
      res.end("Помилка!")
      console.log(err)
    }
  } else if (req.url.startsWith("/sum")) {
    try {
      const data = fs.readFileSync(numbersFilePath, "utf-8")
      const numArr = data
        .split(",")
        .filter(Boolean)
        .map((el) => parseInt(el))
      const sum = numArr.reduce((prevSum, el) => prevSum + el, 0)
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Сума дорівнює: ${sum}`)
    } catch (err) {
      res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
      res.end("Помилка!")
    }
  } else if (req.url.startsWith("/mult")) {
    try {
      const data = fs.readFileSync(numbersFilePath, "utf-8")
      const numArr = data
        .split(",")
        .filter(Boolean)
        .map((el) => parseInt(el))
      const mult = numArr.reduce((prevSum, el) => prevSum * el, 1)
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Добуток дорівнює: ${mult}`)
    } catch (err) {
      res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
      res.end("Помилка!")
    }
  } else if (req.url.startsWith("/remove")) {
    try {
      fs.unlinkSync(numbersFilePath)
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Файл успішно видалено`)
    } catch (err) {
      res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
      res.end("Помилка!")
      console.log(err)
    }
  } else {
    res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
    res.end(`Введіть принаймі два числа за допомогою /save_num/"число"`)
  }
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000")
})
