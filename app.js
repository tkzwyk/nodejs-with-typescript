"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./src/user");
const main_1 = require("./src/main");
const web_server_1 = require("./src/web-server");
const user = new user_1.User('Taro', 10);
console.info(user.introduceMyself());
console.info('Create Main instance');
const main = new main_1.Main();
console.info('Create WebServer instance');
const webServer = new web_server_1.WebServer();
webServer.init();
//# sourceMappingURL=app.js.map