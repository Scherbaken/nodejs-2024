// Задача 3. Через параметри запиту передають операцію (add, subtract, mult) і числа (розділені дефісами), які треба опрацювати. Знайти результат і повернути користувачу. Наприклад при запиті:
// http://localhost:3000/add/12-4-23-45   - треба знайти суму чисел 12,4,23,45

import { createServer } from "node:http"

const server = createServer((req, res) => {
  if (req.url.startsWith("/add")) {
    const numbersStr = req.url.split("/add/")[1]
    if (numbersStr) {
      try {
        const sum = numbersStr
          .split("-")
          .map((el) => parseInt(el))
          .reduce((prevSum, el) => prevSum + el, 0)
        res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
        res.end(`Сума дорівнює: ${sum}`)
      } catch (err) {
        res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
        res.end("Помилка!")
      }
    } else {
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Не задані числа. Введіть числа у форматі "/1-2-3-4-5"`)
    }
  } else if (req.url.startsWith("/substract")) {
    const numbersStr = req.url.split("/substract/")[1]
    if (numbersStr) {
      try {
        const substract = numbersStr
          .split("-")
          .map((el) => parseInt(el))
          .reduce((prevSub, el) => prevSub - el)
        res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
        res.end(`Різниця дорівнює: ${substract}`)
      } catch (err) {
        res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
        res.end("Помилка!")
      }
    } else {
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Не задані числа. Введіть числа у форматі "/1-2-3-4-5"`)
    }
  } else if (req.url.startsWith("/mult")) {
    const numbersStr = req.url.split("/mult/")[1]
    if (numbersStr) {
      try {
        const mult = numbersStr
          .split("-")
          .map((el) => parseInt(el))
          .reduce((prevSum, el) => prevSum * el, 1)
        res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
        res.end(`Добуток дорівнює: ${mult}`)
      } catch (err) {
        res.writeHead(500, { "Сontent-type": "text/plain; charset=utf-8" })
        res.end("Помилка!")
      }
    } else {
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
      res.end(`Не задані числа. Введіть числа у форматі "/1-2-3-4-5"`)
    }
  } else {
    res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
    res.end(`Не правильна форма вводу даних!`)
  }
})

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000")
})
