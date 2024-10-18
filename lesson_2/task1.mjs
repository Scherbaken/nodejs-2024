// Задача 1. У консольний додаток передають через параметр пенсійний вік. Наприклад:
// node app.mjs –-pension=65
// Потім питаємо у терміналі користувача скільки йому років (використати “readline”) і кажемо чи він є пенсіонером.

import readline from "readline"

const params = process.argv.slice(2).join("&")
const paramsStr = new URLSearchParams(params)
const pensionAge = parseInt(paramsStr.get("--pension"))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(`How old are you?\n`, (answer) => {
  if (answer >= pensionAge) {
    console.log("You already have pension age")
  } else console.log("You are not a pension.")
  rl.close()
})
