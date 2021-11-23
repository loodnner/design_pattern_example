class Animal {
    // 构造方法
    constructor(name) {
        // 属性
        this.name = name
    }

    // 父类方法
    echoName() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    // 构造方法
    constructor(name, age) {
        // 调用父类构造函数
        super(name)
        this.age = age
    }

    sayHello() {
        console.log(this.name, this.age);
    }
    echoName(){
        console.log('myOwnName');
    }
}

const myDog = new Dog('qqqqqcy',28)
myDog.sayHello()
myDog.echoName()