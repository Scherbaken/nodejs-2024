// Задача 5. Створити додаток з історією. У файлі json зберігаємо усі роути та кількість відвідувань. У налаштуваннях settings.json зберігати який роут треба використати для перегляду історії та назву файлу де зберігається історія

import { createServer } from "node:http"
import fs from "fs"

const server = createServer((req, res) => {})

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000")
})
