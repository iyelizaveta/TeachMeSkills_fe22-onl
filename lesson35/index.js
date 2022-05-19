// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    },
];
//1
function userNames(arr) {
    var strings = arr.map(function (item) { return item.name; }).join(", ");
    console.log("User names are: ".concat(strings));
}
userNames(users);
//2
function numOfCars(arr) {
    var result = 0;
    arr.forEach(function (element) {
        if (element.cars) {
            var value = element.cars.length;
            result += value;
        }
    });
    console.log("Total cars: ".concat(result));
}
numOfCars(users);
//3
function filterByEducation(arr) {
    var newUsers = arr.filter(function (user) { return user.hasEducation; });
    console.log(newUsers);
}
filterByEducation(users);
//4
function filterByAnimals(arr) {
    var newUsers = arr.filter(function (user) { return user.animals; });
    console.log(newUsers);
}
filterByAnimals(users);
//5
function stringOfCars(arr) {
    var newArr = arr
        .map(function (user) { return user.cars; })
        .filter(function (car) { return car; })
        .join(" , ");
    console.log(newArr);
}
stringOfCars(users);
