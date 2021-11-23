/**
 * 简单工厂模式：将创建对象的过程单独封装
 * 应用场景：有构造函数的地方
 * 录入员工信息，不同工种分配不同职责
 * name , age, career, work
 */

function User(name,age,career,work){
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}

function Factory(name,age,career){
    let work
    switch (career) {
        case 'PM':
            work = ['doc','meeting']
            break;
        case 'coder':
            work = ['xxx','xxx']
            break;
        default:
            break;
    }
    return new User(name,age,career,work)
}