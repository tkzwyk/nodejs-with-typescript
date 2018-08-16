export class User {
  private name: string
  private age: number

  constructor(name: string)
  constructor(name: string, age: number)

  constructor(name: string, age?: number) {
    this.name = name

    if (!age) {
      age = 0
    }

    this.age = age
  }

  introduceMyself() {
    return "My name is " + this.name + ". I'm " + this.age + " years old."
  }
}
