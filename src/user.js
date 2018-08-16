"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.name = name;
        if (!age) {
            age = 0;
        }
        this.age = age;
    }
    introduceMyself() {
        return "My name is " + this.name + ". I'm " + this.age + " years old.";
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map