import { User } from './src/user'
import { Main } from './src/main'
import { WebServer } from './src/web-server'

const user = new User('Taro', 10)
console.info(user.introduceMyself())

console.info('Create Main instance')
const main = new Main()

console.info('Create WebServer instance')
const webServer = new WebServer()
webServer.init()
