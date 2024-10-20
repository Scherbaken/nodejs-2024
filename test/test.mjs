import { EventEmitter } from "events"
const myEmitter = new EventEmitter()

myEmitter.on("event1", () => {
  console.log("An event occured!")
})
myEmitter.on("generateRandomValue", () => {
  console.log(Math.random())
})

myEmitter.emit("event1")
setTimeout(() => {
  myEmitter.emit("generateRandomValue")
}, 2000)
